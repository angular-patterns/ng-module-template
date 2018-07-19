import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PasswordOptions } from '../../shared/models/password.options';
import { FormGroupService } from '../../dynamic/services/form-group.service';

@Component({
  selector: 'co-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() options: PasswordOptions;

  constructor(private formGroupService: FormGroupService) {
    
  }
  submit(model) {
    console.log(model);
  }
  ngOnInit() {
    var value = this.formGroupService.getValue(this.formGroup, this.options.model) || this.options.defaultValue;
    this.formGroup.setControl(this.options.model, new FormControl(value));
  }

}
