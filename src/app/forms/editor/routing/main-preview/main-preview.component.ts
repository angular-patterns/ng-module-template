import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../form.service';
import { Form } from '../../models/form.model';
import { FormGroup } from '@angular/forms';
import { Widget } from '../../../../dynamic/models/widget.model';
import { WidgetLookupService } from '../../../../dynamic/services/widget-lookup.service';
import { TextboxComponent } from '../../../../controls/textbox/textbox.component';
import { LabelComponent } from '../../../../controls/label/label.component';
import { TableComponent } from '../../../../controls/table/table.component';
import { GroupComponent } from '../../../../controls/group/group.component';

@Component({
  selector: 'app-main-preview',
  templateUrl: './main-preview.component.html',
  styleUrls: ['./main-preview.component.css'],
  providers: [
    { provide: WidgetLookupService, useFactory: ()=> {
        var widgetRefs = [
          { name: 'Textbox', component: TextboxComponent },
          { name: 'Label',  component: LabelComponent },
          { name: 'Table', component: TableComponent },
          { name: 'Group', component: GroupComponent }
        ];
        
        return new WidgetLookupService(widgetRefs)
      } 
    }
  ]
})
export class MainPreviewComponent implements OnInit {
  @Input() formGroup:FormGroup;
  form: Form;
  constructor(private formService: FormService) {
    this.formGroup = new FormGroup({});
    this.form = this.formService.store.form;
  }

  ngOnInit() {
  }


}
