import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formGroup.setControl("firstName", new FormControl(""));
    this.formGroup.setControl("lastName", new FormControl(""));
    this.formGroup.setControl("birthdate", new FormControl(""));
    this.formGroup.setControl("gender", new FormControl(""));
  }

}
