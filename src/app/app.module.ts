import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VocabularyComponent } from "./vocabulary/vocabulary.component";
import { HttpClientModule } from '@angular/common/http';
import { routeModule } from './app.routes';
import { PrinciplesComponent } from "./principles/principles.component";
import { NamingComponent } from "./naming/naming.component";
import { GuideComponent } from "./guide/guide.component";


@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    routeModule
  ],
  declarations: [ 
    AppComponent, 
    GuideComponent,
    VocabularyComponent,
    NamingComponent,
    PrinciplesComponent 
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
