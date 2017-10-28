
import { Type } from "@angular/core";
import { Portal } from "../../model/portal.model";

export interface PortalProviderOptions {
    missingComponent: Type<any>;

}

export class PortalProvider {
    private options: PortalProviderOptions;
    private portals: { [key:string]: Portal };

    constructor() {
        this.options = null;
        this.portals = {};
    }

    findPortal(key:string) {
        if (this.portals.hasOwnProperty(key))
            return this.portals[key];

        if (this.options == null || this.options.missingComponent == null) {
            throw new Error (`PortalProvider: No portal registered with key "${key}"`);
        }

        return {
            key: key,
            type: this.options.missingComponent
        }
    }


    static register(portals:Portal[], options:PortalProviderOptions = null): PortalProvider {
        var portalProvider = new PortalProvider();
        portals.forEach(t=> {
            portalProvider.portals[t.key] = t;
        });

        if (options != null) {
            portalProvider.options = options;
        }
        
        return portalProvider;

    }


}