import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DynamicCoreModule } from './dynamic-core/dynamic-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from './controls/controls.module';
import { TextboxComponent } from './controls/widgets/textbox/textbox.component';
import { LabelComponent } from './controls/widgets/label/label.component';
import { TableComponent } from './controls/widgets/table/table.component';
import { textboxOptions } from './controls/schemas/textbox-options';
import { labelOptions } from './controls/schemas/label-options';
import { tableOptions } from './controls/schemas/table-options';
import { GroupComponent } from './controls/widgets/group/group.component';
import { groupOptions } from './controls/schemas/group-options';



@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule, 
    ControlsModule, 
    FormsModule, 
    ReactiveFormsModule,
    DynamicCoreModule.withComponents([
      { name: 'textbox', component: TextboxComponent, optionsSchema: textboxOptions },
      { name: 'label', component: LabelComponent, optionsSchema: labelOptions },
      { name: 'table', component: TableComponent, optionsSchema: tableOptions },
      { name: 'group', component: GroupComponent, optionsSchema: groupOptions }
    ]) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
