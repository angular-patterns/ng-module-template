import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { FormGroup } from "@angular/forms";
import { RenderData } from "../../form-core/models/render-data.model";

@Injectable()
export class RenderResolver implements Resolve<RenderData> {
    constructor() {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): RenderData {
        var section = route.parent.data.section;
        return  {
          fields: section.fields,
          options: {},
          form: new FormGroup({}),
          model: {}
        };      
    } 
}