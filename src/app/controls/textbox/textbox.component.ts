import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../shared/models/textbox.options';




@Component({
  selector: 'co-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: TextboxOptions;
  @Input() formGroup: FormGroup;
  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    this.formGroup.setControl(this.options.model, new FormControl(this.options.defaultValue));
  }
  ngOnChanges(changes: SimpleChanges) {
    this.formGroup.setControl(this.options.model, new FormControl(this.options.defaultValue));
  }
  ngOnDestroy() {
    this.formGroup.removeControl(this.options.model);
  }

}
