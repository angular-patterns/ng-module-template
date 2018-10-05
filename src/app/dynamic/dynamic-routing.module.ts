import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic.component';

const routes: Routes = [
  { path: '', component: DynamicComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [ DynamicComponent ]
})
export class DynamicRoutingModule { }
