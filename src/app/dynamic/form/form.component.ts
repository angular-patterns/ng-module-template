import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Form } from '../shared/form.model';
import { FormGroupService } from './form-group.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ 
    FormGroupService
  ]
})
export class FormComponent implements OnInit, OnChanges {
  @Input() model: Form;
  @Input() formGroup: FormGroup;
  constructor(private formDataService: FormGroupService) {

   }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    if (this.formGroup != null) {
      this.formDataService.root = this.formGroup;
    }
  }

}
