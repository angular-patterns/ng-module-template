import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { UserPortalProvider } from '../providers/user/user-portal.provider';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'user-portal',
    templateUrl: 'user-portal.component.html'
})

export class UserPortalComponent implements OnInit {
    key: Observable<string>;
    constructor(private userPortalProvider:UserPortalProvider) { 
        
        this.key = userPortalProvider
            .userPortal$
                .map(t=>t.key);
    }

    ngOnInit() {
        
     }
}