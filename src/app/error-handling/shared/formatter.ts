export interface Formatter {
    canFormat(error: any): boolean;
    format(error: any): Error;
}