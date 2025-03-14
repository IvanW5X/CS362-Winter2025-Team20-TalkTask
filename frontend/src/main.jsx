/********************************************************************
 * File Name: main.jsx
 * Date: 1/13/2025
 * Description: Main JSX file to be display
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "../contexts/authContext";
import authConfig from "../contexts/authConfig.js";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider {...authConfig}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <App />
          </Router>
        </QueryClientProvider>
      </AuthProvider>
    </Auth0Provider>
  </StrictMode>
);
