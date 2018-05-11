import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Widget } from '../../dynamic/shared/widget.model';
import { FormService } from '../../dynamic/form.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: [ './text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  constructor(private formGroup: FormGroup, private widget:Widget, private formService: FormService) {
    this.formService.createFormControl(formGroup, widget);
    
  }

  ngOnInit() {

  }

}
