import { Injectable, Type, Inject } from "@angular/core";
import { Widgets } from "../model/model";
import { WidgetToken } from "../app.module";

@Injectable()
export class WidgetProvider {
  constructor (@Inject(WidgetToken) private widgets: Widgets = []) {

  }
  find(name: string): Type<any> {
    return this.widgets.find(t=>t.name == name).component;
  }

}