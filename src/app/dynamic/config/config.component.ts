import { Component, OnInit, Injector,Input,Type, OnChanges, SimpleChanges, ReflectiveInjector } from '@angular/core';
import { WidgetSettingsRef } from '../shared/widget-ref.model';
import { WidgetSettings } from '../shared/widget-settings.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges {
  @Input() formGroup:FormGroup
  @Input() settingsRef: WidgetSettingsRef;
  @Input() settings: WidgetSettings;
  inputs: any;
  
  component: Type<any>;
  configInjector: Injector;
  constructor(private injector: Injector) { }

  ngOnInit() {

  }


  ngOnChanges(changes: SimpleChanges) {


    if (this.formGroup != null) {
      this.inputs = {
        formGroup: this.formGroup,
        settings: this.settings
      };
      this.component = this.settingsRef.component;
      this.configInjector = ReflectiveInjector.resolveAndCreate([
        ///{ provide: Layout, useFactory: () => this.model },
        //{ provide: FormGroup, useFactory:()=> this.formGroup },
        { provide: WidgetSettingsRef, useFactory:()=> this.settingsRef},
        { provide: WidgetSettings, useFactory:()=> this.settings }
      ], this.injector);
      
    }
 }

}
