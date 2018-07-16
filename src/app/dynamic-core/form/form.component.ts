import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../widget.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() widgets: Widget[];
  constructor() { 
    this.widgets = [];
  }

  ngOnInit() {
  }

}
