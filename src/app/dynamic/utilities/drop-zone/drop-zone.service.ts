import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

import { DropEvent } from "./drop-event.model";
import { WidgetRef } from "../../models/widget.model";


@Injectable()
export class DropZoneService {
    private _dropSubject: Subject<DropEvent<any>>;

    constructor() {
        this._dropSubject = new Subject<DropEvent<any>>();
    }

    get drop$(): Observable<DropEvent<any>> {
        return this._dropSubject.asObservable();
    }

    acceptDrop(widgetRef: WidgetRef, args: any) {
        this._dropSubject.next({ widget: widgetRef, args: args });
    }
}