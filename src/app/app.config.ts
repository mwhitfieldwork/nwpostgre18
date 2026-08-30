import { ApplicationConfig, provideAppInitializer,inject, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';


export const appConfig: ApplicationConfig = {
  providers: [
provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const interceptor = new ErrorInterceptor();
          return interceptor.intercept(req, { handle: next });
        }
      ])
    ),
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['https://api.example.com'],
          sendAccessToken: true
        }
      })
    ),
    importProvidersFrom(MatSnackBarModule),
    provideAppInitializer(() => {
      const oauthService = inject(OAuthService);
      oauthService.configure(authConfig);
     return oauthService.loadDiscoveryDocument();
    }),
  ],
};
