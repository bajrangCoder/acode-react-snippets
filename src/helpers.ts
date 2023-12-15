import convert from './htmltojsx.js';

export function getCurrentFileType(session: any): string {
    /*
    returns the file type of current file 
    */
    const sessionNme = session.getMode().$id;
    const sessionNmeParts = sessionNme.split("/");
    return sessionNmeParts[sessionNmeParts.length - 1];
}

export function htmltojsx(input: string): string {
    /*
    Convert given input to jsx string
    */
    let output: string;
    output = convert(input);
    return output;
}