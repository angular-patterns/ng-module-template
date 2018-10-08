import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';

@Component({
    selector: 'tmp-app-classic-date-picker',
    templateUrl: 'classic-date-picker.component.html',
    styleUrls: [ './classic-date-picker.component.css' ]

})

export class ClassicDatePickerComponent extends FieldType implements OnInit {

    day: string;
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
            this.day = date[2];
        }
    }

    dayChange(day: HTMLInputElement) {
        console.log(day.value);
        this.day = day.value;
        this.createDate();
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
        const day = Number(this.day);
        const month = Number(this.month);
        const year = Number(this.year);
        if (isNaN(day)) { return; }
        if (isNaN(month)) { return; }
        if (isNaN(year)) { return; }
        const formattedDate = formatDate(new Date(year, month, day), 'yyyy-MM-dd', this.locale);
        this.model[this.key] = formattedDate;
    }


}
