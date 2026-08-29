import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorInterceptor } from './app/interceptor/error.interceptor';

import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { OAuthModule } from 'angular-oauth2-oidc';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['https://api.example.com'],
          sendAccessToken: true
        }
      })
    ),    
    provideZoneChangeDetection(),

    // HttpClient + your ErrorInterceptor
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const interceptor = new ErrorInterceptor();
          return interceptor.intercept(req, { handle: next });
        }
      ])
    ),

    // Angular Material provider
    importProvidersFrom(MatSnackBarModule),

    // Router
    provideRouter(routes),
  ]
})
.catch(err => console.error(err));
