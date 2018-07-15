import { Component, OnInit, Input, Type } from '@angular/core';
import { Widget } from '../widget.model';
import { FormGroup } from '@angular/forms';
import { WidgetLookupService } from '../widget-lookup.service';
import { Validator } from 'jsonschema';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() widget: Widget;
  component: Type<any>;
  constructor(private widgetLookupService: WidgetLookupService) { 
  }

  ngOnInit() {
    if (this.widget) {
      let w = this.widgetLookupService.find(this.widget.component);
      this.component = w.component;
      let result = this.validateSchema(this.widget.options, w.optionsSchema);
      if (!result.valid) {
        console.log(result);
      }
    }
  }

  private validateSchema(instance:any, schema: any)
  {
    var v = new Validator();
    var result = v.validate(instance, schema);
    return result;
  }
}
