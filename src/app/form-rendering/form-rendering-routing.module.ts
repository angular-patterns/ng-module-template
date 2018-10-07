import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: ':formCode/:effectiveDate', component: FormComponent, children: [
    { path: ':sectionCode', component: SectionComponent, children: [
      { path: '', redirectTo: 'v2', pathMatch: 'full'},
      { path: 'v1', loadChildren: '../formly-templates/v1/formly-templates.module#FormlyTemplatesModule'},
      { path: 'v2', loadChildren: '../formly-templates/v2/formly-templates.module#FormlyTemplatesModule'}
    ]},  
    { path: '', redirectTo: 'blah', pathMatch: 'full'}  
  ]}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ ]
})
export class FormRenderingRoutingModule { }
