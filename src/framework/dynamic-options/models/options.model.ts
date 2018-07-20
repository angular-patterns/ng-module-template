import { Type, InjectionToken } from "@angular/core";

export class Options {
    name: string;
    schema: any;
    default: any;
    component: Type<any>
}

export const optionsToken = new InjectionToken<Options>('options');