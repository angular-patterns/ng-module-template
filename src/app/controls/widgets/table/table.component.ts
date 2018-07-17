import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableOptions, TableWidget } from '../../models/table.options';
import { DropZoneService } from '../../../dynamic/utilities/drop-zone/drop-zone.service';
import { FormService } from '../../../forms/editor/form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() options: TableOptions;
  rows: number[];
  cols: number[];
  constructor(private formService: FormService, private dropZoneService: DropZoneService) { 
    this.rows = [];
    this.cols = [];
    this.formGroup = new FormGroup({});

    this.dropZoneService.drop$.subscribe(t=> {
      let widget = this.formService.createWidget(t.widget);
      let tableWidget = this.findTableWidget(t.args.row, t.args.col);
      if (tableWidget == null) {
        tableWidget = { row: t.args.row-1, col: t.args.col-1, widget: null };
        this.options.widgets.push(tableWidget);
      }
      tableWidget.widget = widget;
      //this.formService.updateOptions(this.options);
    });
  }

  ngOnInit() {
    this.rows = Array.from({length:this.options.rows },(v,k)=>k+1);
    this.cols = Array.from({length:this.options.cols },(v,k)=>k+1);
  }

  findTableWidget(i: number, j: number) {
    let widget = this.options.widgets.find(t=>t.row == i-1 && t.col == j-1);
    return widget ? widget : null;
  }
  
}
