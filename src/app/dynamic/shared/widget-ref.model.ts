import { Type } from "@angular/core";

export class WidgetRef {
    key: string;
    name: string;
    component: Type<any>;
    type: WidgetType;
    config?: WidgetConfigRef;

}

export class WidgetConfigRef {
    component: Type<any>;
    properties: PropertiesRef;
}

export class PropertiesRef {
    [name: string]: PropertyRef;
}

export class PropertyRef {
    key: string;
    name: string;
    type: PropertyType   
}

export enum WidgetType {
    Field,
    Group,
    Section,
    Other
}
export enum PropertyType {
    String,
    Number,
    Date
}

