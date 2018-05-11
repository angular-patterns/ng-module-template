import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { WidgetsModule } from './widgets/widgets.module';
import { TextBoxComponent} from './widgets/text-box/text-box.component';
import { WidgetType } from './dynamic/shared/widget-ref.model';
import { UtilitiesModule } from './utilities/utilities.module';
import { PropertiesModule} from './properties/properties.module';
import { TextBoxPropertiesComponent } from './properties/text-box-properties/text-box-properties.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    WidgetsModule,
    UtilitiesModule,
    PropertiesModule,
    DynamicModule.withComponents({
      widgets:[
        { key: 'text-box', name: 'Text Box', component: TextBoxComponent, properties: TextBoxPropertiesComponent, type: WidgetType.Field }
      ],
      layouts:[]
    }) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
