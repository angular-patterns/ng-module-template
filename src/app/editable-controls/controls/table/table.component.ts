import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableOptions } from '../../../shared/controls-common/models/table.options';


@Component({
  selector: 'ec-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ ]
})
export class TableComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;
  @Input() options: TableOptions;
  rows: number[];
  cols: number[];
  constructor() { 
    this.rows = [];
    this.cols = [];
    this.formGroup = new FormGroup({});

  }

  ngOnInit() {
    this.rows = Array.from({length:this.options.rows },(v,k)=>k+1);
    this.cols = Array.from({length:this.options.cols },(v,k)=>k+1);
  }

  ngOnChanges() {
    this.rows = Array.from({length:this.options.rows },(v,k)=>k+1);
    this.cols = Array.from({length:this.options.cols },(v,k)=>k+1);
  }

  findTableWidget(i: number, j: number) {
    let widget = this.options.widgets.find(t=>t.row == i-1 && t.col == j-1);
    return widget ? widget : null;
  }

  
}
