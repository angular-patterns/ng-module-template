import { NgModule, ModuleWithProviders, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { WidgetComponent } from './widget.component';
import { RouterOutlet, RouterModule, provideRoutes, Router, Routes } from '@angular/router';
import { ModalOutletComponent } from './modal-outlet.component';
import { ModalService } from './modal.service';
import { Modal } from './modal.model';

export const Modals = new InjectionToken<Modal>('modals');
export function InitModalService(router:Router, modals:Modal[]) {
    var routes:Routes =  modals.map(t=> { return { path: t.name, component: t.component, outlet:'modal'}});
    router.resetConfig(routes);
    return new ModalService(router);
}


@NgModule({
    imports: [RouterModule],
    exports: [WidgetComponent, ModalOutletComponent],
    declarations: [WidgetComponent, ModalOutletComponent],
    providers: [],
})
export class FeatureModule {
    static forRoot(modals: any[]):ModuleWithProviders {
        
        return {
            ngModule: FeatureModule,
            providers: [
                
                    { provide: Modals, useValue: modals},
                    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: modals },
                    { provide: ModalService, useFactory: InitModalService, deps:[Router, Modals] }
                ]
        }
    }
 }
