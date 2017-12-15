import { ErrorHandler, Injectable } from "@angular/core";
import { ErrorInfo } from "../error-info";
import { Logger } from "../../logger/logger";

@Injectable()
export class LogHandler implements ErrorHandler{
    constructor(private logger:Logger){
        
    }
    handleError(info: ErrorInfo): void {
        console.log(info.error);
        this.logger.logError(info.error.message, info.error.stack, info.properties);
    }

}