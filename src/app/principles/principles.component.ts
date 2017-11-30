import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide.model';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'sg-principles',
    templateUrl: 'principles.component.html'
})

export class PrinciplesComponent implements OnInit {
    guide:  Guide;
    constructor(http:HttpClient) {
        this.guide = null;

        http.get<Guide>(process.env.PRINCIPLES_URL).subscribe(t=> {
            this.guide = t;
        });
       
    }

    ngOnInit() { }
}