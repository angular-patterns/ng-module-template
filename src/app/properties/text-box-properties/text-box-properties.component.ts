import { Component, OnInit, Input } from '@angular/core';
import { WidgetConfigRef } from '../../dynamic/shared/widget-ref.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WidgetConfig } from '../../dynamic/shared/widget-config.model';
import { TextBoxConfig } from './text-box-config.model';
import { SyncValidators } from '../../validators/sync/sync.validators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-box-properties',
  templateUrl: './text-box-properties.component.html',
  styleUrls: ['./text-box-properties.component.css']
})
export class TextBoxPropertiesComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  textBoxConfig: TextBoxConfig;
  constructor(private model: WidgetConfigRef, private config: WidgetConfig, private fb: FormBuilder) { 

  }

  ngOnInit() {
        alert(this.formGroup);
    this.textBoxConfig = this.config as TextBoxConfig;
    this.formGroup.registerControl(this.model.properties.id.key, new FormControl(this.textBoxConfig.id, SyncValidators.required()));

  }

}
