export const oidcSettings = {
  authority: 'http://localhost:12001',
  clientId: 'personalcenternewclient',
  redirectUri: 'http://localhost:18101/sign-in-callback',
  responseType: 'code',
  scope: 'openid profile IdentityServerApi communityservice',
}
