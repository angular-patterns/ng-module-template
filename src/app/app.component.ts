import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      label: 'test'
    }
  };
  
  fields: FormlyFieldConfig[] = [{
    key: 'highschool',
    fieldGroup: [
      {
        key: 'name',
        type: 'select',
        templateOptions: {
          label: 'Highschool',
          required: true,
          options: [
            { value: 1, label: 'Option 1'  },
            { value: 2, label: 'Option 2'  },
            { value: 3, label: 'Option 3'  },
            { value: 4, label: 'Option 4'  },
          ]
        },
        lifecycle: {
          onInit: (form, field) => {
            form.get('name').valueChanges.subscribe(t=> {
              this.options.formState.label = t;
            });
          }

        }
      },
      {
        key: 'other',
        type: 'input',
        templateOptions: {
          label: this.options.formState.label
          
        },
        expressionProperties: {
          'templateOptions.label': (model, formState) => {
            return this.options.formState.label;
          },
        }
      }
    ],

  }
];

  submit(model) {
    console.log(model);
  }
}
