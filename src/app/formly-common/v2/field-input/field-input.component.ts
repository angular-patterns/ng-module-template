import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent  extends FieldType implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
