import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', loadChildren: './info/info.module#InfoModule'}
];

export const forRoot: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  imports: [ forRoot ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
