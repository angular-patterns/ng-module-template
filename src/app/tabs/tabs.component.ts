import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import { data } from '../data';

@Component({
    selector: 'sa-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: [
        'tabs.component.css'
    ]
})

export class TabsComponent implements OnInit {
    id: string;
    url: string;
    concept: any;
    demoUrls: {
        url: SafeUrl,
        route: string
    }[];
    constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
        this.concept = {};
        this.demoUrls = data.concepts.map(t => {
            return {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(t.demoUrl),
                route: t.link + '/demo'
            };
        });
        route.params.subscribe(t => {
            this.id = t.id;
            this.concept = data.concepts.filter(x => x.id === this.id)[0];
        });
        router.events.filter(t => t instanceof NavigationEnd).map((t: NavigationEnd) => t.url).subscribe((t) => {
            this.url = t;
        });
     }

    ngOnInit() { }
}
