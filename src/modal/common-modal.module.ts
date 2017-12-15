import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { ModalOutletComponent } from "./modal-outlet/modal-outlet.component";


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
export class CommonModalModule {

}