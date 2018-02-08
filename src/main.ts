import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AddressModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'PROD') {
 enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AddressModule);
