import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { Form } from '../../models/form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-preview',
  templateUrl: './main-preview.component.html',
  styleUrls: ['./main-preview.component.css']
})
export class MainPreviewComponent implements OnInit {
  formGroup:FormGroup;
  form: Form;
  constructor(private formService: FormService) {
    this.formGroup = new FormGroup({});
    this.form = this.formService.store.form;
  }

  ngOnInit() {
  }

}
