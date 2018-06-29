import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: 'eriksdirectory.onmicrosoft.com',
  clientId: '403403d7-0497-451f-a054-d3476be0dd51',
  endpoints: {
    api: '403403d7-0497-451f-a054-d3476be0dd51',
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: 'http://localhost:8080/home'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);