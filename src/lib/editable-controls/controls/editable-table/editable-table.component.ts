import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropZoneService, WidgetFactory } from '../../../dynamic';
import { TableOptions } from '../../../controls';
import { OptionsFactory, OptionsDialogService } from '../../../dynamic-options';


@Component({
  selector: 'ec-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css'],
  providers: [ DropZoneService ]
})
export class EditableTableComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;
  @Input() options: TableOptions;
  rows: number[];
  cols: number[];
  constructor(private widgetFactory: WidgetFactory, private optionsFactory: OptionsFactory, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) { 
    this.rows = [];
    this.cols = [];
    this.formGroup = new FormGroup({});

    this.dropZoneService.drop$.subscribe(t=> {
      let options = this.optionsFactory.createOptions(t.widget.name);
      let widget = this.widgetFactory.createWidget(t.widget, options);
      let tableWidget = this.findTableWidget(t.args.row, t.args.col);
      if (tableWidget == null) {
        tableWidget = { row: t.args.row-1, col: t.args.col-1, widget: null };
        this.options.widgets.push(tableWidget);
      }
      tableWidget.widget = widget;
      
    });
    this.optionsDialogService.remove$.subscribe(o=> {
      var widgets = this.options.widgets.filter(t=>t.widget != null && t.widget.options == o.options);
      widgets.forEach(t=> {
        t.widget = null;
      });
    });

    this.optionsDialogService.update$.subscribe(t=> {
    
      let index = this.options.widgets.findIndex(x=>x.widget != null && x.widget.options == t.oldOptions);   
      if (index >= 0) {
        this.options.widgets[index].widget.options = t.newOptions;
      } 
    });
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
  tableWidgetExists(i: number, j: number) {
    let tableWidget = this.findTableWidget(i, j);
    return tableWidget && tableWidget.widget;
  }
  
}
