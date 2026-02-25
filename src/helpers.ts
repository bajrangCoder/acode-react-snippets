import convert from './htmltojsx.js';

function getFileExtension(fileName: string): string {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1 || lastDotIndex === fileName.length - 1) {
        return "";
    }
    return fileName.slice(lastDotIndex + 1).toLowerCase();
}

function getTypeFromMode(modeName: string): string {
    const normalizedModeName = modeName.toLowerCase();
    if (normalizedModeName.includes("tsx")) return "tsx";
    if (normalizedModeName.includes("jsx")) return "jsx";
    if (normalizedModeName.includes("typescript")) return "ts";
    if (normalizedModeName.includes("javascript")) return "js";
    const modeNameParts = normalizedModeName.split("/");
    return modeNameParts[modeNameParts.length - 1];
}

export function getCurrentFileType(session?: any): string {
    /*
    returns the file type of current file
    */
    const sessionModeId =
        session?.getMode?.()?.$id ||
        session?.$mode?.$id ||
        "";

    if (sessionModeId) {
        return getTypeFromMode(sessionModeId);
    }

    const activeFile = editorManager?.activeFile;
    const activeFileMode =
        (activeFile as any)?.currentMode || (activeFile as any)?.mode || "";
    if (activeFileMode) {
        const modeType = getTypeFromMode(activeFileMode);
        if (
            modeType === "jsx" ||
            modeType === "tsx" ||
            modeType === "javascriptreact" ||
            modeType === "typescriptreact"
        ) {
            return modeType;
        }
    }

    const fromFileName = getFileExtension(activeFile?.filename || "");
    if (fromFileName) {
        return fromFileName;
    }

    if (activeFileMode) {
        return getTypeFromMode(activeFileMode);
    }

    return "";
}

export function htmltojsx(input: string): string {
    /*
    Convert given input to jsx string
    */
    let output: string;
    output = convert(input);
    return output;
}
