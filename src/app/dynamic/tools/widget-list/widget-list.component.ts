import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { WidgetRef } from '../../shared/widget-ref.model';
import { Widget } from '../../shared/widget.model';

@Component({
  selector: 'widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: WidgetRef[];
  constructor(private formService: FormService) 
  { 
    this.widgets = this.formService.getAllWidgetRefs();
  }

  ngOnInit() {
  }

}
