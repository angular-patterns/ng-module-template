import { Injectable, Injector } from '@angular/core';

@Injectable({ providedIn: 'root'})

export class Platform {
    static injector: Injector = null;

    constructor(rootInjector: Injector) {
        Platform.injector = rootInjector;
    }

}
