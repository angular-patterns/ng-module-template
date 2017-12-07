import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, provideRoutes } from "@angular/router";
import { ModalOutletComponent } from "./modal-outlet/modal-outlet.component";
import { ModalService } from "./services/modal.service";
import { Modal } from "./models/modal.model";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    exports: [
        ModalDialogComponent,
        ModalOutletComponent
    ]
})
export class ModalModule {
    static forRoot(modals:Modal[]): ModuleWithProviders{
        const routes:Routes = modals.map(t=> {
            return { path: t.name, component: t.component, outlet: 'modal'}
        });
        
        return {
            ngModule: ModalModule,
            providers: [ModalService, provideRoutes(routes)]
        };
    }


}