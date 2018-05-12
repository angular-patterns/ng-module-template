import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WidgetSettingsRef } from '../../dynamic/shared/widget-ref.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WidgetSettings } from '../../dynamic/shared/widget-settings.model';
import { TextBoxSettings } from './text-box-settings.model';
import { SyncValidators } from '../../validators/sync/sync.validators';
import { FormControl } from '@angular/forms';
import { TableSettings } from '../table-properties/table-settings.model';


@Component({
  selector: 'app-text-box-properties',
  templateUrl: './text-box-properties.component.html',
  styleUrls: ['./text-box-properties.component.css']
})
export class TextBoxPropertiesComponent implements OnInit, OnChanges {

 formGroup: FormGroup;
  @Input() settings: TextBoxSettings;
  @Input() settingsRef: WidgetSettingsRef;
  @Output() settingsChange: EventEmitter<TextBoxSettings>;
  
  constructor(private model: WidgetSettingsRef, private fb: FormBuilder) { 
    this.settingsChange = new EventEmitter<TextBoxSettings>();
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.settings) {
      this.formGroup = this.fb.group({
        'id': [this.settings.id, SyncValidators.required()],
        'name': [this.settings.name, SyncValidators.required()],
        'placeholder': [this.settings.placeholder, SyncValidators.required()],      
      });
    }
  }

  ngOnInit() {

  }
  onSubmit(fg: FormGroup) {

    this.settings = fg.value;
    //this.formService.updateSettings(this.settings);
    this.settingsChange.next(this.settings);
  }
}
