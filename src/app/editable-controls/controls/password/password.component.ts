import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PasswordOptions } from '../../../shared/models/password.options';

@Component({
  selector: 'ec-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent  {
  @Input() formGroup:FormGroup = new FormGroup({});
  @Input() options:PasswordOptions;


}
