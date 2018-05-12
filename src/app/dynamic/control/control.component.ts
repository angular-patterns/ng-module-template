import { Component, OnInit, Input, TemplateRef , OnChanges, SimpleChanges} from '@angular/core';
import { Widget } from '../shared/widget.model';
import { FormService } from '../form.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Type } from '@angular/core';
import {  WidgetSettingsRef } from '../shared/widget-ref.model';
import { WidgetSettings } from '../shared/widget-settings.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [
 
  ]
})
export class ControlComponent implements OnInit, OnChanges {
  formGroup:FormGroup;
   @Input() widget: Widget;
   modalRef: BsModalRef;
   widgetSettingsRef: WidgetSettingsRef;
   widgetSettings: WidgetSettings;
   
  constructor( private formService: FormService,private modalService: BsModalService) { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.widget) {
      this.widgetSettingsRef = this.formService.getWidgetRef(this.widget.key, this.widget.type).settings;
      this.widgetSettings = Object.assign(new WidgetSettings(), this.widget.settings);
      
    }

  }

  removeWidget() {
    this.formService.removeWidget(this.widget);
  }
  openProperties(template: TemplateRef<any>) {
    this.formGroup = new FormGroup({});
    this.modalRef = this.modalService.show(template);
  
  }
  onChange(s: WidgetSettings){

     this.widgetSettings = s;
     this.modalRef.hide();
     this.widget.settings = s;
     this.formService.updateWidget(this.widget);
  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      this.widget.settings = f.value;
      this.formService.updateWidget(this.widget);
      this.modalRef.hide();
    }

    
  }
  
}
