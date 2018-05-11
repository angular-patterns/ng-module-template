import { Component, OnInit, Injector,Input,Type, OnChanges, SimpleChanges, ReflectiveInjector } from '@angular/core';
import { WidgetConfigRef } from '../shared/widget-ref.model';
import { WidgetConfig } from '../shared/widget-config.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges {
  @Input() formGroup:FormGroup
  @Input() model: WidgetConfigRef;
  @Input() config: WidgetConfig;
  inputs: any;
  
  component: Type<any>;
  configInjector: Injector;
  constructor(private injector: Injector) { }

  ngOnInit() {

  }


  ngOnChanges(changes: SimpleChanges) {


    if (this.formGroup != null) {
      this.inputs = {
        formGroup: this.formGroup
      };
      this.component = this.model.component;
      this.configInjector = ReflectiveInjector.resolveAndCreate([
        ///{ provide: Layout, useFactory: () => this.model },
        //{ provide: FormGroup, useFactory:()=> this.formGroup },
        { provide: WidgetConfigRef, useFactory:()=> this.model},
        { provide: WidgetConfig, useFactory:()=> this.config }
      ], this.injector);
      
    }
 }

}
