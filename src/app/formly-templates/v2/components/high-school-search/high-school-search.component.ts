import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { HighSchoolSearchService } from '../../services/high-school-search.service';
import { NgSelectComponent, NgOption } from '@ng-select/ng-select';

@Component({
    selector: 'tmp-app-high-school-search',
    templateUrl: './high-school-search.component.html',
    styleUrls: [ './high-school-search.component.css' ]
})

export class HighSchoolSearchComponent extends FieldType implements OnInit {
    private checkbox: FormControl;
    public localModel: any;

    @ViewChild('highSchoolSelect') public ngSelect: NgSelectComponent;


    constructor(private highSchoolSearchService: HighSchoolSearchService) {
        super();
        this.localModel = {
            id: '',
            name: '',
            notFound: false 

        }
        
    }

    ngOnInit() {
        if (!this.model[this.key])
            this.model[this.key] = this.localModel;
    
        this.highSchoolSearchService.getAllActive().subscribe( x => {
            this.to.options = x;            
            this.localModel = this.model[this.key];
        });
        this.checkbox = new FormControl(this.localModel.notFound);
        this.checkbox.valueChanges.subscribe(t=> {
            this.localModel.notFound = t;
            this.localModel.id = '';
            this.localModel.name = '';
            this.formState.highSchoolNotFound = t;                        
        });
    }


    onSelectChange($event) {
        this.localModel.id = $event.id;
        this.localModel.name = $event.highSchoolName;
        this.localModel.notFound = false;
        this.model[this.key] =  this.localModel;  
    }
    onInputChange($event) {
        this.localModel.name = $event.target.value;
    }

}
