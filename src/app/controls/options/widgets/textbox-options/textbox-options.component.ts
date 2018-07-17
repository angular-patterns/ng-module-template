import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextboxOptions } from '../../../models/textbox.options';


@Component({
  selector: 'app-textbox-options',
  templateUrl: './textbox-options.component.html',
  styleUrls: ['./textbox-options.component.css']
})
export class TextboxOptionsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: TextboxOptions;
  constructor() { }

  ngOnInit() {
  }

}
