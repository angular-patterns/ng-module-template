import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'v1', loadChildren: './dynamic/dynamic.module#DynamicModule'},
  { path: 'v2', loadChildren: './dynamic2/dynamic2.module#Dynamic2Module'},
  { path: 'info', loadChildren: './info/info.module#InfoModule'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
