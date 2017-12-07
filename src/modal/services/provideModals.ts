import { Modal } from "../models/modal.model";
import { Routes, provideRoutes } from "@angular/router";

export function provideModals(modals: Modal[]) {
    const routes:Routes = modals.map(t=> {
        return { path: t.name, component: t.component, outlet: 'modal'}
    });

    return provideRoutes(routes);
}