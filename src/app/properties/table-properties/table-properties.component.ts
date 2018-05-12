import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableSettings } from './table-settings.model';

@Component({
  selector: 'app-table-properties',
  templateUrl: './table-properties.component.html',
  styleUrls: ['./table-properties.component.css']
})
export class TablePropertiesComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() settings: TableSettings;
  constructor() { }

  ngOnInit() {
  }

}
