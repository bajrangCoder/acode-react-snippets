export function getCurrentFileType(session: any){
    /*
    returns the file type of current file 
    */
    const sessionNme = session.getMode().$id;
    const sessionNmeParts = sessionNme.split("/");
    return sessionNmeParts[sessionNmeParts.length - 1];
}