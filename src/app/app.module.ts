      
import { NgModule, Type, ModuleWithProviders, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Injectable, Component, ViewChild, Directive, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { PortalConfig, Portal, Widget } from './model/model';
import { WidgetHostDirective } from './widget-host/widget-host.directive';
import { PortalComponent } from './portal/portal.component';
import { PortalProvider } from './providers/portal.provider';
import { WidgetProvider } from './providers/widget.provider';
import { WidgetFactory } from './providers/widget.factory';
import { PortalFactory } from './providers/portal.factory';
import { WidgetContainerComponent } from './widget/widget-container.component';
import { MessageService } from './widget/message.service';
import { PortalTemplateComponent } from './portal-template.component';
import { SampleWidgetComponent } from './sample-widget.component';
export const WidgetToken = new InjectionToken<Widget>("widgetToken");
export const PortalToken = new InjectionToken<Portal>("portalToken");



export function portalProviderFactory(portals: Portal[]) {
  return new PortalProvider(portals);
}

export function widgetProviderFactory(widgets: Widget[]) {
  return new WidgetProvider(widgets);
}

export function MyWidgetFactory(widgetProvider:WidgetProvider, factory:ComponentFactoryResolver) {
    return new WidgetFactory(widgetProvider, factory);
}
export function MyPortalFactory(portalProvider:PortalProvider, factory:ComponentFactoryResolver) {
    return new PortalFactory(portalProvider, factory);
}


@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    WidgetComponent, 
    PortalComponent, 
    WidgetHostDirective, 
    WidgetContainerComponent
  ],
  exports: [
    WidgetComponent, 
    PortalComponent, 
    WidgetHostDirective, 
    WidgetContainerComponent
  ]
})
export class PortalCoreModule { 
  static forRoot(config:PortalConfig): ModuleWithProviders{
    return {
      ngModule: PortalCoreModule,
      providers: [
        {
          provide: WidgetToken,
          useValue: config.widgets
        },
        {
          provide: PortalToken,
          useValue: config.portals
        },
        {
          provide: PortalProvider,
          useFactory: portalProviderFactory,
          deps: [PortalToken]

        },
        {
          provide: WidgetProvider,
          useFactory: widgetProviderFactory,
          deps: [WidgetToken]
        },
        {
            provide: WidgetFactory,
            useFactory: MyWidgetFactory,
            deps: [WidgetProvider, ComponentFactoryResolver]
        },        
        {
            provide: PortalFactory,
            useFactory: MyPortalFactory,
            deps: [PortalProvider, ComponentFactoryResolver]
        },        
        MessageService
        
      ]
    }
  }
}


@NgModule({
  imports:      [ 
    BrowserModule, 
    PortalCoreModule.forRoot({
      portals: [
          { name: 'sample-portal', component: PortalTemplateComponent }
      ],
      widgets: [
          { name: 'sample-widget', component: SampleWidgetComponent }
      ]
    })
  ],
  declarations: [ 
    AppComponent,
    PortalTemplateComponent,
    SampleWidgetComponent

  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
      PortalTemplateComponent,
      SampleWidgetComponent
  ]
})
export class AppModule { }