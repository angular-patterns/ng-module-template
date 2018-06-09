import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './info/info.module#InfoModule'}
];

export const routerModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
