import plugin from "../plugin.json";
import { getCurrentFileType, htmltojsx } from "./helpers";
import { snippets, Snippet } from "./snippets";
import {
    codeMirrorSnippets,
    CodeMirrorSnippet,
    CODEMIRROR_FILE_NAME_TOKEN,
} from "./codemirrorSnippets";

const selectionMenu = acode.require("selectionMenu");
const appSettings = acode.require("settings");

const ACE_DOC_STYLE_ID = "overideCompletionDocs";
const CM_COMPLETION_STYLE_ID = "reactSnippetCodeMirrorStyles";
const CODEMIRROR_DONT_COMPLETE = [
    "TemplateString",
    "String",
    "RegExp",
    "LineComment",
    "BlockComment",
    "VariableDefinition",
    "TypeDefinition",
    "Label",
    "PropertyDefinition",
    "PropertyName",
    "PrivatePropertyDefinition",
    "PrivatePropertyName",
    "JSXText",
    "JSXAttributeValue",
    "JSXOpenTag",
    "JSXCloseTag",
    "JSXSelfClosingTag",
    ".",
    "?.",
];

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

function getCodeMirrorAutocompleteApi(): any {
    try {
        return (
            acode.require("@codemirror/autocomplete") ||
            acode.require("codemirror")?.autocomplete ||
            null
        );
    } catch {
        try {
            return acode.require("codemirror")?.autocomplete || null;
        } catch {
            return null;
        }
    }
}

function getCodeMirrorStateApi(): any {
    try {
        return (
            acode.require("@codemirror/state") ||
            acode.require("codemirror")?.state ||
            null
        );
    } catch {
        try {
            return acode.require("codemirror")?.state || null;
        } catch {
            return null;
        }
    }
}

declare var extraSyntaxHighlightsInstalled: boolean;

class ReactSnippet {
    public baseUrl: string | undefined;

    private reactCompleter: any = null;
    private sourceSnippets: Snippet[] = [];
    private codeMirrorSourceSnippets: CodeMirrorSnippet[] = [];

    private codeMirrorCompletionCompartment: any = null;
    private hasCodeMirrorCompletionAttached = false;
    private attachedCodeMirrorState: any = null;
    private hasEditorLifecycleListeners = false;
    private codeMirrorAttachTimers: ReturnType<typeof setTimeout>[] = [];
    private readonly codeMirrorSourceCache = new Map<string, any>();

    private autocompletionInitialized = false;

    private readonly codeMirrorLifecycleEvents: FileEvent[] = [
        "switch-file",
        "file-loaded",
    ];

  private readonly onCodeMirrorLifecycleChange = (f: EditorFile) => {
        if (!f.type || f.type !== "editor") {
            return;
        };
        this.syncAutocompletionForCurrentEditor();
    };

