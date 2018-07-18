import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../models/form.model';
import { FormService } from '../form.service';
import { IdService } from '../../../dynamic/services/id.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [IdService]
})
export class EditorComponent implements OnInit {
  @Input() form: Form;
  formGroup: FormGroup;
  constructor(private formService: FormService) { 
    this.formService.events.form.modelChanged$.subscribe(t=> {
      this.formGroup = t;
    })
  }

  ngOnInit() {
    this.formGroup = this.formService.initialize(this.form);
  }

  submit() {
    alert(JSON.stringify(this.formGroup.value));
  }
}
