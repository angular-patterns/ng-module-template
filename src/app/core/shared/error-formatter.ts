export interface ErrorFormatter {
    canFormat(error: any): boolean;
    format(error: any): Error;
}