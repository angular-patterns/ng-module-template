import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { FormRenderingModule } from '../form-rendering/form-rendering.module';

const routes: Routes = [
  { path: '', component: InfoComponent, children: [
    { path: 'v1', loadChildren: '../formly-common/v1/formly-common.module#FormlyCommonModule'},
    { path: 'v2', loadChildren: '../formly-common/v2/formly-common.module#FormlyCommonModule'}
  ]},  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormRenderingModule],
  exports: [RouterModule],
  declarations: [ InfoComponent ]
})
export class InfoRoutingModule { }
