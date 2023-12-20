import plugin from "../plugin.json";
import { getCurrentFileType, htmltojsx } from "./helpers";
import { snippets, Snippet } from "./snippets";
const { snippetManager } = ace.require("ace/snippets");
const selectionMenu = acode.require('selectionMenu');
const appSettings = acode.require("settings");
const { editor } = editorManager;

declare var extraSyntaxHighlightsInstalled: boolean;

class ReactSnippet {
    public baseUrl: string | undefined;
    private reactCompleter: any;

    constructor() {
        this.setVariables();
        this.initializeAutocompletion(snippets || []);
        if (!appSettings.value[plugin.id]) {
            appSettings.value[plugin.id] = {
                snippetDocs: false,
            };
            appSettings.update(false);
        }
    }

    private setVariables() {
        /*
        set FILE_NAME variable in ace
        */
        const { variables } = snippetManager;
        variables.FILE_NAME = () => {
            const fileNameWithExtension = editorManager.activeFile.filename;
            const lastDotIndex = fileNameWithExtension.lastIndexOf(".");
            const fileNameWithoutExtension = fileNameWithExtension.slice(
                0,
                lastDotIndex
            );
            return fileNameWithoutExtension;
        };
    }

    private initializeAutocompletion(snippets: Snippet[] | []): void {
        this.reactCompleter = {
            getCompletions: (
                editor: AceAjax.Editor,
                session: any,
                pos: AceAjax.Position,
                prefix: string,
                callback: (err: any, results: AceAjax.Completion[]) => void
            ) => {
                const currentFileType = getCurrentFileType(session);
                //check for file types
                const relevantSnippets = snippets.filter(s =>
                    s.fileTypes.includes(currentFileType)
                );

                if (relevantSnippets.length > 0) {
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
                                typeof extraSyntaxHighlightsInstalled !==
                                    "undefined" &&
                                extraSyntaxHighlightsInstalled
                            ) {
                                return {
                                    ...baseSnippet,
                                    icon: "icon react-snippet-icon"
                                };
                            } else {
                                return baseSnippet;
                            }
                        })
                    );
                } else {
                    callback(null, []);
                }
            }
        };

        editor.completers.unshift(this.reactCompleter);
    }

    async init(
        $page: WCPage,
        cacheFile: any,
        cacheFileUrl: string
    ): Promise<void> {
        if(this.settings.snippetDocs){
            const styling = document.createElement("style");
            styling.id = "overideCompletionDocs";
            styling.innerHTML = `
            .ace_tooltip.ace_doc-tooltip {
                display: flex !important;
                background-color: var(--secondary-color);
                color: var(--secondary-text-color);
                max-width: 68%;
                white-space: pre-wrap;
            }
            `;
            document.head.append(styling);
        }
        acode.addIcon("react-snippet-icon", this.baseUrl + "icon.png");
        selectionMenu.add(this.convertToJsx.bind(this), 'JSX', 'selected');
    }
    
    convertToJsx(){
        let selectionRange = editor.getSelectionRange();
        let selectedText = editor.getSelectedText();
        let convertedTxt = htmltojsx(selectedText);
        editor.getSession().replace(selectionRange, convertedTxt);
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
                if(value==true){
                    const styling = document.createElement("style");
                    styling.id = "overideCompletionDocs";
                    styling.innerHTML = `
                    .ace_tooltip.ace_doc-tooltip {
                        display: flex !important;
                        background-color: var(--secondary-color);
                        color: var(--secondary-text-color);
                        max-width: 68%;
                        white-space: pre-wrap;
                    }
                    `;
                    document.head.append(styling);
                } else if(value==false){
                    document.querySelector("overideCompletionDocs").remove();
                }
            },
        }
    }

    private get settings() {
        return appSettings.value[plugin.id];
    }

    async destroy() {
        editor.completers.splice(
            editor.completers.indexOf(this.reactCompleter),
            1
        );
        document.querySelector("overideCompletionDocs").remove();
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
