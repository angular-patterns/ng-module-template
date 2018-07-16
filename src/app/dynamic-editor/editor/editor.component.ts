import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../models/form.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() form: Form;
  constructor(private formService: FormService) { 

  }

  ngOnInit() {
    this.formService.initialize(this.form);
  }

}
