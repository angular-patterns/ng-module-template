import { Type, InjectionToken } from "@angular/core";

export class Options {
    name: string;
    schema: any;
    default: any;
    component: Type<any>
}
export class OptionsEvent {
    name: string;
    options: any;
}
export class OptionsUpdatedEvent {
    oldOptions: any;
    newOptions: any;
}

export const optionsToken = new InjectionToken<Options>('options');