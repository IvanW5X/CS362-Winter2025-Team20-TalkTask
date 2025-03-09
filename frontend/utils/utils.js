/********************************************************************
 * File Name: utils.js
 * Date: 2/26/2025
 * Description: JS file for short utility functions
 * Author(s): CS 362-Team 20
 ********************************************************************/

import axios from "axios";
import { VITE_BACKEND_URL } from "./variables.js";

export const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

export const apiRequest = async (
  method,
  enpoint,
  user,
  isAuthenticated,
  accessToken,
  data = null
) => {
  if (!user || !isAuthenticated) {
    console.error("User not authenticated, action denied");
    return null;
  }
  const config = { headers: { Authorization: `Bearer ${accessToken}` } };
  const url = `${VITE_BACKEND_URL}${enpoint}`;

  switch (method) {
    case "POST":
      return (await axios.post(url, data, config)).data;
    case "GET":
      return (await axios.get(url, config)).data;
    case "PATCH":
      return (await axios.patch(url, data, config)).data;
    case "DELETE":
      return (await axios.delete(url, config)).data;
    default:
      console.error(`Unsupported HTTP method: ${method}`);
      return null;
  }
};