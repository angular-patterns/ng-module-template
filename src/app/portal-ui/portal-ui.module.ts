import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WidgetComponent } from "./common/widget/widget.component";

export { WidgetComponent } from "./common/widget/widget.component";
export { Widget } from './common/widget/widget.model';

@NgModule({
    imports:      [ 
        BrowserModule
    ],
    declarations: [ 
        WidgetComponent
    ],
    exports: [
        WidgetComponent
    ]
  })
  export class PortalUiModule { }