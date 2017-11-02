import { Injectable, Type, Inject } from "@angular/core";
import { Portlets } from "../model/model";
import { PortalToken, PortletToken } from "../app.module";

@Injectable()
export class PortletProvider {
    constructor (@Inject(PortletToken) private portlets: Portlets = []) {
    }
    find(name: string): Type<any> {
      return this.portlets.find(t=>t.name == name).component;
    }

}