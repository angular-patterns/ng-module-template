import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../models/form.model';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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


}
