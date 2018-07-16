import { Widget } from "../../dynamic-core/widget.model";

export class Form {
    title: string;
    sections: Section[];
}

export class Section {
    title: string;
    widgets: Widget[];
}