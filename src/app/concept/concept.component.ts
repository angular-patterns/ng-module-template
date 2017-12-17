import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'concept',
    templateUrl: 'concept.component.html'
})

export class ConceptComponent implements OnInit {
    @Input() img: string;
    constructor(private route:ActivatedRoute) { 
        route.parent.params.subscribe(t=> {
            this.img = t.concept;
        });
        //this.img = route.snapshot.data.img;
    }

    ngOnInit() { }
}