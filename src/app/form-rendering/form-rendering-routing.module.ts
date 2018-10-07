import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FormComponent } from './form/form.component';
import { FormResolver } from './resolvers/form.resolver';

const routes: Routes = [
  { path: ':formCode/:effectiveDate', component: FormComponent, resolve:{ form: FormResolver }, children: [
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
  declarations: [ ],
  providers: [
    FormResolver
  ]
})
export class FormRenderingRoutingModule { }
