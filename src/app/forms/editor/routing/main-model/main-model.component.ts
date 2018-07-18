import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { FormGroup } from '@angular/forms';
import { Section, Form } from '../../models/form.model';

@Component({
  selector: 'app-main-model',
  templateUrl: './main-model.component.html',
  styleUrls: ['./main-model.component.css']
})
export class MainModelComponent implements OnInit {
  formGroup:FormGroup;
  form: Form;
  constructor(private formService: FormService) {
    this.formGroup = new FormGroup({});
    this.form = this.formService.store.form;
  }

  ngOnInit() {
  }

}
