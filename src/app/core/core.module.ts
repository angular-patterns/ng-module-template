import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetFactory } from './widget.factory';
import { OptionsFactory } from './options.factory';
import { IdService } from './id.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
      WidgetFactory,
      OptionsFactory,
      IdService
  ]
})
export class CoreModule { }
