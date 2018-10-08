import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormCommonModule } from './form-common/form-common.module';
import { FormRenderingModule } from './form-rendering/form-rendering.module';
import { FormCoreModule } from './form-core/form-core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTemplatesModule } from './formly-templates/v2/formly-templates.module';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    RouterModule.forRoot([], { enableTracing: false}),
    FormCommonModule,
    FormCoreModule.forRoot({
      formServiceUrl:`${process.env.BaseServiceUrl}/FormClient`
    }),
    FormlyModule.forRoot(),
    FormlyBoostrapModule,
    FormlyTemplatesModule.forRoot({
      highSchoolSearchServiceUrl:`${process.env.BaseServiceUrl}/high-schools`,
      referenceDataUrl: `${process.env.BaseServiceUrl}/reference-data`,
      learnerServiceUrl: `${process.env.BaseServiceUrl}`
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
