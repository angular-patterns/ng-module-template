import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../shared/models/textbox.options';
import { FormGroupService } from '../../dynamic/services/form-group.service';

@Component({
  selector: 'co-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: TextboxOptions;
  @Input() formGroup: FormGroup;
  @Input() model: any;
  constructor(private formGroupService: FormGroupService) { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    
    this.formGroup.setControl(this.options.model, new FormControl());
  }
  ngOnChanges(changes: SimpleChanges) {
    this.formGroup.setControl(this.options.model, new FormControl());
  }
  ngOnDestroy() {
    this.formGroup.removeControl(this.options.model);
  }

}
