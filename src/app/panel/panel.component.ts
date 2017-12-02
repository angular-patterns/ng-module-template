import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sg-panel',
    templateUrl: 'panel.component.html'
})

export class PanelComponent implements OnInit {
    @Input() title: string;
    @Input() headers: string[];
    
    
    constructor() { }

    ngOnInit() { }
}