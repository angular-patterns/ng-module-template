import { Component, OnInit, Input, TemplateRef , OnChanges, SimpleChanges} from '@angular/core';
import { Widget } from '../shared/widget.model';
import { FormService } from '../form.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Type } from '@angular/core';
import { PropertiesRef, WidgetConfigRef } from '../shared/widget-ref.model';
import { WidgetConfig } from '../shared/widget-config.model';
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
   widgetConfigRef: WidgetConfigRef;
   widgetConfig: WidgetConfig;
   
  constructor( private formService: FormService,private modalService: BsModalService) { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.widget) {
      this.widgetConfigRef = this.formService.getWidgetRef(this.widget.key, this.widget.type).config;
      this.widgetConfig = Object.assign(new WidgetConfig(), this.widget.data);
      
    }

  }

  removeWidget() {
    this.formService.removeWidget(this.widget);
  }
  openProperties(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  
  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      this.widget.data = f.value;
      this.formService.updateWidget(this.widget);
      this.modalRef.hide();
    }
  }
}
