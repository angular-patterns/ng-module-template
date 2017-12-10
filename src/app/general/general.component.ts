import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'general',
    templateUrl: 'general.component.html'
})

export class GeneralComponent implements OnInit {
    general: Observable<any[]>;
    constructor(private http:HttpClient) {
        this.general = http.get<any[]>('http://localhost:3000/general-principles');


    }

    ngOnInit(): void {
        
    }

}