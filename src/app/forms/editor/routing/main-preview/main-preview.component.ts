import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormService } from '../../form.service';
import { Form, Section } from '../../models/form.model';
import { FormGroup } from '@angular/forms';

import { TextboxComponent } from '../../../../controls/textbox/textbox.component';
import { LabelComponent } from '../../../../controls/label/label.component';
import { TableComponent } from '../../../../controls/table/table.component';
import { GroupComponent } from '../../../../controls/group/group.component';
import { Subscription } from 'rxjs';

import { TestComponent } from '../../../../test/test.component';
import { FormGroupService } from '../../../../../framework/dynamic/services/form-group.service';
import { WidgetLookupService } from '../../../../../framework/dynamic/services/widget-lookup.service';

@Component({
  selector: 'app-main-preview',
  templateUrl: './main-preview.component.html',
  styleUrls: ['./main-preview.component.css'],
  providers: [
    FormGroupService,
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
export class MainPreviewComponent implements OnInit, OnDestroy {
  @Input() formGroup:FormGroup;
  @Input() section: Section;
  private subscriptions: Subscription[];
  constructor(private formService: FormService, private formGroupService: FormGroupService) {
    
    this.formGroup = this.formService.store.formGroup;
    this.section = this.formService.store.currentSection;
    const s = this.formService.events.section.current$.subscribe(t=> {
      this.formService.store.data[this.section.title] = this.formGroup.value;
      this.section = t;
      var val = this.formService.store.data[this.section.title];
      this.formGroupService.setValue(val);

    });
    this.subscriptions = [];
    this.subscriptions.push(s);
  }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    this.subscriptions.forEach(t=> {
      t.unsubscribe();
    });
  }


}
