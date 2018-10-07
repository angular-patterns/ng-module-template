import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { Guid } from 'guid-typescript';

export class Form {
    id: Guid;
    code: string;
    title: string;
    versionNumber: Number;
    sectionCodes: string[];
}