import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
    selector: 'tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: [
        'tabs.component.css'
    ]
})

export class TabsComponent implements OnInit {
    id: string;
    url: string;
    constructor(private router:Router, private route:ActivatedRoute) {
        
        route.params.subscribe(t=> {
            this.id = t.id;
        });
        router.events.filter(t=> t instanceof NavigationEnd).map((t:NavigationEnd)=>t.url).subscribe((t)=> {
            this.url = t;
        });
     }

    ngOnInit() { }
}