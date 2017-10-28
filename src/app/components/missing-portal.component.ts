import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'missing-portal',
    templateUrl: 'missing-portal.component.html'
})

export class MissingPortalComponent implements OnInit {
    @Input() key: string;
    
    constructor() { }

    ngOnInit() { }
}