import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';

const routes: Routes = [
  { path: '', component: InfoComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ InfoComponent ]
})
export class InfoRoutingModule { }
