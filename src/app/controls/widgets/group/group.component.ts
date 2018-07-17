import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupOptions } from '../../models/group.options';
import { DropZoneService } from '../../../dynamic/utilities/drop-zone/drop-zone.service';
import { OptionsDialogService } from '../../../dynamic/services/options-dialog.service';
import { WidgetFactory } from '../../../dynamic/services/widget.factory';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [ DropZoneService, OptionsDialogService ]
})
export class GroupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  innerGroup: FormGroup;
  constructor(private widgetFactory: WidgetFactory, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) { 
    this.dropZoneService.drop$.subscribe(t=> {
      let widget = this.widgetFactory.createWidget(t.widget);
      this.options.widget = widget;
    });
    this.optionsDialogService.remove$.subscribe(o=> {
      this.options.widget = null;
    });
  }

  ngOnInit() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.addControl(this.options.name, this.innerGroup);
    }
  }

}
