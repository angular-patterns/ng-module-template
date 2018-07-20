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
  model = { email: 'email@gmail.com' };
  constructor(private formGroupService: FormGroupService) {
    this.model = this.formGroupService.getGroup(this.formGroup) ;
    //this.model.email = this.formGroupService.getValue(this.formGroup, 'email') || this.options.defaultValue;
    this.model.email = this.formGroup.get('email').value || this.options.defaultValue;
  }
  submit(model) {
    console.log(model);
  }
  ngOnInit() {
    this.model.email = this.formGroup.get('email').value || this.options.defaultValue;
    //this.model.email = this.options.defaultValue;
    //var value = this.formGroupService.getValue(this.formGroup, 'email') || this.options.defaultValue;
    //this.formGroup.addControl('email', new FormControl(this.options.defaultValue));
  }

}
