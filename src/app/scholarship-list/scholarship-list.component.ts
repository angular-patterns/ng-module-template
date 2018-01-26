import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scholarship } from '../domain/scholarship.model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'scholarship-list',
    templateUrl: 'scholarship-list.component.html'
})

export class ScholarshipListComponent implements OnInit {
    scholarships: Observable<Scholarship>;
    constructor(private http: HttpClient) {
        this.scholarships = this.http.get<Scholarship>('http://localhost:3000/scholarships');
     }

    ngOnInit() {

     }
}