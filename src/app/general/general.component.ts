import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

var db = require('../../../db.json');


@Component({
    selector: 'general',
    templateUrl: 'general.component.html'
})

export class GeneralComponent implements OnInit {
    items: any[];
    constructor(private http:HttpClient) {
        this.items = db.general;
        http.get<any[]>('http://localhost:3000/general')
            .subscribe(t=> {
                this.items = t;
            });


    }

    ngOnInit(): void {
        
    }

}