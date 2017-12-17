import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tabs',
    templateUrl: 'tabs.component.html'
})

export class TabsComponent implements OnInit {
    constructor(private route:ActivatedRoute) {
        route.params.subscribe(t=> {
    
        });
     }

    ngOnInit() { }
}