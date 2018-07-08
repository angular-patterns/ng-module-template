import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableOptions } from '../../shared/table.options';
import { FormGroup } from '@angular/forms';

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
  constructor() { 
    this.rows = [];
    this.cols = [];
    this.formGroup = new FormGroup({});
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
