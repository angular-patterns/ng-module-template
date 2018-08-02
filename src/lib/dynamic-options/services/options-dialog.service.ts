import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { filter } from 'rxjs/operators';
import { OptionsEvent, OptionsUpdatedEvent } from "../shared";


@Injectable()
export class OptionsDialogService {
    private subject: Subject<OptionsEvent>;
    private updateSubject: Subject<OptionsUpdatedEvent>;
    public remove$: Observable<OptionsEvent>;
    public settings$: Observable<OptionsEvent>;
    public update$: Observable<OptionsUpdatedEvent>;
    constructor() {
        this.subject = new Subject<OptionsEvent>();
        this.updateSubject = new Subject<OptionsUpdatedEvent>();
        this.remove$ = this.subject.asObservable().pipe(filter(t=> t.name == 'remove'));
        this.settings$ = this.subject.asObservable().pipe(filter(t=>t.name == 'settings'));
        this.update$ = this.updateSubject.asObservable();
    }
    public onRemove(options: any) {
        this.subject.next({ name: 'remove', options: options});
    }
    public onSettings(options: any) {
        this.subject.next({ name: 'settings', options: options});
    }
    public onUpdate(oldOptions: any, newOptions: any) {
        this.updateSubject.next({ oldOptions: oldOptions, newOptions: newOptions});
    }
}