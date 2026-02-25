import plugin from "../plugin.json";
import { getCurrentFileType, htmltojsx } from "./helpers";
import { snippets, Snippet } from "./snippets";

const selectionMenu = acode.require("selectionMenu");
const appSettings = acode.require("settings");

const ACE_DOC_STYLE_ID = "overideCompletionDocs";
const CM_COMPLETION_STYLE_ID = "reactSnippetCodeMirrorStyles";

function getAceSnippetManager(): any {
    try {
        if (typeof ace === "undefined") {
            return null;
        }
        return ace.require("ace/snippets")?.snippetManager ?? null;
    } catch {
        return null;
    }
}

const aceSnippetManager = getAceSnippetManager();

declare var extraSyntaxHighlightsInstalled: boolean;

type CodeMirrorCompletionContext = {
    pos: number;
    explicit: boolean;
    matchBefore: (expression: RegExp) => { from: number; to: number } | null;
};

class ReactSnippet {
    public baseUrl: string | undefined;

    private reactCompleter: any = null;
    private sourceSnippets: Snippet[] = [];

    private codeMirrorCompletionCompartment: any = null;
    private hasCodeMirrorCompletionAttached = false;
    private attachedCodeMirrorState: any = null;
    private hasCodeMirrorListeners = false;
    private codeMirrorAttachTimers: ReturnType<typeof setTimeout>[] = [];

    private autocompletionInitialized = false;

    private readonly codeMirrorLifecycleEvents: FileEvent[] = [
        "switch-file",
        "file-loaded",
    ];

    private readonly onCodeMirrorLifecycleChange = () => {
        this.configureCodeMirrorAutocompletion();
    };

    private readonly codeMirrorCompletionSource = (
        context: CodeMirrorCompletionContext
    ) => {
        const currentFileType = getCurrentFileType();
        const relevantSnippets = this.getRelevantSnippets(currentFileType);

        if (!relevantSnippets.length) {
            return null;
        }

        const typedWord = context.matchBefore?.(/[\w$-]*/);
        if (typedWord && typedWord.from === typedWord.to && !context.explicit) {
            return null;
        }
        if (!typedWord && !context.explicit) {
            return null;
        }

        return {
            from: typedWord ? typedWord.from : context.pos,
            options: relevantSnippets.map(snippet =>
                this.mapCodeMirrorCompletion(snippet)
            ),
            validFor: /^[\w$-]*$/,
        };
    };

    constructor() {
        if (!appSettings.value[plugin.id]) {
            appSettings.value[plugin.id] = {
                snippetDocs: false,
            };
            appSettings.update(false);
        }
    }

    private get editorInstance(): any {
        return editorManager.editor as any;
    }

    private get isCodeMirrorEditor(): boolean {
        return editorManager.isCodeMirror === true;
    }

    private get fileNameWithoutExtension(): string {
        const fileNameWithExtension = editorManager?.activeFile?.filename || "";
        const lastDotIndex = fileNameWithExtension.lastIndexOf(".");
        if (lastDotIndex === -1) {
            return fileNameWithExtension;
        }
        return fileNameWithExtension.slice(0, lastDotIndex);
    }

    private getTypeAliases(fileType: string): string[] {
        const normalized = String(fileType || "").toLowerCase();
        const aliases = new Set<string>([normalized]);

        if (normalized === "javascript" || normalized === "js") aliases.add("jsx");
        if (normalized === "typescript" || normalized === "ts") aliases.add("tsx");
        if (normalized === "javascriptreact") aliases.add("jsx");
        if (normalized === "typescriptreact") aliases.add("tsx");

        return Array.from(aliases);
    }

    private getRelevantSnippets(fileType?: string): Snippet[] {
        const currentFileType = (fileType || getCurrentFileType()).toLowerCase();
        const aliases = this.getTypeAliases(currentFileType);

        return this.sourceSnippets.filter(snippet =>
            snippet.fileTypes.some(type => aliases.includes(type.toLowerCase()))
        );
    }

