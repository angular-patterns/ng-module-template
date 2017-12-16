import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'concept',
    templateUrl: 'concept.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ConceptComponent implements OnInit {
    images: string[];
    constructor() { 
        this.images = [
            "bootstrap",
            "module-deps",
            "mvc"
        ]
    }

    ngOnInit() { }
}