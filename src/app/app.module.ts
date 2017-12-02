import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VocabularyComponent } from "./vocabulary/vocabulary.component";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GuideComponent } from "./guide/guide.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { vocabulary } from '../docs/vocabulary';
import { principles } from '../docs/principles';
import { naming } from '../docs/naming';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    GuideComponent,
    VocabularyComponent,
    PanelComponent
  ],
  providers: [
     {  provide: 'vocabulary', useValue: ()=> vocabulary},
     {  provide: 'principles', useValue: () => principles},
     {  provide: 'naming', useValue: () => naming},
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
