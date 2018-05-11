import { WidgetType } from "./widget-ref.model";

export class Widget {
    id: string;
    key: string;
    name: string;
    data: any;
    type: WidgetType;
    validate?: Validate;
}

export class Validate {
    sync: { [key: string]: any };
    async: { [key: string]: any};
}
