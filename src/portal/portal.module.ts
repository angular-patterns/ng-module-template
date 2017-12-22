import { NgModule, InjectionToken } from '@angular/core';
import { PortalComponent } from './portal.component';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { ModuleWithProviders } from '@angular/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { PortalService } from './services/portal.service';
import { ComponentFactoryResolver } from '@angular/core';
import { Widget } from './services/widget.model';
import { WidgetFactory } from './services/widget.factory';
import { WidgetComponent } from './widget-outlet/widget.component';
import { CommonModule } from '@angular/common';
import { PortalOptions } from './services/portal-options.model';

export const widgetsToken = new InjectionToken<Widget[]>('widgets');
export const optionsToken = new InjectionToken<PortalOptions>('portal options');

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
      
        PortalComponent,
        WidgetOutletComponent
    ],
    declarations: [
        PortalComponent,
        WidgetComponent,
        WidgetOutletComponent
    ],
    providers: [
    ],
    entryComponents: [
        WidgetOutletComponent, 
        WidgetComponent
    ]

})
export class PortalModule {
    static forRoot(widgets: Widget[], options: PortalOptions): ModuleWithProviders{
 
        return {
            ngModule: PortalModule,
            providers: [
                { provide: widgetsToken, useValue: widgets },
                { provide: optionsToken, useValue: options },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: [widgets, options]  },
                { provide: PortalService, useClass:PortalService, deps: [widgetsToken]},
                { provide: WidgetFactory, useClass: WidgetFactory, deps: [ComponentFactoryResolver, optionsToken]}
            ]
        }
    }
}
