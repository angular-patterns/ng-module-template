import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { InstitutionService } from '../../services/institution-search.service';
import { FormlyUtilService } from '../../services/formly-utils.service';


@Component({
    selector: 'tmp-app-institution-search',
    templateUrl: './institution-search.component.html',
    styleUrls: [ './institution-search.component.css' ],
    providers: [InstitutionService]
})

export class InstitutionSearchComponent extends FieldType implements OnInit {

    constructor(private institutionService: InstitutionService, private utilService: FormlyUtilService) {
        super();
    }

    ngOnInit() {
        this.institutionService.getAll().subscribe( x => this.to.options = x);
        this.allSelected();
    }

    allSelected() {
        this.utilService.addUIControlToModel(this.model, 'institutionNotFound', false);
    }

    notFoundSelected() {
        this.utilService.addUIControlToModel(this.model, 'institutionNotFound', true);
    }

    get labelProp(): string { return this.to.labelProp || 'label'; }
    get valueProp(): string { return this.to.valueProp || 'value'; }
    get groupProp(): string { return this.to.groupProp || 'group'; }

}
