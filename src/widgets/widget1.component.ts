import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'widget1',
    template:`
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Widget 1</h3>
    </div>
    <div class="panel-body">
      Panel content
    </div>
  </div>
  <ng-content></ng-content>
    `
})

export class Widget1Component implements  OnInit {
    constructor() { }

    ngOnInit() { }
}