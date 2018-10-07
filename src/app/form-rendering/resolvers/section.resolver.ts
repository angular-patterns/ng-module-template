import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Form } from "../../form-core/models/form.model";
import { Observable } from "rxjs";
import { FormService } from "../../form-core/services/form.service";
import { tap } from "rxjs/operators";
import { Section } from "../../form-core/models/section.model";

@Injectable()
export class SectionResolver implements Resolve<Section> {
    constructor(private formService: FormService, private router: Router) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Section> {
        let sectionCode = route.params.sectionCode;
        const form: Form = route.parent.data.form;
        sectionCode = sectionCode ? sectionCode : form.sectionCodes[0];
        
        return this.formService.getSection(form.id, form.versionNumber, sectionCode).pipe(tap(t => {
            t.parent = form
        }));
    }
}