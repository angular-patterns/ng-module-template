import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../shared/widget.model';
import { FormService } from '../form.service';

@Component({
  selector: 'widget-outlet',
  templateUrl: './widget-outlet.component.html',
  styleUrls: ['./widget-outlet.component.css']
})
export class WidgetOutletComponent implements OnInit {
  @Input() widgets: Widget[];
  constructor(private formService: FormService) { 
    this.formService.removeWidget$.subscribe(t=> {
      let index = this.widgets.indexOf(t);
      if (index >= 0) {
        this.widgets.splice(index, 1);
      }
    })
  }

  ngOnInit() {
  }

  onDrop($event) {
    console.log($event);
    let widget = this.formService.createWidget($event.dragData);
    this.widgets.push(widget)
  }

}
