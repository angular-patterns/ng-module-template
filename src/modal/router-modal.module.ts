import { CommonModule } from "@angular/common";
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders } from "@angular/core";

import { Modals, InitModalService } from "./modal.module";
import { ModalService } from "./services/modal.service";
import { Router } from "@angular/router";
import { DataResolver } from "./services/data.resolver";
import { Modal } from "./models/modal.model";
import { CommonModalModule } from "./common-modal.module";



@NgModule({
    imports: [
        CommonModule,
        CommonModalModule
    ],
    exports: [
        CommonModalModule
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