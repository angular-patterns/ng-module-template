
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
 enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
