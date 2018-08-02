import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../options';
import { FormGroupService } from '../../dynamic';

@Component({
  selector: 'co-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: TextboxOptions;
  @Input() formGroup: FormGroup;
  constructor(private formGroupService: FormGroupService) { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    var value = this.formGroupService.getValue(this.formGroup, this.options.model) || this.options.defaultValue;
    this.formGroup.setControl(this.options.model, new FormControl(value));
  }
  ngOnChanges(changes: SimpleChanges) {
    this.formGroup.setControl(this.options.model, new FormControl(this.options.defaultValue));
  }
  ngOnDestroy() {
    this.formGroup.removeControl(this.options.model);
  }

}
