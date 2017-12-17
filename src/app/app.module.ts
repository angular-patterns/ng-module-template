import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { RouterModule} from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConceptComponent } from './concept/concept.component';
import { TabsComponent } from './tabs/tabs.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FeatureModule, 
    RouterModule.forRoot([
      { path:':concept', component: TabsComponent, children: [
         { path: 'concept', component: ConceptComponent },
         { path: 'code', component: CodeComponent },
         { path: '**', redirectTo: 'concept' }
        
      ] },
      
    ], { useHash: true })],
  declarations: [ 
    AppComponent, 
    ConceptComponent, 
    TabsComponent,
    CodeComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
