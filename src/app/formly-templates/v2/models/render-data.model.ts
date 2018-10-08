import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Guid } from "guid-typescript";

export class RenderData {
    form: FormGroup;
    model: any;
    fields: FormlyFieldConfig[];
    options: FormlyFormOptions;
}