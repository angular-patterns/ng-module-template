import { Injectable, Type, Inject } from "@angular/core";
import { Portal } from "../model/model";
import { PortalToken } from "../app.module";

@Injectable()
export class PortalProvider {
    constructor (@Inject(PortalToken) private portals: Portal[] = []) {
    }
    find(name: string): Type<any> {

      var portal = this.portals.find(t=>t.name == name);
      if (portal == null)
        throw new Error(`Portal "${name}" not found`);
        
      return portal.component;
    }

}