import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { vocabulary } from '../../docs/vocabulary';

@Component({
    selector: 'sg-vocabulary',
    templateUrl: 'vocabulary.component.html'
})

export class VocabularyComponent implements OnInit {
    items: any;
    constructor() {
        this.items = vocabulary;
     }

    ngOnInit() { }
}