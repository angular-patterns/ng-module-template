import { Component, OnInit, Input } from '@angular/core';
import { LabelOptions } from '../../models/label.options';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() options: LabelOptions;
  constructor() { }

  ngOnInit() {
  }

}
