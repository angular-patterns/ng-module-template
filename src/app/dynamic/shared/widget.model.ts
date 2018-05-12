import { WidgetType } from "./widget-ref.model";

export class Widget {
    key: string;
    settings: any;
    type: WidgetType;
    validate?: Validate;
}

export class Validate {
    sync: { [key: string]: any };
    async: { [key: string]: any};
}
