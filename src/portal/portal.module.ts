import { NgModule, InjectionToken } from '@angular/core';
import { PortalComponent } from './portal.component';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { ModuleWithProviders } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { PortalService } from './services/portal.service';
import { ComponentFactoryResolver } from '@angular/core';
import { Widget } from './services/widget.model';
import { WidgetFactory } from './services/widget.factory';

const widgetsToken = new InjectionToken<Widget[]>('widgets');

@NgModule({
    imports: [],
    exports: [
        PortalComponent,
        WidgetOutletComponent
    ],
    declarations: [
        PortalComponent,
        WidgetOutletComponent
    ],
    providers: [
    ]
})
export class PortalModule {
    static forRoot(widgets: Widget[]): ModuleWithProviders{
        return {
            ngModule: PortalModule,
            providers: [
                { provide: widgetsToken, useValue: widgets },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: widgets },
                { provide: PortalService, useClass:PortalService, deps: [widgetsToken]},
                { provide: WidgetFactory, useClass: WidgetFactory, deps: [ComponentFactoryResolver]}
            ]
        }
    }
}
