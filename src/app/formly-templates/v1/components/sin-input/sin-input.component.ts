import { Component, OnChanges, SimpleChange, SimpleChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyUtilService } from '../../services/formly-utils.service';
import { SinValidation, SinNineDigitsValidator, SinValidator } from '../../validators/sin-validation';

@Component({
  selector: 'tmp-sin-input',
  templateUrl: './sin-input.component.html',
  styleUrls: ['./sin-input.component.css']
})

export class SinInputComponent extends FieldType {

  constructor(private utilService: FormlyUtilService) {
    super();

  }

  MAX_LENGTH = 9;

  checkSin(sinValue: any) {
    if (!sinValue) { return true; }
    if ( (sinValue.length === this.MAX_LENGTH) && !SinValidation.validSin(sinValue) ) {
      return false;
    }
    return true;
  }

  overrideChange(event) {
    if (event.target.checked) {
    this.form.get(this.key).clearValidators();
    this.form.get(this.key).updateValueAndValidity();
    this.checkedSelected();
    } else {
      this.addAllValidations();
      this.unCheckedSelected();
    }
  }

  addAllValidations() {
    this.form.get(this.key).clearValidators();
    this.form.get(this.key).setValidators([SinNineDigitsValidator, SinValidator ]);
    this.form.get(this.key).updateValueAndValidity();
  }

  checkedSelected() {
    this.utilService.addUIControlToModel(this.model, 'overrideSelected', true);
  }

  unCheckedSelected() {
    this.utilService.addUIControlToModel(this.model, 'overrideSelected', false);
  }

  getOverrideSelection() {
    if (this.model === undefined) { return false; }
    if (this.model['ui'] === undefined) { return false; }
    return this.model['ui']['overrideSelected'];
  }

  sinInputChanged($event) {
    if ($event.target.value.length < 9) {
      this.unCheckedSelected();
      this.addAllValidations();
    }
  }
}
