import { Component, OnInit, Input, OnChanges, SimpleChanges, Type,Injector, ReflectiveInjector, Output } from '@angular/core';
import { FormService } from '../form.service';
import { Widget } from '../shared/widget.model';
import { WidgetRef, WidgetType, WidgetSettingsRef } from '../shared/widget-ref.model';
import { FormGroupService } from '../form/form-group.service';
import { FormGroup } from '@angular/forms';
import { Section } from '../shared/section.model';
import { Layout } from '../shared/layout.model';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { WidgetSettings } from '../shared/widget-settings.model';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [

  ]
})
export class WidgetComponent implements OnInit, OnChanges {

  @Input() model: Widget;
  @Output() modelChange: EventEmitter<Widget>;
  component: Type<any>;
  settings: WidgetSettings;
  settingsRef: WidgetSettingsRef;
  widgetInjector: Injector;
  inputs: any;
  //  constructor(private section:Section, private layout:Layout, private formGroup: FormGroup, private formService: FormService, private injector: Injector) {
    

     
  constructor(private formGroup: FormGroup, private formService: FormService, private injector: Injector, private formDataService: FormGroupService) {
    this.modelChange = new EventEmitter<Widget>();
        
    // this.formService.updateSettings$.subscribe(t=> {
      
    //   this.model.settings = t;
    //   this.formService.updateWidget(this.model);
    // });
    // this.formService.updateSettings$.subscribe(t=> {
    //   this.model.settings = t;
    //   this.modelChange.next(this.model);
    //   this.settings = t;
    //   this.settingsRef = this.formService.getWidgetRef(this.model.key, this.model.type).settings;
    //   this.inputs = {
    //     formGroup: this.formGroup,
    //     settings: this.settings,
    //     settingsRef: this.settingsRef
    //   };
 
    // });
  }

  onSettingChanged(s: WidgetSettings) {
    this.settings = s;
    this.model.settings = s;
    this.formService.updateWidget(this.model);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
     if (this.model != null && this.model.key != '') {
       let widgetRef = this.formService.getWidgetRef(this.model.key, this.model.type);
       this.component = widgetRef.component;
       this.settings = this.model.settings;
       this.settingsRef = widgetRef.settings;
       this.inputs = {
        formGroup: this.formGroup,
        settings: this.settings,
        settingsRef: this.settingsRef
      };
 

       this.widgetInjector = ReflectiveInjector.resolveAndCreate([
         ///{ provide: Layout, useFactory: () => this.model },
         //{ provide: WidgetRef, useFactory: () => this.widgetRef },
         { provide: Widget, useFactory:()=> this.model},
         { provide: FormGroup, useFactory:()=> this.formGroup } 
       ], this.injector);
       
     }
  }

}
