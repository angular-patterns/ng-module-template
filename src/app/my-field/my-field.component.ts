import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-field',
  templateUrl: './my-field.component.html',
  styleUrls: ['./my-field.component.css']
})
export class MyFieldComponent extends FieldType implements OnInit {
  formGroup: FormGroup;
  constructor() {
    super();
    
   }

  ngOnInit() {
    
   
  }

}
