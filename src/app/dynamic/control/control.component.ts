import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../shared/widget.model';
import { FormService } from '../form.service';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
 
   @Input() widget: Widget;
  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  removeWidget() {
    this.formService.removeWidget(this.widget);
  }
  properties() {
    
  }
}
