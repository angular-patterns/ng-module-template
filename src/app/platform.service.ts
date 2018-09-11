import { Injectable, Injector } from "@angular/core";

@Injectable()
export class Platform {
    public static injector: Injector;
    constructor(rootInjector: Injector ) {
        Platform.injector = rootInjector;
    }
};