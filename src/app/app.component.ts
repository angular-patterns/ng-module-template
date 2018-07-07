import { Component, Type } from '@angular/core';

import { Widget } from './models/widget.model';
import { FormGroup } from '@angular/forms';
import { TextboxComponent } from './controls/widgets/textbox/textbox.component';
import { LabelComponent } from './controls/widgets/label/label.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  widgets: Widget[];
  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({});
    this.title = 'Hello World!';
    this.widgets = [
      { component: LabelComponent, options: { title: 'hey there'} },
      { component: TextboxComponent, options: { name: 'First Name', placeholder: 'hey', model: 'firstName', defaultValue: ''}},
      { component: TextboxComponent, options: { name: 'Last Name', placeholder: 'tjere', model: 'lastName',defaultValue: ''}},
    ];
  }
}
