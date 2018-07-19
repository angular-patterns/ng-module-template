import { Component, OnInit, Input } from '@angular/core';
import { LabelOptions } from '../../../shared/models/label.options';

@Component({
  selector: 'ec-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() options: LabelOptions;
  constructor() { }

  ngOnInit() {
  }

}
