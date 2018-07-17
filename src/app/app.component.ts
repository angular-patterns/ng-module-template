import { Component, Type } from '@angular/core';


import { FormGroup } from '@angular/forms';
import { TextboxComponent } from './controls/widgets/textbox/textbox.component';
import { LabelComponent } from './controls/widgets/label/label.component';
import { TableComponent } from './controls/widgets/table/table.component';


import { Widget } from './dynamic/models/widget.model';
import { Form } from './forms/editor/models/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  widgets: Widget[];
  formGroup: FormGroup;
  form: Form;
  constructor() {
    this.form = {
      title: 'hey',
      sections: [
        
      ]
    }
    this.formGroup = new FormGroup({});
    this.title = 'Hello World!';
    this.widgets = 
     [
      { component: 'group', options: { name: 'test', widget: { component: 'textbox', options: { name: 'sdfdsf Name', placeholder: 'hey', model: 'middleName', defaultValue: ''} } } },
      { component: 'label', options: { title: 'hey there'} },
      { component: 'textbox', options: { name: 'First Name', placeholder: 'hey', model: 'firstName', defaultValue: ''}},
      { component: 'textbox', options: { name: 'Last Name', placeholder: 'tjere', model: 'lastName',defaultValue: ''}},
      { component: 'table', options: { rows: 2, cols: 2, widgets: [
        { col: 0, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
        { col: 0, row: 1, widget: { component: 'label', options: { title: 'hey there'}}},
        { col: 1, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
        { col: 1, row: 1, widget: { component: 'textbox', options: { name: 'Middle Name', placeholder: 'hey', model: 'middleName', defaultValue: ''}}},
      ]}}
    ];
  }
  test() {
    this.widgets[3].options.rows=1;
    this.widgets[3] = Object.assign({}, this.widgets[3]);
  }
}
