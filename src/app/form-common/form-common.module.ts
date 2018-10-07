import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SectionListComponent,
    SectionDetailComponent
  ],
  exports: [
    SectionListComponent,
    SectionDetailComponent
  ]
})
export class FormCommonModule { }