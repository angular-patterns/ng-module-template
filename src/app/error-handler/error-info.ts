export class ErrorInfo
{
    public properties: {[key: string]: string};
    public error: Error;

    constructor(error: Error) {
        this.error = error;
        this.properties = {};
    }
}