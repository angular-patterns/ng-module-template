import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dynamic2Component } from './dynamic2.component';

const routes: Routes = [
  { path: '', component: Dynamic2Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [ Dynamic2Component ]
})
export class Dynamic2RoutingModule { }
