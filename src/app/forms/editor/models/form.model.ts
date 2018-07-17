import { Widget } from "../../../dynamic/models/widget.model";

export class Form {
    title: string;
    sections: Section[];
}

export class Section {
    title: string;
    widgets: Widget[];
}