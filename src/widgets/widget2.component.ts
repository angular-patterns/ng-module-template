import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'widget2',
    template:`
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Widget 2</h3>
    </div>
    <div class="panel-body">
      Panel content
    </div>
  </div>
    `
})

export class Widget2Component implements  OnInit {
    constructor() { }

    ngOnInit() { }
}