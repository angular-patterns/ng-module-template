import { Component, Output, EventEmitter, OnInit, Injector,Input,Type, OnChanges, SimpleChanges, ReflectiveInjector } from '@angular/core';
import { WidgetSettingsRef } from '../shared/widget-ref.model';
import { WidgetSettings } from '../shared/widget-settings.model';
import { FormGroup } from '@angular/forms';
import { Widget } from '../shared/widget.model';


@Component({
  selector: 'config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges {
  @Input() settingsRef: WidgetSettingsRef;
  @Input() settings: WidgetSettings;
  @Output() settingsChange: EventEmitter<WidgetSettings>;
  inputs: any;
  outputs: any;
  
  component: Type<any>;
  configInjector: Injector;
  constructor( private injector: Injector) {
    this.settingsChange = new EventEmitter<WidgetSettings>();
   }

  ngOnInit() {

  }


  ngOnChanges(changes: SimpleChanges) {


    if (this.settings != null) {
      this.inputs = {
        settings: this.settings
        
      };
      this.outputs = {
        settingsChange: (s: any)=> {
          this.settings = s;
          this.settingsChange.next(this.settings);  
        }
      }

      this.component = this.settingsRef.component;
      this.configInjector = ReflectiveInjector.resolveAndCreate([
        ///{ provide: Layout, useFactory: () => this.model },
  
        { provide: WidgetSettingsRef, useFactory:()=> this.settingsRef},
        { provide: WidgetSettings, useFactory:()=> this.settings }
      ], this.injector);
      
    }
 }

}
