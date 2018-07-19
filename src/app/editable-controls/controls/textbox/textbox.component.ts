import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../../shared/controls-common/models/textbox.options';


@Component({
  selector: 'ec-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() options: TextboxOptions;
  @Input() formGroup: FormGroup;
  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {

  }


}
