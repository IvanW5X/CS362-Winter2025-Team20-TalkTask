/********************************************************************
 * File Name: authContext.js
 * Date: 3/2/2025
 * Description: JS file for creating an Auth0 provider global state
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { createContext, useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [authInfo, setAuthInfo] = useState({
    isAuthenticated: false,
    user: null,
    accessToken: null,
  });
  useEffect(() => {
    const fetchAccessToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          
          // Give user access
          setAuthInfo({
            isAuthenticated: true,
            user: user,
            accessToken: accessToken,
          });
        } catch (error) {
          console.error(`Error getting access token: ${error}`);
          
          // Something went wrong, do not authenticate
          setAuthInfo({
            isAuthenticated: false,
            user: null,
            accessToken: null,
          });
        }
      } else {
        // Not authenticated user, do not give access
        setAuthInfo({
          isAuthenticated: false,
          user: null,
          accessToken: null,
        });
      }
    };
    fetchAccessToken();
  }, [isAuthenticated, getAccessTokenSilently, user]);

    const contextValue = {
        ...authInfo,
        loginWithRedirect,
        logout,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
