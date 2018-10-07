import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Form } from "../../form-core/models/form.model";
import { Observable } from "rxjs";
import { FormService } from "../../form-core/services/form.service";

@Injectable()
export class FormResolver implements Resolve<Form> {
    constructor(private formService: FormService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Form> {
        const formCode = route.params.formCode;
        const effectiveDate = route.params.effectiveDate;
        
        return this.formService.getForm(formCode, effectiveDate);
    }
}