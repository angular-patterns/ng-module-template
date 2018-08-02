import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { WidgetRef, WidgetLookupService } from '../../../../lib/dynamic';


@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.css']
})
export class ToolsMenuComponent implements OnInit {
  widgetRefs: WidgetRef[];
  constructor(private formService: FormService, private widgetLookupService: WidgetLookupService) { 
    this.widgetRefs = this.widgetLookupService.getAll();
  }

  ngOnInit() {
  }

}
