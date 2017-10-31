import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { UserPortal } from "../../model/user-portal.model";
import 'rxjs/add/operator/merge';

export class UserPortalProvider {
    public userPortal$: Observable<UserPortal>;
    private subject: BehaviorSubject<UserPortal>;

    constructor() {
        this.subject = new BehaviorSubject({
            key:'default',
            widgets: []
        });
        this.userPortal$ = this.subject.asObservable();
    }

    mergeWith(userPortal: Observable<UserPortal>) {
        this.userPortal$ = this.userPortal$.merge(userPortal);
    }

    update(userPortal:UserPortal) {
        this.subject.next(userPortal);
    }
}