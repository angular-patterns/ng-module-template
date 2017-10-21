import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import './stylesheets';

if (process.env.ENV == 'PROD') {
 enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
