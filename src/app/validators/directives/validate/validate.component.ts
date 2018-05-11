import { Component, OnInit, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: '[validate]',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @ContentChild(FormControlName) control;
  constructor() { }

  ngOnInit() { }


}
