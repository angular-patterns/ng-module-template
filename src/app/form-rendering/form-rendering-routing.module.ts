import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FormComponent } from './form/form.component';
import { FormResolver } from './resolvers/form.resolver';
import { SectionResolver } from './resolvers/section.resolver';
import { RenderResolver } from './resolvers/render.resolver';

const routes: Routes = [
  { path: ':formCode/:effectiveDate', component: FormComponent, resolve:{ form: FormResolver }, children: [
    { path: ':sectionCode', component: SectionComponent, resolve: { section: SectionResolver }, children: [
      { path: '', loadChildren: '../formly-templates/v2/formly-templates.module#FormlyTemplatesModule', resolve: { renderData: RenderResolver }, pathMatch: 'full'},
      { path: 'v1', loadChildren: '../formly-templates/v1/formly-templates.module#FormlyTemplatesModule', resolve: { renderData: RenderResolver } },
      { path: 'v2', loadChildren: '../formly-templates/v2/formly-templates.module#FormlyTemplatesModule', resolve: { renderData: RenderResolver }}
    ]},  
    { path: '', redirectTo: '_first', pathMatch: 'full'}  
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
    FormResolver,
    SectionResolver,
    RenderResolver
  ]
})
export class FormRenderingRoutingModule { }
