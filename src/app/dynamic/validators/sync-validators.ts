import { ValidatorFn } from "@angular/forms";
import { Validators } from "@angular/forms";

export class SyncValidators {
    public static required(): ValidatorFn {
        return Validators.required;
    }
    public static minlength(length: number): ValidatorFn {
        return Validators.minLength(length);
    }
}