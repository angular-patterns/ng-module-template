import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
    imports: [
        NgCommonModule,
    ],
    exports: [
        WidgetOutletComponent,
        WidgetComponent
    ],
    declarations: [
        WidgetOutletComponent,
        WidgetComponent
    ],
    providers: [],
})
export class CommonModule { 

}
