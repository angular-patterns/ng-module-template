import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyUtilService } from '../../services/formly-utils.service';


@Component({
    selector: 'tmp-app-program-of-study',
    templateUrl: './program-of-study.component.html',
    styleUrls: [ './program-of-study.component.css' ]
})

export class ProgramOfStudyComponent extends FieldType implements OnInit  {

    constructor(private utilService: FormlyUtilService) {
        super();
    }

    ngOnInit() {
        this.allSelected();
    }

    allSelected() {
        this.utilService.addUIControlToModel(this.model, 'programNotFound', false);
    }

    notFoundSelected() {
        this.utilService.addUIControlToModel(this.model, 'programNotFound', true);
    }

}
