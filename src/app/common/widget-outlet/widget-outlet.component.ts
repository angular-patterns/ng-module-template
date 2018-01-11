import { Component, OnInit, Type, Input } from '@angular/core';
import { PortalService } from '../../core/portal.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'widget-outlet',
    templateUrl: 'widget-outlet.component.html',
    styleUrls: [
        'widget-outlet.component.css'
    ]
})

export class WidgetOutletComponent implements OnInit {
    @Input() key: string;
    types: Observable<Type<any>[]>;
    constructor(private portalService: PortalService) { 
        this.types = this.portalService.widgets
            .map(t=>t[this.key])
            .filter(t=> t!= undefined);
    }

    ngOnInit() { }
}