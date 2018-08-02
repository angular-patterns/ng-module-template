import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { FormGroup } from '@angular/forms';
import { Section, Form } from '../../models/form.model';
import { WidgetLookupService } from '../../../../../lib/dynamic';
import { TextboxComponent, LabelComponent, TableComponent, GroupComponent } from '../../../../../lib/controls';
import { TestComponent } from '../../../../test/test.component';


@Component({
  selector: 'app-main-model',
  templateUrl: './main-model.component.html',
  styleUrls: ['./main-model.component.css'],
  providers: [
    { provide: WidgetLookupService, useFactory: ()=> {
        var widgetRefs = [
          { name: 'Textbox', component: TextboxComponent },
          { name: 'Label',  component: LabelComponent },
          { name: 'Table', component: TableComponent },
          { name: 'Group', component: GroupComponent },
          { name: 'Test', component: TestComponent }
        ];
        
        return new WidgetLookupService(widgetRefs)
      } 
    }
  ]
})
export class MainModelComponent implements OnInit {
  form: Form;
  formGroup:FormGroup;
  constructor(private formService: FormService) {
    this.formGroup = new FormGroup({});
    this.form = this.formService.store.form;
  }

  ngOnInit() {
  }

}
