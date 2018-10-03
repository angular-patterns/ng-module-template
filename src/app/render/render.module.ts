import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { ViewComponent } from './view/view.component';
import { RenderRoutingModule } from './render-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RenderRoutingModule
  ],
  declarations: [
    SectionsComponent,
    ViewComponent,
    OneComponent,
    TwoComponent
  ],
  exports: [
    SectionsComponent,
    ViewComponent
  ]
})
export class RenderModule { }
