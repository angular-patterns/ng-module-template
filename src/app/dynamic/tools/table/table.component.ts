import { Component, OnInit, Inject } from '@angular/core';
import { Widget } from '../../shared/widget.model';
import { FormService } from '../../form.service';
import { WidgetType } from '../../shared/widget-ref.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  rows: number[];
  cols: number[];
  settings: Widget[][];
  
  constructor(private formService: FormService, private widget: Widget) {
    this.rows = [0],
    this.cols = [0,1,2];
    this.settings = this.widget.settings.source || [[],[],[]];
    this.formService.removeWidget$.subscribe(t=> {
      
      
      if (this.settings[0][0] == t) {
        this.settings[0][0] = null;
      }
      if (this.settings[0][1] == t) {
        this.settings[0][1] = null;
      }
      if (this.settings[0][2] == t) {
        this.settings[0][2] = null;
      }
    })
  }

  ngOnInit() {

  }

  onDrop($event, i, j) {
    if (!this.widget.settings.source) {
      this.widget.settings.source = [[],[],[]];
      this.settings = this.widget.settings.source;
    }
    this.settings[i][j] = this.formService.createWidget($event.dragData);
  }
}