    private setAceVariables() {
        const variables = aceSnippetManager?.variables;
        if (!variables) return;

        variables.FILE_NAME = () => {
            return this.fileNameWithoutExtension;
        };
    }

    private removeAceAutocompletion() {
        const editor = this.editorInstance;
        if (!editor?.completers || !this.reactCompleter) {
            return;
        }
        editor.completers = editor.completers.filter(
            (completer: any) => completer !== this.reactCompleter
        );
        this.reactCompleter = null;
    }

    private initializeAceAutocompletion(): void {
        this.setAceVariables();

        const editor = this.editorInstance;
        if (!Array.isArray(editor?.completers)) {
            return;
        }

        this.removeAceAutocompletion();

        this.reactCompleter = {
            getCompletions: (
                _editor: AceAjax.Editor,
                session: any,
                _pos: AceAjax.Position,
                _prefix: string,
                callback: (err: any, results: AceAjax.Completion[]) => void
            ) => {
                const currentFileType = getCurrentFileType(session);
                const relevantSnippets = this.getRelevantSnippets(currentFileType);

                callback(
                    null,
                    relevantSnippets.map(snippet => {
                        const baseSnippet = {
                            caption: snippet.prefix,
                            snippet: snippet.snippet,
                            meta: snippet.type,
                            value: snippet.snippet,
                            type: "snippet",
                            docHTML: snippet.description || ""
                        };

                        if (
                            typeof extraSyntaxHighlightsInstalled !== "undefined" &&
                            extraSyntaxHighlightsInstalled
                        ) {
                            return {
                                ...baseSnippet,
                                icon: "icon react-snippet-icon"
                            };
                        }

                        return baseSnippet;
                    })
                );
            }
        };

        editor.completers.unshift(this.reactCompleter);
    }

    private createCodeMirrorInfo(description: string): () => HTMLElement {
        return () => {
            const infoElement = document.createElement("div");
            infoElement.innerHTML = description;
            return infoElement;
        };
    }

