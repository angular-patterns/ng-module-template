import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';

@Component({
    selector: 'tmp-app-classic-year-month-picker',
    templateUrl: 'classic-year-month-picker.component.html',
    styleUrls: [ './classic-year-month-picker.component.css' ]

})

export class ClassicYearMonthPickerComponent extends FieldType implements OnInit {

    dateEntered: Date;
    month: string;
    year: string;


    constructor(@Inject(LOCALE_ID) private locale: string) {
        super();
    }

    ngOnInit() {
        if (this.model[this.key] !== undefined) {
            const date = this.model[this.key].split('-', 3); // the date will have a format like yyyy-mm-dd
            this.year = date[0];
            this.month = (parseInt(date[1], 10) - 1).toString();
        }
    }

    monthChange(month: HTMLInputElement) {
        this.month = month.value;
        this.createDate();
    }

    yearChange(year: HTMLInputElement) {
        this.year = year.value;
        this.createDate();
    }

    createDate() {
        const month = Number(this.month);
        const year = Number(this.year);
        if (isNaN(month)) { return; }
        if (isNaN(year)) { return; }
        this.dateEntered = new Date(year, month, 1);
        this.model[this.key] = formatDate(this.dateEntered, 'yyyy-MM-dd', this.locale);
    }

}
