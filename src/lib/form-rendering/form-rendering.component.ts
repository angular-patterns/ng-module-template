import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-form-rendering',
  templateUrl: './form-rendering.component.html',
  styleUrls: ['./form-rendering.component.css']
})
export class FormRenderingComponent implements OnInit {
  title: string;
  model: any;
  formGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'field-input',
    },
  ];
  constructor() {
    this.title = 'Hello World!';
  }
  ngOnInit() {
    
  }

}
