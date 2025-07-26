import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from './environment/environment.prod';
import { BASE_URL } from './token/app.tokens';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './store/product/product.reducers';
import { ProductEffects } from './store/product/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    { provide: BASE_URL, useValue: environment.apiUrl },
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    provideStore({
      product: productReducer,
    }),
    provideEffects(ProductEffects),
  ],
};
