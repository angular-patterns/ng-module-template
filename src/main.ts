import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SaModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

if (process.env.ENV == 'PROD') {
 enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(SaModule);
