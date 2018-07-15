import { Injectable, Inject } from "@angular/core";
import { WidgetRef, widgetRefToken } from "./widget.model";

@Injectable()
export class WidgetLookupService {
    constructor(@Inject(widgetRefToken) private widgetRefs: WidgetRef[]) {

    }

    find(name: string) {
        return this.widgetRefs.find(t=>t.name == name);
    }
}