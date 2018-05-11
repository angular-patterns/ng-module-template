import { WidgetRef } from "./widget-ref.model";
import { LayoutRef } from "./layout-ref.model";
import { InjectionToken } from "@angular/core";

export interface Config {
    widgets: WidgetRef[],
    layouts: LayoutRef[]
}

export const ConfigToken: InjectionToken<Config> = new InjectionToken<Config>('Config Token');