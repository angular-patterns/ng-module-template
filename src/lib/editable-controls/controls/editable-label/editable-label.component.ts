import { Component, OnInit, Input } from '@angular/core';
import { LabelOptions } from '../../../controls';

@Component({
  selector: 'ec-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.css']
})
export class EditableLabelComponent implements OnInit {
  @Input() options: LabelOptions;
  constructor() { }

  ngOnInit() {
  }

}
