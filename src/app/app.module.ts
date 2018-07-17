import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from './controls/controls.module';
import { TextboxComponent } from './controls/widgets/textbox/textbox.component';
import { LabelComponent } from './controls/widgets/label/label.component';
import { TableComponent } from './controls/widgets/table/table.component';
import { GroupComponent } from './controls/widgets/group/group.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { EditorModule } from './forms/editor/editor.module';
import { groupOptionsSchema } from './controls/options/schemas/group-options.schema';
import { labelOptionsSchema } from './controls/options/schemas/label-options.schema';
import { tableOptionsSchema } from './controls/options/schemas/table-options.schema';
import { textboxOptionsSchema } from './controls/options/schemas/textbox-options.schema';
import { textboxOptionsDefaults } from './controls/options/defaults/textbox-options.defaults';
import { labelOptionsDefaults } from './controls/options/defaults/label-options.defaults';
import { tableOptionsDefaults } from './controls/options/defaults/table-options.defaults';
import { groupOptionsDefaults } from './controls/options/defaults/group-options.defaults';
import { TextboxOptionsComponent } from './controls/options/widgets/textbox-options/textbox-options.component';



@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule, 
    ControlsModule, 
    FormsModule, 
    ReactiveFormsModule,
    EditorModule,
    DynamicModule.withComponents([
      { 
        name: 'textbox', 
        component: TextboxComponent, 
        optionsSchema: textboxOptionsSchema, 
        defaultOptions: textboxOptionsDefaults,
        settingsComponent: TextboxOptionsComponent  
      },
      { 
        name: 'label', 
        component: LabelComponent, 
        optionsSchema: labelOptionsSchema, 
        defaultOptions: labelOptionsDefaults, 
        settingsComponent: null  
      },
      { 
        name: 'table', 
        component: TableComponent, 
        optionsSchema: tableOptionsSchema, 
        defaultOptions: tableOptionsDefaults, 
        settingsComponent: null  
      },
      { 
        name: 'group', 
        component: GroupComponent, 
        optionsSchema: groupOptionsSchema, 
        defaultOptions: groupOptionsDefaults, 
        settingsComponent: null  
      }
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
