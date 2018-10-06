import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRenderingComponent } from './form-rendering.component';

const routes: Routes = [
  { path: ':section', component: FormRenderingComponent, children: [
    { path: '', redirectTo: 'v2', pathMatch: 'full'},
    { path: 'v1', loadChildren: '../formly-common/v1/formly-common.module#FormlyCommonModule'},
    { path: 'v2', loadChildren: '../formly-common/v2/formly-common.module#FormlyCommonModule'}
  ]},  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ ]
})
export class FormRenderingRoutingModule { }
