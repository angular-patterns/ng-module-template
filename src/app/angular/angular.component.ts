import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'angular',
    templateUrl: 'angular.component.html'
})

export class AngularComponent implements OnInit {

    angular: Observable<any[]>;
    constructor(private http:HttpClient) {

        this.angular = http.get<any[]>('http://localhost:3000/angular-principles');
    }

    ngOnInit() { }
}