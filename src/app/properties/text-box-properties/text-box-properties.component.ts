import { Component, OnInit, Input } from '@angular/core';
import { WidgetSettingsRef } from '../../dynamic/shared/widget-ref.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WidgetSettings } from '../../dynamic/shared/widget-settings.model';
import { TextBoxSettings } from './text-box-settings.model';
import { SyncValidators } from '../../validators/sync/sync.validators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-box-properties',
  templateUrl: './text-box-properties.component.html',
  styleUrls: ['./text-box-properties.component.css']
})
export class TextBoxPropertiesComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  @Input() settings: TextBoxSettings;
  constructor(private model: WidgetSettingsRef, private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.formGroup.setControl('id', new FormControl(this.settings.id,SyncValidators.required() ));
    this.formGroup.setControl('name', new FormControl(this.settings.name,SyncValidators.required() ));
    this.formGroup.setControl('placeholder', new FormControl(this.settings.placeholder,SyncValidators.required() ));

  }

}
