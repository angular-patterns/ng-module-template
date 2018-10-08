import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';
import { FormlyUtilService } from '../../services/formly-utils.service';

@Component({
    selector: 'tmp-kendo-date-picker',
    templateUrl: './kendo-date-picker.component.html',
    styleUrls: [ './kendo-date-picker.component.css' ]
})

export class KendoDatePickerComponent extends FieldType implements OnInit {

    public value: Date;

    constructor(@Inject(LOCALE_ID) private locale: string, private utilService: FormlyUtilService) {
        super();
    }

    ngOnInit() {
        if (this.model[this.key] !== undefined) {
            this.value = this.utilService.convertToJSDate(this.model[this.key]);
        }
    }

    public onChange(value: Date): void {
        this.model[this.key] = formatDate(value, 'yyyy-MM-dd', this.locale);
    }
}
