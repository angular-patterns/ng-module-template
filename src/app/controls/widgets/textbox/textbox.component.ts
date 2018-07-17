import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../models/textbox.options';


@Component({
  selector: 'app-textbox',
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
    this.formGroup.setControl(this.options.model, new FormControl(this.options.defaultValue));
  }

}
