import { Component } from '@angular/core';
import { FormService } from './dynamic/form.service';
import { WidgetType, WidgetRef } from './dynamic/shared/widget-ref.model';
import { Widget } from './dynamic/shared/widget.model';
import { FormGroup } from '@angular/forms';
import { FormGroupService } from './dynamic/form/form-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    FormGroupService,
    { provide: FormGroup, useFactory: (formGroupService: FormGroupService)=> formGroupService.root, deps: [FormGroupService] }
  ]
})
export class AppComponent {
  title: string;
  widget: Widget;
  table: Widget;
  widgets: Widget[];
  formGroup: FormGroup;
  constructor(private formService: FormService, private formGroupService: FormGroupService) {
    this.title = 'Hello World!';
    this.formGroup = new FormGroup({});
    //this.widget = this.formService.createWidget(this.formService.getWidgetRef('group', WidgetType.Other));
    this.widget = this.formService.createWidget(this.formService.getWidgetRef('text-box', WidgetType.Field));
    this.widget.validate.sync = {
      required: null,
      minlength: 5
    }

    
    this.widgets = [this.widget];
    this.formGroupService.root = this.formGroup;
    //this.formDataService.formGroup = this.formGroup;
  }
}
