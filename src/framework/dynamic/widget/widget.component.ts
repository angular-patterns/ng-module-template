import { Component, OnInit, Input, Type, OnChanges } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { Validator } from 'jsonschema';
import { WidgetLookupService } from '../services/widget-lookup.service';
import { Widget } from '../models/widget.model';

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

    }
  }
  ngOnChanges() {
    if (this.widget) {
     
      let w = this.widgetLookupService.find(this.widget.component);
      this.component = w.component;
    }
  }

}
