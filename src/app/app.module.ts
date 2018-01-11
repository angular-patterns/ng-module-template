import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { CommonModule } from './common';
import { Widget } from './shared/widget.model';
import { TimeComponent } from './demo/components/time/time.component';
import { SigninComponent } from './demo/components/signin/signin.component';
import { DataComponent } from './demo/components/data/data.component';
import { PanelComponent } from './demo/components/panel/panel.component';
import { Demo1Component } from './demo/examples/demo1.component';
import { Demo2Component } from './demo/examples/demo2.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'demo1', component: Demo1Component},
      { path: 'demo2', component: Demo2Component},
      { path: '', redirectTo: 'demo1', pathMatch: 'full'}
    ], { useHash: true}),
    CoreModule.forRoot([
       { key: 'time',   component: TimeComponent },
       { key: 'signin', component: SigninComponent },
       { key: 'data', component: DataComponent},
       { key: 'panel', component: PanelComponent},
    ]),
    CommonModule
  ],
  declarations: [ 
    AppComponent,
    TimeComponent,
    SigninComponent,
    DataComponent,
    PanelComponent,
    Demo1Component,
    Demo2Component
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
