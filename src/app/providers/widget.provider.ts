import { Injectable, Type, Inject } from "@angular/core";
import { Widget } from "../model/model";
import { WidgetToken } from "../app.module";

@Injectable()
export class WidgetProvider {
  constructor (@Inject(WidgetToken) private widgets: Widget[] = []) {

  }
  find(name: string): Type<any> {
    return this.widgets.find(t=>t.name == name).component;
  }

}