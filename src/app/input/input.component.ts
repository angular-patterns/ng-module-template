import { Component, OnInit, Input, SkipSelf, ComponentRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

@Component({
    selector: 'bs-input',
    templateUrl: 'input.component.html'
})

export class InputComponent implements OnInit {
    //formGroup:FormGroup;
    formControl: FormControl;
    @Input() label:string;
    @Input() name:string;
    @Input() value: string;
    @Input() formGroup: FormGroup;

    constructor(fb:FormBuilder) {
        
     }

    ngOnInit() {
        this.formControl = new FormControl(this.value);
        this.formGroup.addControl(this.name, this.formControl);
     }
}