import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';
import { from } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideRouter(routes), provideHttpClient()]
};
