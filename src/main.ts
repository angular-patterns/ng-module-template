import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

if (process.env.Environment === 'Production') {
 enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
