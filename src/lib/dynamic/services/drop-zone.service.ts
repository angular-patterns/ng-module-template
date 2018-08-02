import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

import { WidgetRef, DropEvent } from "../shared";



@Injectable()
export class DropZoneService {
    private _dropSubject: Subject<DropEvent<any>>;

    constructor() {
        this._dropSubject = new Subject<DropEvent<any>>();
    }

    get drop$(): Observable<DropEvent<any>> {
        return this._dropSubject.asObservable();
    }

    acceptDrop(obj: WidgetRef, args: any) {
        this._dropSubject.next({ widget: obj, args: args });
    }
}