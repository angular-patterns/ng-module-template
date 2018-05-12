import { Component, OnInit, Inject, Input, SimpleChanges } from '@angular/core';
import { Widget } from '../../shared/widget.model';
import { FormService } from '../../form.service';
import { WidgetType, WidgetRef } from '../../shared/widget-ref.model';
import { TableSettings } from '../../../properties/table-properties/table-settings.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() settings: TableSettings;
  @Input() formGroup: FormGroup;

  widgets: Widget[][];

  constructor(private formService: FormService) {
    this.widgets = [];
    this.formService.removeWidget$.subscribe(t=> {
      for (var i = 0; i < this.settings.rows; ++i) {
        for (var j =0; j < this.settings.cols; ++j) {
          if (this.widgets[i][j] == t) {
            this.widgets[i][j]=null;
          }
        }
      }
    });

    this.formService.updateWidget$.subscribe(t=> {
      for (var i = 0; i < this.settings.rows; ++i) {
        for (var j =0; j < this.settings.cols; ++j) {
          if (this.widgets[i][j] == t) {
            this.widgets[i][j] = Object.assign({}, t);
          }
        }
      }
    });
  }

  ngOnInit() {


  }

  getArray(max: number) {
     var arr = [];
     for (var i = 0; i < max; ++i) {
       arr.push(i);
     }
     return arr;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.settings) {
      this.widgets = this.settings.widgets;
    }
  }
  onDrop($event, i, j) {
    let widget = this.formService.createWidget($event.dragData);
    this.widgets[i][j] = widget;
    this.settings.widgets[i][j] = widget;
  }
}
