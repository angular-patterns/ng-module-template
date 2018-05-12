import { Component, OnInit, Input, TemplateRef , OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
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
   @Input() settings: WidgetSettings;
   @Output() settingsChange: EventEmitter<WidgetSettings>;
   @Input() settingsRef: WidgetSettingsRef;

   modalRef: BsModalRef;
   
  constructor( private formService: FormService,private modalService: BsModalService) { 
    this.formGroup = new FormGroup({});
    this.settingsChange = new EventEmitter<WidgetSettings>();

  }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {

  }


  openProperties(template: TemplateRef<any>) {
    this.formGroup = new FormGroup({});
    this.modalRef = this.modalService.show(template);
  
  }
  onSettingsChange(s: WidgetSettings) {
    if (this.modalRef)
       this.modalRef.hide();
    
       this.settingsChange.next(s);
  }
  removeWidget() {
    this.formService.removeWidget(this.widget);
  }
  
}
