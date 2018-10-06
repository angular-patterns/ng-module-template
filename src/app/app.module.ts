import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormCommonModule } from './form-common/form-common.module';
import { FormRenderingModule } from './form-rendering/form-rendering.module';
import { FormCoreModule } from './form-core/form-core.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    RouterModule.forRoot([], { enableTracing: false}),
    FormCommonModule,
    FormCoreModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
