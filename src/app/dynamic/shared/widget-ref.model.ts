import { Type } from "@angular/core";
import { WidgetSettings } from "./widget-settings.model";

export class WidgetRef {
    key: string;
    name: string;
    component: Type<any>;
    type: WidgetType;
    settings?: WidgetSettingsRef;
    initialize(settings:WidgetSettings): WidgetSettings 
    {
        return settings;
    }

}

export class WidgetSettingsRef {
    component: Type<any>;
    defaults: WidgetSettings;
}

export enum WidgetType {
    Field,
    Group,
    Section,
    Other
}

