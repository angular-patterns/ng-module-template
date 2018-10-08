import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LearnerSearchResult } from '../models/learner-search-result';
import { ScholarshipsExternalValidationService } from '../services/scholarships-external-validation.service';
import { Platform } from '../services/platform.service';

export function SinNineDigitsValidator(control: AbstractControl): ValidationErrors {
  if (control.value === null) {
    return null;
  }
  return getFalse(control.value) === true ? null : { 'SinNineDigits': true };
}

function getFalse(sinValue: any): boolean {
  const sinIsNumber = Number(sinValue);
  if (isNaN(sinIsNumber)) {
    return false;
  }
  return sinIsNumber.toString().length === 9;
}

export function SinValidator(control: AbstractControl): ValidationErrors {
  if (control.value === null) {
    return null;
  }
    // returning null side is when we have no validations firing and all is valid.
    return isSinValid(control.value, control) === true ? null : { 'SinValid': true };
  }

export function DuplicateSinValidator(control: AbstractControl): Promise<any> {
  if (control.value.length < 9) {
    return of(null).toPromise();
  }
  return isDuplicateSin(control.value).map(t => {
    if (t === true) {
      return { 'DuplicateSin': true };
    } else {
      return null;
    }} ).toPromise();
}

function isDuplicateSin(sinValue: any): Observable<boolean> {
  return Platform.injector.get(ScholarshipsExternalValidationService).getBySIN(sinValue).map(x => IsExists(x));
}

function IsExists(result: LearnerSearchResult): boolean {
  if (result.LearnerID !== undefined) {
    return true;
  }
  return false;
}

function isSinValid(sinValue: any, control: AbstractControl): boolean {
    if (!sinValue) { return false; }
    const sinIsNumber = Number(sinValue);
    if (isNaN(sinIsNumber)) {
      return false;
    }
    if (SinValidation.validSin(sinValue)) { return true; }
    return false;
  }


export class SinValidation {

  static validSin(value) {
    const SIN = value.replace(/-/g, '');
    if (SIN.length !== 9) { return false; }
    if (!(/^[123456789][\d]*$/.test(SIN))) {
        return false;
    }
    // Must meet the mod 10 check

    // Double the 2nd,4th,6th,8th digit
    let i = 0;
    let sinHolder = '';
    for (i = 0; i < SIN.length; i++) {
        if ((i % 2) === 1) {
            sinHolder += (SIN.charAt(i) * 2).toString();
        } else {
            sinHolder += SIN.charAt(i);
        }
    }

    // Sum up all the digit in sinHolder
    let sum = 0;
    for (i = 0; i < sinHolder.length; i++) {
        sum += sinHolder.charAt(i) as any * 1;
    }

    // SIN is valid if the total of the digits is a multiple of 10
    return ((sum % 10) === 0);
  }
}
