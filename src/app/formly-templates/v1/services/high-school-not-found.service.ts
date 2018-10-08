// This service s used to notify any subscriber that high school not found state has changed.
// The prov-state-country subscribes to this in order to reset the drop down values. 

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HighSchoolNotFoundService {

    private subject = new Subject<any>();

    sendMessage(highSchoolNotFound: boolean) {
        this.subject.next({ boolean: highSchoolNotFound });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
