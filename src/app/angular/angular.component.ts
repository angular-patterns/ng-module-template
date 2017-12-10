import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

var db = require('../../../db.json');

@Component({
    selector: 'angular',
    templateUrl: 'angular.component.html'
})

export class AngularComponent implements OnInit {

    items: any[];
    constructor(private http:HttpClient) {
        this.items = db.angular;
        http.get<any[]>('http://localhost:3000/angular').subscribe(t=>{
            this.items = t;
        });

    }

    ngOnInit() { }
}