    private readonly codeMirrorCompletionSource = (context: any) => {
        const completionSource = this.createCodeMirrorCompletionSource();
        return completionSource ? completionSource(context) : null;
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

    private getRelevantSnippets<T extends { fileTypes: string[] }>(
        sourceSnippets: T[],
        fileType?: string
    ): T[] {
        const currentFileType = (fileType || getCurrentFileType()).toLowerCase();
        const aliases = this.getTypeAliases(currentFileType);

        return sourceSnippets.filter(snippet =>
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
                const relevantSnippets = this.getRelevantSnippets(
                    this.sourceSnippets,
                    currentFileType
                );

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

    private getCodeMirrorCompletionCacheKey(fileType: string): string {
        return [
            fileType.toLowerCase(),
            this.fileNameWithoutExtension,
            this.settings.snippetDocs ? "docs" : "nodocs",
        ].join("|");
    }

    private resolveCodeMirrorTemplate(template: string): string {
        return template
            .split(CODEMIRROR_FILE_NAME_TOKEN)
            .join(this.fileNameWithoutExtension);
    }

    private mapCodeMirrorCompletion(
        snippet: CodeMirrorSnippet,
        snippetCompletion?: any
    ): any {
        const completion = {
            label: snippet.prefix,
            type: "react-snippet",
            detail: snippet.type,
            ...(this.settings.snippetDocs &&
                snippet.description && {
                    info: this.createCodeMirrorInfo(snippet.description),
                }),
        };

        if (typeof snippetCompletion === "function") {
            try {
                return snippetCompletion(
                    this.resolveCodeMirrorTemplate(snippet.codeMirrorSnippet),
                    completion
                );
            } catch (error) {
                console.warn(
                    `Failed to create CodeMirror snippet completion for ${snippet.prefix}`,
                    error
                );
            }
        }

        return {
            ...completion,
            apply: (view: any, _completion: any, from: number, to: number) => {
                const expandedSnippet = this.resolveCodeMirrorTemplate(
                    snippet.fallbackSnippet
                );
                view.dispatch({
                    changes: { from, to, insert: expandedSnippet },
                    selection: {
                        anchor: from + expandedSnippet.length,
                        head: from + expandedSnippet.length
                    }
                });
            },
        };
    }

    private buildCodeMirrorCompletionSource(fileType: string): any {
        const autocompleteApi = getCodeMirrorAutocompleteApi();
        const relevantSnippets = this.getRelevantSnippets(
            this.codeMirrorSourceSnippets,
            fileType
        );

        if (
            !autocompleteApi ||
            !relevantSnippets.length ||
            typeof autocompleteApi.completeFromList !== "function"
        ) {
            return null;
        }

        const completions = relevantSnippets.map(snippet =>
            this.mapCodeMirrorCompletion(
                snippet,
                autocompleteApi.snippetCompletion
            )
        );

        let completionSource = autocompleteApi.completeFromList(completions);
        if (typeof autocompleteApi.ifNotIn === "function") {
            completionSource = autocompleteApi.ifNotIn(
                CODEMIRROR_DONT_COMPLETE,
                completionSource
            );
        }

        return completionSource;
    }

    private createCodeMirrorCompletionSource(): any {
        const currentFileType = getCurrentFileType();
        const cacheKey = this.getCodeMirrorCompletionCacheKey(currentFileType);
        const cachedSource = this.codeMirrorSourceCache.get(cacheKey);
        if (cachedSource) {
            return cachedSource;
        }

        const completionSource = this.buildCodeMirrorCompletionSource(currentFileType);
        if (!completionSource) {
            return null;
        }

        this.codeMirrorSourceCache.set(cacheKey, completionSource);
        return completionSource;
    }

    private addEditorLifecycleListeners() {
        if (this.hasEditorLifecycleListeners) {
            return;
        }
        this.codeMirrorLifecycleEvents.forEach(eventName => {
            editorManager.on(eventName, this.onCodeMirrorLifecycleChange);
        });
        this.hasEditorLifecycleListeners = true;
    }

    private removeEditorLifecycleListeners() {
        if (!this.hasEditorLifecycleListeners) {
            return;
        }
        this.codeMirrorLifecycleEvents.forEach(eventName => {
            editorManager.off(eventName, this.onCodeMirrorLifecycleChange);
        });
        this.hasEditorLifecycleListeners = false;
    }

    private clearCodeMirrorAttachTimers() {
        this.codeMirrorAttachTimers.forEach(timer => clearTimeout(timer));
        this.codeMirrorAttachTimers = [];
    }

    private queueInitialAutocompletionSync() {
        this.clearCodeMirrorAttachTimers();
        [0, 300, 900, 1800, 3500, 7000].forEach(delay => {
            const timer = setTimeout(() => {
                this.syncAutocompletionForCurrentEditor();
            }, delay);
            this.codeMirrorAttachTimers.push(timer);
        });
    }

    private configureCodeMirrorAutocompletion() {
        const editor = this.editorInstance;
        const codeMirrorState = getCodeMirrorStateApi();
        const EditorState = codeMirrorState?.EditorState;
        const StateEffect = codeMirrorState?.StateEffect;
        const Compartment = codeMirrorState?.Compartment;

        if (
            !editor?.state ||
            !editor?.dispatch ||
            !EditorState?.languageData?.of ||
            !StateEffect?.appendConfig?.of ||
            !Compartment
        ) {
            return;
        }

        if (this.attachedCodeMirrorState === editor.state && this.hasCodeMirrorCompletionAttached) {
            return;
        }

        const extension = EditorState.languageData.of(() => [
            { autocomplete: this.codeMirrorCompletionSource },
        ]);

        if (!this.codeMirrorCompletionCompartment) {
            this.codeMirrorCompletionCompartment = new Compartment();
        }

        if (this.attachedCodeMirrorState !== editor.state) {
            this.hasCodeMirrorCompletionAttached = false;
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
            effects: StateEffect.appendConfig.of(
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
        this.configureCodeMirrorAutocompletion();
    }

    private syncAutocompletionForCurrentEditor(): void {
        if (this.isCodeMirrorEditor) {
            this.initializeCodeMirrorAutocompletion();
            this.clearCodeMirrorAttachTimers();
            return;
        }

        this.clearCodeMirrorAttachTimers();
        this.removeCodeMirrorAutocompletion();
        this.initializeAceAutocompletion();
    }

    private initializeAutocompletion(sourceSnippets: Snippet[] | []): void {
        this.sourceSnippets = [...sourceSnippets];
        this.codeMirrorSourceSnippets = [...codeMirrorSnippets];
        this.codeMirrorSourceCache.clear();
        this.addEditorLifecycleListeners();
        this.syncAutocompletionForCurrentEditor();
        this.queueInitialAutocompletionSync();
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
        } else {
            this.syncAutocompletionForCurrentEditor();
            this.queueInitialAutocompletionSync();
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
                    this.codeMirrorSourceCache.clear();
                    if (this.isCodeMirrorEditor) {
                        this.configureCodeMirrorAutocompletion();
                    }
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
        this.removeEditorLifecycleListeners();
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
