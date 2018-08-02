import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropZoneService, WidgetFactory } from '../../../dynamic';
import { GroupOptions } from '../../../controls';
import { OptionsFactory } from '../../../dynamic-options/services/options.factory';
import { OptionsDialogService } from '../../../dynamic-options';




@Component({
  selector: 'ec-group',
  templateUrl: './editable-group.component.html',
  styleUrls: ['./editable-group.component.css'],
  providers: [ DropZoneService ]
})
export class EditableGroupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  constructor(private widgetFactory: WidgetFactory, private optionsFactory: OptionsFactory, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) { 
    this.dropZoneService.drop$.subscribe(t=> {
      let options = this.optionsFactory.createOptions(t.widget.name);
      let widget = this.widgetFactory.createWidget(t.widget, options);
      this.options.widget = widget;
    });
    this.optionsDialogService.remove$.subscribe(o=> {
      this.options.widget = null;
    });
    
    this.optionsDialogService.update$.subscribe(t=> {
      this.options.widget.options = t.newOptions;
    });
  }

  ngOnInit() {

  }

}
