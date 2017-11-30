import { Component, OnInit } from '@angular/core';
import { Guide } from "../guide.model";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'sg-naming',
    templateUrl: 'naming.component.html'
})

export class NamingComponent implements OnInit {
    guide:  Guide;
    constructor(http:HttpClient) {
        this.guide = null;

        http.get<Guide>(process.env.NAMING_URL).subscribe(t=> {
            this.guide = t;
        });
       
    }

    ngOnInit() { }
}