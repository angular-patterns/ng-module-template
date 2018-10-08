import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { ReferenceDataService } from '../../services/reference-data.service';
import { NameValue } from '../../models/name-value.model';


@Component({
    selector: 'tmp-app-reference-data-select',
    templateUrl: './reference-data-select.component.html',
    styleUrls: [ './reference-data-select.component.css' ],
    providers: [ReferenceDataService]
})

export class ReferenceDataSelectComponent extends FieldType implements OnInit {

    selectOptions: Array<NameValue> = [];

    constructor(private referenceDataService: ReferenceDataService) {
        super();
    }

    ngOnInit() {
        const code = this.to.referenceDataCode;
        this.referenceDataService.getByCode(code).subscribe(nv => this.selectOptions = nv);
    }

}
