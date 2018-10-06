import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SectionListComponent
  ],
  exports: [
    SectionListComponent
  ]
})
export class FormCommonModule { }
