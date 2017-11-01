import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'portal1',
    template: `
    <h1>Portal 1</h1>
    <div class="container">
    <div class="row">
        <div class="col-md-4">
            <widget-container location="1"></widget-container>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <widget-container location="2">
            </widget-container>
        </div>
    </div>
    </div>

    `
})

export class Portal1Component implements  OnInit {
    constructor() {
     }

    ngOnInit() { }
}

