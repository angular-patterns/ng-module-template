import { Component, OnInit, Input, OnChanges, SimpleChanges, Type,Injector, ReflectiveInjector } from '@angular/core';
import { FormService } from '../form.service';
import { Widget } from '../shared/widget.model';
import { WidgetRef, WidgetType } from '../shared/widget-ref.model';
import { FormGroupService } from '../form/form-group.service';
import { FormGroup } from '@angular/forms';
import { Section } from '../shared/section.model';
import { Layout } from '../shared/layout.model';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [

  ]
})
export class WidgetComponent implements OnInit, OnChanges {

  @Input() model: Widget;
  widgetRef: WidgetRef;
  component: Type<any>;
  widgetInjector: Injector;
  inputs: any;
  //  constructor(private section:Section, private layout:Layout, private formGroup: FormGroup, private formService: FormService, private injector: Injector) {
    

     
  constructor(private formGroup: FormGroup, private formService: FormService, private injector: Injector, private formDataService: FormGroupService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
     if (this.model != null && this.model.key != '') {
       this.widgetRef = this.formService.getWidgetRef(this.model.key, this.model.type);
       this.component = this.widgetRef.component;
       this.inputs = {
        formGroup: this.formGroup,
        settings: this.model.settings
      };
 

       this.widgetInjector = ReflectiveInjector.resolveAndCreate([
         ///{ provide: Layout, useFactory: () => this.model },
         { provide: WidgetRef, useFactory: () => this.widgetRef },
         { provide: Widget, useFactory:()=> this.model},
         { provide: FormGroup, useFactory:()=> this.formGroup } 
       ], this.injector);
       
     }
  }

}
