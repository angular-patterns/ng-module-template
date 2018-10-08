import { Component, OnInit, OnChanges } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'tmp-app-yes-no-select',
    templateUrl: 'yes-no-select.component.html',
    styleUrls: [ './yes-no-select.component.css' ]
})

export class YesNoSelectComponent  extends FieldType implements OnInit, OnChanges {

    ngOnInit() {
        this.form.get(this.key).updateValueAndValidity();
    }

    ngOnChanges() {
        this.form.get(this.key).updateValueAndValidity();
    }
}
