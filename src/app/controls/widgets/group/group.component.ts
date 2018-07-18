import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
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
export class GroupComponent implements OnInit, OnChanges, OnDestroy {
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
    
    this.optionsDialogService.update$.subscribe(t=> {
      this.options.widget.options = t.newOptions;
    });
  }

  ngOnInit() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.setControl(this.options.model, this.innerGroup);
    }
  }
  ngOnChanges() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.setControl(this.options.model, this.innerGroup);
    }
  }
  ngOnDestroy() {
    this.formGroup.removeControl(this.options.model);
  }

}
