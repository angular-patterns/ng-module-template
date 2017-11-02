      
import { NgModule, Type, ModuleWithProviders, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Injectable, Component, ViewChild, Directive, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {  Portal1Component } from '../portals/portal1.component';
import { Widget1Component } from '../widgets/widget1.component';
import { WidgetComponent } from './widget/widget.component';
import { PortalConfig, Portals, Widgets, Portal, Widget, Portlet } from './model/model';
import { WidgetHostDirective } from './widget-host/widget-host.directive';
import { PortalComponent } from './portal/portal.component';
import { PortalProvider } from './providers/portal.provider';
import { WidgetProvider } from './providers/widget.provider';
import { WidgetFactory } from './providers/widget.factory';
import { PortalFactory } from './providers/portal.factory';
import { WidgetContainerComponent } from './widget/widget-container.component';
import { MessageService } from './widget/message.service';
import { Widget2Component } from '../widgets/widget2.component';
import { Portal2Component } from '../portals/portal2.component';
import { Portlet1Component } from "../portlets/portlet1.component";
import { Portlet2Component } from "../portlets/portlet2.component";
import { PortletProvider } from "./providers/portlet.provider";
import { PortletFactory } from "./providers/portlet.factory";
import { PortletComponent } from "./widget/portlet.component";
export const WidgetToken = new InjectionToken<Widget>("widgetToken");
export const PortalToken = new InjectionToken<Portal>("portalToken");
export const PortletToken = new InjectionToken<Portlet>("portletToken");



export function portalFactory(portals: Portal[]) {
  return new PortalProvider(portals);
}

export function widgetFactory(widgets: Widget[]) {
  return new WidgetProvider(widgets);
}

export function portletFactory(portlets: Portlet[]) {
  return new PortletProvider(portlets);
}

@NgModule({
  imports:      [BrowserModule],
  declarations: [WidgetComponent, PortletComponent, PortalComponent, WidgetHostDirective, WidgetContainerComponent],
  exports: [WidgetComponent, PortletComponent, PortalComponent, WidgetHostDirective, WidgetContainerComponent]
})
export class PortalModule { 
  static forRoot(config:PortalConfig): ModuleWithProviders{
    return {
      ngModule: PortalModule,
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
          provide: PortletToken,
          useValue: config.portlets
        },
        {
          provide: PortalProvider,
          useFactory: portalFactory,
          deps: [PortalToken]

        },
        {
          provide: PortletProvider,
          useFactory: portletFactory,
          deps: [PortletToken]
        },
        {
          provide: WidgetProvider,
          useFactory: widgetFactory,
          deps: [WidgetToken]
        },
        WidgetFactory,
        PortalFactory,
        PortletFactory,
        MessageService
        
      ]
    }
  }
}


@NgModule({
  imports:      [ 
    BrowserModule, 
    PortalModule.forRoot({
      portals: [
        { name: 'portal1', component: Portal1Component },          
        { name: 'portal2', component: Portal2Component },          
      ],
      portlets: [
        { name: 'portlet1', component: Portlet1Component },          
        { name: 'portlet2', component: Portlet2Component },          
      ],
      widgets: [
        { name: 'widget1', component: Widget1Component },          
        { name: 'widget2', component: Widget2Component },          
      ]
    })
  ],
  declarations: [ 
    AppComponent, 
    Portal1Component,
    Widget1Component,
    Widget2Component,
    Portal2Component,
    Portlet1Component,
    Portlet2Component
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
    Portal1Component,
    Widget1Component,
    Widget2Component,
    Portal2Component,
    Portlet1Component,
    Portlet2Component
  ]
})
export class AppModule { }