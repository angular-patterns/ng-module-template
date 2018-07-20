import { Component, OnInit, Injector, Type, Input, ReflectiveInjector, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-widget-template',
  templateUrl: './widget-template.component.html',
  styleUrls: ['./widget-template.component.css']
})
export class WidgetTemplateComponent implements OnInit, OnChanges {
  @Input() options: any;
  @Input() component: Type<any>;
  @Input() formGroup: FormGroup;
  
  inputs: any;
  widgetInjector: Injector;
  constructor(private injector: Injector) { 

  }

  ngOnInit() {
    this.inputs = {
      options: this.options,
      formGroup: this.formGroup
    }
    this.widgetInjector = ReflectiveInjector.resolveAndCreate([

    ], this.injector);
  }

  ngOnChanges() {
    this.inputs = {
      options: this.options,
      formGroup: this.formGroup
    }
    this.widgetInjector = ReflectiveInjector.resolveAndCreate([

    ], this.injector);
  }

}
