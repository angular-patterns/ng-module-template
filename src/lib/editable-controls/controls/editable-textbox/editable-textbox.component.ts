import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../../controls';


@Component({
  selector: 'ec-textbox',
  templateUrl: './editable-textbox.component.html',
  styleUrls: ['./editable-textbox.component.css']
})
export class EditableTextboxComponent implements OnInit {
  @Input() options: TextboxOptions;
  @Input() formGroup: FormGroup;
  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {

  }


}
