import { Component, OnInit, Input } from '@angular/core';
import { UserPortalProvider } from '../providers/user-portal/user-portal.provider';
import { Observable} from 'rxjs/Observable';

@Component({
    selector: 'default-portal',
    templateUrl: 'default-portal.component.html'
})

export class DefaultPortalComponent implements OnInit {
    @Input() key: string;
    widgetKeys: Observable<string[]>;

    constructor(private userPortalProvider:UserPortalProvider) {
        this.widgetKeys = userPortalProvider
            .userPortal$
                .map(t=>t.widgets.map(t=>t.key));

     }

    ngOnInit() {

     }
}