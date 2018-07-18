import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { Form } from '../../models/form.model'
@Component({
  selector: 'app-json-preview',
  templateUrl: './json-preview.component.html',
  styleUrls: ['./json-preview.component.css']
})
export class JsonPreviewComponent implements OnInit {
  form: Form; 
  constructor(private formService: FormService) {
    this.form = this.formService.store.form;
  }

  ngOnInit() {
  }


}
