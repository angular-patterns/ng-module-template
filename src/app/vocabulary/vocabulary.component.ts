import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'sg-vocabulary',
    templateUrl: 'vocabulary.component.html'
})

export class VocabularyComponent implements OnInit {
    items: Observable<any[]>;
    constructor(private http:HttpClient) {
        this.items = this.http.get<any[]>(process.env.VOCABULARY_URL);
     }

    ngOnInit() { }
}