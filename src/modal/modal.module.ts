import { ModuleWithProviders, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { ModalOutletComponent } from "./modal-outlet/modal-outlet.component";
import { ModalService } from "./services/modal.service";
import { Modal } from "./models/modal.model";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
var AppRouterModule = RouterModule.forRoot([
]);
@NgModule({
    imports: [
        BrowserModule,
        AppRouterModule
    ],
    declarations: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    exports: [
        ModalDialogComponent,
        ModalOutletComponent,
        AppRouterModule.ngModule
    ]
})
export class ModalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule, 
            providers: [ModalService]
        }
    }
    // static forRoot(modals:Modal[]): ModuleWithProviders{
    //     const routes:Routes = modals.map(t=> {
    //         return { path: t.name, component: t.component, outlet: 'modal'}
    //     });
    //     //return RouterModule.forRoot(routes);
    //     // @NgModule({
    //     //     imports: [
    //     //         ModalModule,
    //     //         RouterModule,
    //     //     ],
    //     //     exports: [
    //     //         ModalModule
    //     //     ],
    //     //     providers: [
    //     //         provideRoutes(routes)
    //     //     ]
    //     // })
    //     // class InternalModalModule {
    //     //     static forRoot():ModuleWithProviders {
    //     //         return {
    //     //             ngModule: InternalModalModule,
    //     //             providers: [ModalService]
    //     //         }
    //     //     }
    //     // }

    //     return {
    //         ngModule: ModalModule,
    //         providers: [provideRoutes(routes)]
    //     };
    //}


}