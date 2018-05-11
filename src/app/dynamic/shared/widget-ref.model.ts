import { Type } from "@angular/core";

export interface WidgetRef {
    key: string,
    name: string,
    component: Type<any>;
    type: WidgetType;
    properties?: Type<any>;

}

export enum WidgetType {
    Field,
    Group,
    Section,
    Other
}