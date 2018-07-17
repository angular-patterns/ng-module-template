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
  widget1: Widget;
  widget2: Widget;
  widget3: Widget; 
  form: Form;

  constructor() {
    this.widget1 =  { component: 'textbox', options: { label: 'First Name', name: 'First Name', placeholder: 'First Name', model: 'firstName', defaultValue: ''}};
    this.widget2 =  { component: 'textbox', options: { label: 'Last Name',  name: 'Last Name', placeholder: 'Last Name', model: 'lastName', defaultValue: ''}};
    this.widget3 = { component: 'table', options: { rows: 2, cols: 2, widgets: [
          { col: 0, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
          { col: 0, row: 1, widget: { component: 'label', options: { title: 'hey there'}}},
          { col: 1, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
          { col: 1, row: 1, widget: { component: 'textbox', options: { name: 'Middle Name', placeholder: 'hey', model: 'middleName', defaultValue: 'aaa'}}},
        ]}};
    this.widgets = [ this.widget1, this.widget2, this.widget3 ];

    this.form = {
      title: 'hey',
      sections: [
        
      ]
    }
    this.formGroup = new FormGroup({});
    this.title = 'Hello World!';
    // this.widgets = 
    //  [
    //   { component: 'group', options: { name: 'test', widget: { component: 'textbox', options: { name: 'sdfdsf Name', placeholder: 'hey', model: 'middleName', defaultValue: ''} } } },
    //   { component: 'label', options: { title: 'hey there'} },
    //   { component: 'textbox', options: { name: 'First Name', placeholder: 'hey', model: 'firstName', defaultValue: ''}},
    //   { component: 'textbox', options: { name: 'Last Name', placeholder: 'tjere', model: 'lastName',defaultValue: ''}},
    //   { component: 'table', options: { rows: 2, cols: 2, widgets: [
    //     { col: 0, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
    //     { col: 0, row: 1, widget: { component: 'label', options: { title: 'hey there'}}},
    //     { col: 1, row: 0, widget: { component: 'label', options: { title: 'hey there'}}},
    //     { col: 1, row: 1, widget: { component: 'textbox', options: { name: 'Middle Name', placeholder: 'hey', model: 'middleName', defaultValue: ''}}},
    //   ]}}
    // ];
  }
  test() {
    //this.widget1 = { component: 'textbox', options: { label: 'First Name', name: 'First Name', placeholder: 'First Name', model: 'firstName', defaultValue: 'asdf'} };
    this.widgets[0].options = { label: 'First Name', name: 'First Name', placeholder: 'First Name', model: 'firstName', defaultValue: 'asdf'};
    //this.widget1.options.defaultValue = 'asdfsadf';
    //this.widgets[0] =  { component: 'textbox', options: { label: 'First Name', name: 'First Name', placeholder: 'First Name', model: 'firstName', defaultValue: 'asdf'}};

    let w = this.widget3.options.widgets[3];
    w.widget.options.defaultValue = "Heasdfsdfdsfy there";
    this.widget3.options.widgets[3] = JSON.parse(JSON.stringify(w));
  }
}
