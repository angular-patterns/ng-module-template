import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions, FormlyField} from '@ngx-formly/core';
import { Options } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  
  fields: FormlyFieldConfig[] = [];

  constructor() {
    this.options = {
      formState: {
        options: [
          { countryId: 'CA', value: 'AB', label: 'Alberta' },
          { countryId: 'CA', value: 'MB', label: 'Manitoba'},
          { countryId: 'CA', value: 'SK', label: 'Saskatchewan'},
          { countryId: 'US', value: 'CA', label: 'California' },
          { countryId: 'US', value: 'FB', label: 'Florida'},
          { countryId: 'US', value: 'NJ', label: 'New Jersey'},
        ]      
      }
    };
    this.fields = [{
      key: 'address',
      fieldGroup: [
        {
          key: 'countryId',
          type: 'select',
          templateOptions: {
            label: 'Country',
            required: true,
            options: [
              { value: 'CA', label: 'Canada'  },
              { value: 'US', label: 'USA'  },
            ]
          },

          lifecycle: {
            onInit: (form, field) => {
              form.get('countryId').valueChanges.subscribe(t=> {
                this.options.formState.countryId = t;
              });
            }
  
          },
          expressionProperties: {
          }

        },
        {
          key: 'provinceStateId',
          type: 'select',
          templateOptions: {
            label: 'Province/State',
          },
          lifecycle: {
            onInit: (form: FormGroup, field: FormlyFieldConfig) => {
              
            }
          },
          expressionProperties: {
            'templateOptions.options': 'formState.options.filter(t=>t.countryId == formState.countryId)',
          }
  
        }
      ],
  
    }
  ];
  
  }
  submit(model) {
    
    console.log(model);
  }
}
