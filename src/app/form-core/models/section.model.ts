import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Guid } from "guid-typescript";

export class Section {
    id: Guid;
    title: string;
    code: string;
    versionNumber: Number;
    formDefinitionId: Guid;

    form: FormGroup;
    model: any;
    fields: FormlyFieldConfig[];
    options: FormlyFormOptions;
}