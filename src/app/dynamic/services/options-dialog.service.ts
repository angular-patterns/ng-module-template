import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { filter } from 'rxjs/operators';
import { OptionsEvent } from "../models/optionsEvent.model";

@Injectable()
export class OptionsDialogService {
    private subject: Subject<OptionsEvent>;
    public remove$: Observable<OptionsEvent>;
    public settings$: Observable<OptionsEvent>;
    constructor() {
        this.subject = new Subject<OptionsEvent>();
        this.remove$ = this.subject.asObservable().pipe(filter(t=> t.name == 'remove'));
        this.settings$ = this.subject.asObservable().pipe(filter(t=>t.name == 'settings'));
    }
    public onRemove(options: any) {
        this.subject.next({ name: 'remove', options: options});
    }
    public onSettings(options: any) {
        this.subject.next({ name: 'settings', options: options});
    }
}