import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  model: any;
  formGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'field-input',
    },
  ];
  constructor() {
    this.title = 'Hello World!';
  }
}
