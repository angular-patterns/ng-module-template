import { Component } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
 
 
@Component({
  selector: 'weather',
  template: '<weather-widget [settings]="settings"></weather-widget>'
})
export class WeatherComponent {
    settings: WeatherSettings;
    constructor() {
       this.settings = {
              location: {
                cityName: 'Edmonton'
              },
              backgroundColor: '#fffff',
              color: '#222222',
              width: 'auto',
              height: 'auto',
              showWind:true,
              scale: TemperatureScale.CELCIUS,
              forecastMode: ForecastMode.DETAILED,
              showDetails:true,
              showForecast: true,
              layout: WeatherLayout.WIDE,
              language: 'en'
            };
    }
}