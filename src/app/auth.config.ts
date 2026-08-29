import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',        // Your identity provider
  redirectUri: window.location.origin + '/auth/callback',
  clientId: '819279068519-plqdbcnaucrbk0k6di0iqq97bv2cc902.apps.googleusercontent.com',
  responseType: 'code',                           // PKCE flow
  scope: 'openid profile email',                  // Add API scopes if needed
  showDebugInformation: true,                     // Remove in production
  strictDiscoveryDocumentValidation: false,

  // Required for most modern providers
  disableAtHashCheck: true
};