    private expandSnippetForCodeMirror(template: string): string {
        return template
            .replace(/\$\{FILE_NAME\}/g, this.fileNameWithoutExtension)
            .replace(/\$\{(\d+):([^}]*)\}/g, "$2")
            .replace(/\$\{(\d+)\}/g, "")
            .replace(/\$([0-9]+)/g, "")
            .replace(/\$\{([^}:]+)\}/g, "$1");
    }

    private mapCodeMirrorCompletion(snippet: Snippet): any {
        return {
            label: snippet.prefix,
            type: "react-snippet",
            detail: snippet.type,
            ...(this.settings.snippetDocs &&
                snippet.description && {
                    info: this.createCodeMirrorInfo(snippet.description),
                }),
            apply: (view: any, _completion: any, from: number, to: number) => {
                const expandedSnippet = this.expandSnippetForCodeMirror(
                    snippet.snippet
                );
                view.dispatch({
                    changes: { from, to, insert: expandedSnippet },
                    selection: {
                        anchor: from + expandedSnippet.length,
                        head: from + expandedSnippet.length
                    }
                });
            }
        };
    }

    private addCodeMirrorLifecycleListeners() {
        if (this.hasCodeMirrorListeners) {
            return;
        }
        this.codeMirrorLifecycleEvents.forEach(eventName => {
            editorManager.on(eventName, this.onCodeMirrorLifecycleChange);
        });
        this.hasCodeMirrorListeners = true;
    }

    private removeCodeMirrorLifecycleListeners() {
        if (!this.hasCodeMirrorListeners) {
            return;
        }
        this.codeMirrorLifecycleEvents.forEach(eventName => {
            editorManager.off(eventName, this.onCodeMirrorLifecycleChange);
        });
        this.hasCodeMirrorListeners = false;
    }

    private clearCodeMirrorAttachTimers() {
        this.codeMirrorAttachTimers.forEach(timer => clearTimeout(timer));
        this.codeMirrorAttachTimers = [];
    }

    private queueInitialCodeMirrorAttach() {
        this.clearCodeMirrorAttachTimers();
        [0, 300, 900].forEach(delay => {
            const timer = setTimeout(() => {
                this.configureCodeMirrorAutocompletion();
            }, delay);
            this.codeMirrorAttachTimers.push(timer);
        });
    }

    private configureCodeMirrorAutocompletion() {
        const editor = this.editorInstance;
        const readOnlyCompartment = (editorManager as any)?.readOnlyCompartment;

        if (!editor?.state || !editor?.dispatch) {
            return;
        }

        const languageDataFacet = editor.state.constructor?.languageData;
        const reconfigureProbe = readOnlyCompartment?.reconfigure?.([]);
        const appendConfigEffect = reconfigureProbe?.constructor?.appendConfig;
        const compartmentClass = readOnlyCompartment?.constructor;

        if (!languageDataFacet?.of || !appendConfigEffect?.of) {
            return;
        }

        const extension = languageDataFacet.of(() => [
            { autocomplete: this.codeMirrorCompletionSource },
        ]);

        if (!compartmentClass) {
            if (this.attachedCodeMirrorState === editor.state) {
                return;
            }
            editor.dispatch({
                effects: appendConfigEffect.of(extension),
            });
            this.attachedCodeMirrorState = editor.state;
            this.hasCodeMirrorCompletionAttached = true;
            return;
        }

        if (!this.codeMirrorCompletionCompartment) {
            this.codeMirrorCompletionCompartment = new compartmentClass();
        }

        if (this.hasCodeMirrorCompletionAttached) {
            try {
                editor.dispatch({
                    effects: this.codeMirrorCompletionCompartment.reconfigure(
                        extension
                    ),
                });
                this.attachedCodeMirrorState = editor.state;
                return;
            } catch {
                this.hasCodeMirrorCompletionAttached = false;
            }
        }

        editor.dispatch({
            effects: appendConfigEffect.of(
                this.codeMirrorCompletionCompartment.of(extension)
            ),
        });
        this.hasCodeMirrorCompletionAttached = true;
        this.attachedCodeMirrorState = editor.state;
    }

    private removeCodeMirrorAutocompletion() {
        if (!this.hasCodeMirrorCompletionAttached) {
            return;
        }

        if (!this.codeMirrorCompletionCompartment) {
            this.hasCodeMirrorCompletionAttached = false;
            this.attachedCodeMirrorState = null;
            return;
        }

        const editor = this.editorInstance;
        if (!editor?.dispatch) {
            this.hasCodeMirrorCompletionAttached = false;
            this.attachedCodeMirrorState = null;
            return;
        }

        try {
            editor.dispatch({
                effects: this.codeMirrorCompletionCompartment.reconfigure([]),
            });
        } finally {
            this.hasCodeMirrorCompletionAttached = false;
            this.attachedCodeMirrorState = null;
        }
    }

    private initializeCodeMirrorAutocompletion(): void {
        this.removeAceAutocompletion();
        this.addCodeMirrorLifecycleListeners();
        this.configureCodeMirrorAutocompletion();
        this.queueInitialCodeMirrorAttach();
    }

    private initializeAutocompletion(sourceSnippets: Snippet[] | []): void {
        this.sourceSnippets = [...sourceSnippets];

        if (this.isCodeMirrorEditor) {
            this.initializeCodeMirrorAutocompletion();
            return;
        }

        this.removeCodeMirrorLifecycleListeners();
        this.clearCodeMirrorAttachTimers();
        this.removeCodeMirrorAutocompletion();
        this.initializeAceAutocompletion();
    }

    private setStyle(styleId: string, content: string): void {
        let styleNode = document.getElementById(styleId) as
            | HTMLStyleElement
            | null;
        if (!styleNode) {
            styleNode = document.createElement("style");
            styleNode.id = styleId;
            document.head.append(styleNode);
        }
        styleNode.textContent = content;
    }

    private removeStyle(styleId: string): void {
        document.getElementById(styleId)?.remove();
    }

    private syncCompletionStyles(): void {
        if (this.settings.snippetDocs) {
            this.setStyle(
                ACE_DOC_STYLE_ID,
                `
                .ace_tooltip.ace_doc-tooltip {
                    display: flex !important;
                    background-color: var(--secondary-color);
                    color: var(--secondary-text-color);
                    max-width: 68%;
                    white-space: pre-wrap;
                }
                .cm-tooltip.cm-completionInfo {
                    background-color: var(--secondary-color);
                    color: var(--secondary-text-color);
                    max-width: 68%;
                    white-space: pre-wrap;
                }
                `
            );
        } else {
            this.removeStyle(ACE_DOC_STYLE_ID);
        }

        this.setStyle(
            CM_COMPLETION_STYLE_ID,
            `
            .cm-tooltip-autocomplete .cm-completionIcon-react-snippet:after,
            .cm-tooltip-autocomplete .cm-completionIcon-react-snippet::after {
                content: "⚛";
                color: var(--active-color);
                font-size: 1rem;
                line-height: 1;
                font-weight: 600;
            }
            `
        );
    }

    async init(
        $page: WCPage,
        cacheFile: any,
        cacheFileUrl: string
    ): Promise<void> {
        if (!this.autocompletionInitialized) {
            this.initializeAutocompletion(snippets || []);
            this.autocompletionInitialized = true;
        } else if (this.isCodeMirrorEditor) {
            this.configureCodeMirrorAutocompletion();
        }

        this.syncCompletionStyles();
        if (this.baseUrl) {
            acode.addIcon("react-snippet-icon", this.baseUrl + "icon.png");
        }
        selectionMenu.add(this.convertToJsx.bind(this), "JSX", "selected");
    }

    convertToJsx() {
        const editor = this.editorInstance;
        const selectionRange = editor?.getSelectionRange?.();
        const selectedText =
            editor?.getSelectedText?.() || editor?.getCopyText?.() || "";
        const convertedTxt = htmltojsx(selectedText);
        const session = editor?.getSession?.() || editor?.session;

        if (session?.replace && selectionRange) {
            session.replace(selectionRange, convertedTxt);
        } else if (editor?.state && editor?.dispatch) {
            const { from, to } = editor.state.selection.main;
            editor.dispatch({
                changes: { from, to, insert: convertedTxt },
                selection: {
                    anchor: from + convertedTxt.length,
                    head: from + convertedTxt.length
                }
            });
        }

        window.toast("Converted 💥", 3000);
    }

    public get settingsObj() {
        return {
            list: [
                {
                    key: "snippetDocs",
                    text: "Enable snippet docs",
                    checkbox: !!this.settings.snippetDocs,
                    info: `To show brief docs about the snippets`,
                }
            ],
            cb: (key: string, value: boolean | string) => {
                this.settings[key] = value;
                appSettings.update();

                if (key === "snippetDocs") {
                    this.syncCompletionStyles();
                }
            },
        }
    }

    private get settings() {
        return appSettings.value[plugin.id];
    }

    async destroy() {
        this.removeAceAutocompletion();
        this.removeCodeMirrorLifecycleListeners();
        this.clearCodeMirrorAttachTimers();
        this.removeCodeMirrorAutocompletion();

        this.removeStyle(ACE_DOC_STYLE_ID);
        this.removeStyle(CM_COMPLETION_STYLE_ID);
    }
}

if (window.acode) {
    const acodePlugin = new ReactSnippet();
    acode.setPluginInit(
        plugin.id,
        async (
            baseUrl: string,
            $page: WCPage,
            { cacheFileUrl, cacheFile }: any
        ) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            await acodePlugin.init($page, cacheFile, cacheFileUrl);
        },
        acodePlugin.settingsObj
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
