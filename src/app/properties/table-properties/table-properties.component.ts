import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { TableSettings } from './table-settings.model';
import { FormControl } from '@angular/forms';
import { SyncValidators } from '../../validators/sync/sync.validators';
import { FormService } from '../../dynamic/form.service';
import { NgForm } from '@angular/forms';
import { Widget } from '../../dynamic/shared/widget.model';
import { Form } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';
import { WidgetSettingsRef } from '../../dynamic/shared/widget-ref.model';

@Component({
  selector: 'app-table-properties',
  templateUrl: './table-properties.component.html',
  styleUrls: ['./table-properties.component.css']
})
export class TablePropertiesComponent implements OnChanges {
  formGroup: FormGroup;
  @Input() settings: TableSettings;
  @Input() settingsRef: WidgetSettingsRef;

  @Output() settingsChange: EventEmitter<TableSettings>;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.settingsChange = new EventEmitter<TableSettings>();
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.settings) {
      this.formGroup = this.fb.group({
        'id': [this.settings.id, SyncValidators.required()],
        'rows': [this.settings.rows, SyncValidators.required()],
        'cols': [this.settings.cols, SyncValidators.required()],      
      });
    }
  }
  onSubmit(fg: FormGroup) {

    this.settings = fg.value;
    this.settings.widgets = [];
    for (var i = 0; i < this.settings.rows; ++i) {
      this.settings.widgets.push([]);
    }
    //this.formService.updateSettings(this.settings);
    this.settingsChange.next(this.settings);
  }

}
