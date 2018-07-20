import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';



import { WidgetFactory } from '../../../core/widget.factory';

import { GroupOptions } from '../../../shared/models/group.options';
import { DropZoneService } from '../../../../framework/dynamic/services/drop-zone.service';
import { OptionsDialogService } from '../../../../framework/dynamic-options/services/options-dialog.service';


@Component({
  selector: 'ec-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [ DropZoneService ]
})
export class GroupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  constructor(private widgetFactory: WidgetFactory, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) { 
    this.dropZoneService.drop$.subscribe(t=> {
      let widget = this.widgetFactory.createWidget(t.widget);
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
