import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { data } from '../data';

@Component({
    selector: 'concept',
    templateUrl: 'concept.component.html'
})

export class ConceptComponent implements OnInit {
    @Input() concept: any;
    constructor(private route:ActivatedRoute) { 
        route.parent.params.subscribe(t=> {
            var id = t.id;
            this.concept = data.concepts.filter(t=>t.id == id)[0].concept;

        });
        //this.img = route.snapshot.data.img;
    }

    ngOnInit() { }
}