import { ModuleWithProviders, NgModule, Provider, InjectionToken, Type, ANALYZE_FOR_ENTRY_COMPONENTS, Injector } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, provideRoutes, ROUTES, Router } from "@angular/router";
import { ModalOutletComponent } from "./modal-outlet/modal-outlet.component";
import { ModalService } from "./services/modal.service";
import { Modal } from "./models/modal.model";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { CommonModule } from "@angular/common";
//import { ANALYZE_FOR_ENTRY_COMPONENTS } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataResolver } from "./services/data.resolver";



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
        BrowserAnimationsModule,
        RouterModule.forChild([])
    ],
    declarations: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    exports: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    providers: [
        //ModalService
    ]
})
export class ModalCommonModule {

}


@NgModule({
    imports: [
        CommonModule,
        ModalCommonModule
    ],
    exports: [
        ModalCommonModule
    ]
})
export class RouterModalModule {
    static forRoot(modals: Modal[]): ModuleWithProviders {
        
        return {
            ngModule: RouterModalModule, 
            providers: [
                        
                { provide: Modals, useValue: modals},
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: modals },
                { provide: ModalService, useFactory: InitModalService, deps:[Router, Modals, DataResolver] },
                DataResolver
            ]
        }
    }
 
}

@NgModule({
    imports: [
        CommonModule,
        ModalCommonModule,
        RouterModule.forRoot([])
    ],
    exports: [
        ModalCommonModule
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

