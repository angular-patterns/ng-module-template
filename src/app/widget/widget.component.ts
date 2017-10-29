import { Component, Input } from '@angular/core';
import { Widget } from "./widget.model";

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent { 
    @Input() widget: Widget;
    
    
}
