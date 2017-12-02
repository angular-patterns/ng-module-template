import { Component, OnInit } from '@angular/core';
import { Guide } from "../guide.model";
import { HttpClient } from "@angular/common/http";
import { naming } from '../../docs/naming';

@Component({
    selector: 'sg-naming',
    templateUrl: 'naming.component.html'
})

export class NamingComponent implements OnInit {
    guide:  Guide;
    constructor() {
        this.guide = naming;
       
    }

    ngOnInit() { }
}