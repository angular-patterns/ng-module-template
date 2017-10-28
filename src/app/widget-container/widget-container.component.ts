import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserPortalProvider } from '../providers/user-portal/user-portal.provider';

@Component({
    selector: 'widget-container',
    templateUrl: 'widget-container.component.html'
})

export class WidgetContainerComponent implements OnInit {
    @Input() location: number;
    widgetKeys: Observable<string[]>
    constructor(private userPortalProvider:UserPortalProvider) {
        this.widgetKeys = userPortalProvider
            .userPortal$
                .map(t=>t.widgets)
                    .map(t=>t
                        .filter(x=>x.location == this.location)
                            .map(y=>y.key));
     }

    ngOnInit() {

     }
}