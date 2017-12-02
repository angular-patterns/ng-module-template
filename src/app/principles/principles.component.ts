import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide.model';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { principles } from '../../docs/principles';

@Component({
    selector: 'sg-principles',
    templateUrl: 'principles.component.html'
})

export class PrinciplesComponent implements OnInit {
    guide:  Guide;
    constructor(http:HttpClient) {
        this.guide = principles;
       
    }

    ngOnInit() { }
}