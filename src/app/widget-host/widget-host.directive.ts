import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[widget-host]',
  })
  export class WidgetHostDirective {
    constructor(public view: ViewContainerRef) { 
    }
  }
  