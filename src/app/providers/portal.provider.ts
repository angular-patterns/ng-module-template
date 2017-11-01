import { Injectable, Type, Inject } from "@angular/core";
import { Portals } from "../model/model";
import { PortalToken } from "../app.module";

@Injectable()
export class PortalProvider {
    constructor (@Inject(PortalToken) private portals: Portals = []) {
    }
    find(name: string): Type<any> {
      return this.portals.find(t=>t.name == name).component;
    }

}