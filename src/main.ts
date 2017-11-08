import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './components/app/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);