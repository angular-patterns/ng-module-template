import { Widget } from "../../models/widget.model";

export class TableOptions {
    rows: number;
    cols: number;
    widgets: TableWidget[];
}

export class TableWidget {
    row: number;
    col: number;
    widget: Widget;
}