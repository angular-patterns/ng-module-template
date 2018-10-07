import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Form } from "../../form-core/models/form.model";
import { Observable } from "rxjs";
import { FormService } from "../../form-core/services/form.service";
import { tap } from "rxjs/operators";
import { Section } from "../../form-core/models/section.model";
import { FormGroup } from "@angular/forms";

@Injectable()
export class SectionResolver implements Resolve<Section> {
    constructor(private formService: FormService, private router: Router) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Section> {
        let sectionCode = route.params.sectionCode;
        const form: Form = route.parent.data.form;
        if (!sectionCode) {
            this.router.navigate(['form', route.parent.params.formCode, route.parent.params.effectiveDate, form.sectionCodes[0]]);
            return null;
        }

        return this.formService.getSection(form.id, form.versionNumber, sectionCode).pipe(tap(t => {
            t.parent = form,
            t.form = new FormGroup({}),
            t.options = {}
        }));
    }
}