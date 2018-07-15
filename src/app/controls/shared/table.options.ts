import { Widget } from "../../dynamic-core/widget.model";


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