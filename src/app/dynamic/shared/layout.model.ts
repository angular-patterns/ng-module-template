import { Widget } from "./widget.model";

export class Layout {
    key: string;
    scope: string;
    name: string;
    data: any;
    widgets: {
        [outlet: string]: Widget[] 
    }
}