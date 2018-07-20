import { Widget } from "../../../../framework/dynamic/models/widget.model";


export class Form {
    title: string;
    sections: Section[];
    idSpace: {[name: string]: number};
}

export class Section {
    title: string;
    widgets: Widget[];
}

