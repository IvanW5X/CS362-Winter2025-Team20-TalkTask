/********************************************************************
 * File Name: auth-config.js
 * Date: 2/28/2025
 * Description: JS file for Auth0 configurations
 * Author(s): CS 362-Team 20
 ********************************************************************/

import history from "./history.js";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_AUDIENCE } from "./variables";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const authConfig = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(AUTH0_AUDIENCE ? { audience: AUTH0_AUDIENCE } : null),
  },
};

export default authConfig;
