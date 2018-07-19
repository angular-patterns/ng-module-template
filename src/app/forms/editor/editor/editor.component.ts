import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../models/form.model';
import { FormService } from '../form.service';




@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
  ]
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
    if (!this.form) {
      this.form = new Form();
      this.form.idSpace = {};
      this.form.sections = [];
      this.form.title = "Untitled";
    }
    this.formGroup = this.formService.initialize(this.form);
  }

  submit() {
    alert(JSON.stringify(this.formGroup.value));
  }
  save() {
    alert(JSON.stringify(this.form));
  }
}
