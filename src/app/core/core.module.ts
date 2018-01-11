import { NgModule, ModuleWithProviders ,ANALYZE_FOR_ENTRY_COMPONENTS,ComponentFactoryResolver,InjectionToken} from '@angular/core';
import { PortalService } from './portal.service';
import { WidgetFactory } from './widget.factory';
import { Widget } from '../shared/widget.model';

export const WidgetToken = new InjectionToken<Widget[]>('Widgets');

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        
    ],
})
export class CoreModule { 
    static forRoot(widgets: Widget[]): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                PortalService,
                { provide: WidgetToken, useValue: widgets },
                { provide: WidgetFactory, useClass: WidgetFactory, deps: [WidgetToken, ComponentFactoryResolver]},
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: widgets}
            ]
        };
    }
    
}
