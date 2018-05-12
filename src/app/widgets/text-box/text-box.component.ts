import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Widget } from '../../dynamic/shared/widget.model';
import { FormService } from '../../dynamic/form.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TextBoxSettings } from '../../properties/text-box-properties/text-box-settings.model';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: [ './text-box.component.css']
})
export class TextBoxComponent implements OnInit, OnChanges {
  @Input() settings: TextBoxSettings;
  @Input() formGroup: FormGroup;
  constructor(private widget:Widget, private formService: FormService) {
    this.settings = new TextBoxSettings();
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.formGroup != null) {
      this.formService.createFormControl(this.formGroup, this.widget);
    }
  }

}
