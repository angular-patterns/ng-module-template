import { Injectable, Type, Inject } from "@angular/core";
import { Widget } from "../model/model";
import { WidgetToken } from "../app.module";

@Injectable()
export class WidgetProvider {
  constructor (@Inject(WidgetToken) private widgets: Widget[] = []) {
  }
  find(name: string): Type<any> {
    var widget = this.widgets.find(t=>t.name == name);
    if (widget == null)
      throw new Error(`Widget "${name}" not found`);
      
    return widget.component; 
  }

}