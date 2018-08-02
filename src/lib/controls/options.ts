import { Widget } from "../dynamic";

export class GroupOptions {
    model: string;
    widget: Widget;
}

export class LabelOptions {
    text: string;
    size: string
}

export class LabelSize {
    static H1: string = 'H1';
    static H2: string = 'H2';
    static H3: string = 'H3';
    static H4: string = 'H4';
    static H5: string = 'H5';
}


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

export class TextboxOptions {
    name: string;
    placeholder: string;
    model: string;
    defaultValue: string;
    label: string;
}