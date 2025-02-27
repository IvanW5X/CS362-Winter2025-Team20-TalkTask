/********************************************************************
 * File Name: main.jsx (Completed)
 * Date: 1/13/2025
 * Description: Main JSX file to be display
 * Author(s): CS 362-Team 20
 ********************************************************************/


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import history from './history.js';
import './index.css';
import App from './App.jsx';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(process.env.REACT_APP_AUTH0_AUDIENCE ? { audience: process.env.REACT_APP_AUTH0_AUDIENCE } : null),
  },
};

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    {...providerConfig}
  >
    <App />
  </Auth0Provider>,
);
