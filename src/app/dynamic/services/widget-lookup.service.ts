import { Injectable, Inject } from "@angular/core";
import { widgetRefToken, WidgetRef } from "../models/widget.model";


@Injectable()
export class WidgetLookupService {
    constructor(@Inject(widgetRefToken) private widgetRefs: WidgetRef[]) {

    }
    getAll() {
        return this.widgetRefs;
    }

    find(name: string) {
        return this.widgetRefs.find(t=>t.name == name);
    }
}