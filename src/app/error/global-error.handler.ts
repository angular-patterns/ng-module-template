import { ErrorHandler, Injector, Type } from "@angular/core";
import { ErrorInfo } from "./error-info";

export class GlobalErrorHandler extends ErrorHandler
{
    private handlers: ErrorHandler[];
    constructor(private injector: Injector) {
        super();
        this.handlers = [];
    }
    use<T extends ErrorHandler>(type:Type<T>): GlobalErrorHandler {
    
        var handler = this.injector.get<T>(type);
        this.handlers.push(handler);
        return this;
    }
    handleError(error: any): void {
      
        var info = new ErrorInfo(error);
        this.handlers.forEach(t=> {
            try {
                t.handleError(info);
            }
            catch (error) {
                console.error(`An error occured while handling error with ${typeof(t)}`)
                super.handleError(error);
            }
        });
    }
}