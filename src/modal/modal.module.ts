import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";
import { Modal } from "./models/modal.model";
import { DataResolver } from "./services/data.resolver";
import { ModalService } from "./services/modal.service";
import { CommonModule } from "@angular/common";
import { CommonModalModule } from "./common-modal.module";


export const Modals = new InjectionToken<Modal[]>('modals');
export function InitModalService(router:Router, modals:Modal[], resolver:DataResolver) {
    var routes:Routes =  modals.map(t=> { return { path: t.name, component: t.component, outlet:'modal', resolve: { value: DataResolver }}});
    var r = router.config.concat(routes);
    router.resetConfig(r);
    return new ModalService(router, resolver);
}

@NgModule({
    imports: [
        CommonModule,
        CommonModalModule,
        RouterModule.forRoot([])
    ],
    exports: [
        CommonModalModule
    ],
    providers: [
        //ModalService
    ]
})
export class ModalModule {
    static forRoot(modals: Modal[]): ModuleWithProviders {

        return {
            ngModule: ModalModule, 
            providers: [
                
                { provide: Modals, useValue: modals},
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: modals },
                { provide: ModalService, useFactory: InitModalService, deps:[Router, Modals, DataResolver] },
                DataResolver
            ]
        }
    }
 
}

