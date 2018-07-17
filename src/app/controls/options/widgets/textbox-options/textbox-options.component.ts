import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextboxOptions } from '../../../models/textbox.options';


@Component({
  selector: 'app-textbox-options',
  templateUrl: './textbox-options.component.html',
  styleUrls: ['./textbox-options.component.css']
})
export class TextboxOptionsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: TextboxOptions;

  constructor() { }

  ngOnInit() {
    if (this.formGroup) {

      this.formGroup.setControl('model', new FormControl(this.options.model));
      this.formGroup.setControl('placeholder', new FormControl(this.options.placeholder));
      this.formGroup.setControl('defaultValue', new FormControl(this.options.defaultValue));
      this.formGroup.setControl('label', new FormControl(this.options.label));
     
    }
  }


}
