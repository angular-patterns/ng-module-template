
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { WeatherComponent } from './weather/weather.component';

export const  OPEN_WEATHER_MAP_API_KEY = '14ef5c6d02466c43f17b02441ed57b44';

@NgModule({
  imports: [BrowserModule,
    AngularWeatherWidgetModule.forRoot({
      key:  OPEN_WEATHER_MAP_API_KEY,
      name:  WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl:  'http://api.openweathermap.org/data/2.5'
    })
  ],
  declarations: [AppComponent, WeatherComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent, WeatherComponent]
})
export class AppModule { }