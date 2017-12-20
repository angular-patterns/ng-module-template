import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConceptComponent } from './concept/concept.component';
import { TabsComponent } from './tabs/tabs.component';
import { CodeComponent } from './code/code.component';

import { PrismModule } from 'ng-prismjs';
import 'prismjs/components/prism-typescript';
import { DemoComponent } from './demo/demo.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  imports: [
    BrowserModule,
    FeatureModule,
    PrismModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: ':id', component: TabsComponent, children: [
         { path: 'concept', component: ConceptComponent },
         { path: 'code', component: CodeComponent },
         { path: 'demo', component: DemoComponent },
         { path: 'rxjs', component: RxjsComponent },
         { path: '**', redirectTo: 'concept' }
      ]
    },
  ], { useHash: true })],
  declarations: [
    AppComponent,
    ConceptComponent,
    TabsComponent,
    CodeComponent,
    DemoComponent,
    RxjsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class AppModule {
}
