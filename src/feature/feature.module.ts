import { NgModule, ModuleWithProviders } from '@angular/core';

import { WidgetComponent } from './widget.component';
import { RouterOutlet, RouterModule, provideRoutes } from '@angular/router';
import { ModalOutletComponent } from './modal-outlet.component';
import { ModalService } from './modal.service';

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
            providers: [ModalService, provideRoutes(modals)]
        }
    }
 }
