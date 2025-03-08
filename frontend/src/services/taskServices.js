/********************************************************************
 * File Name: taskServices.js
 * Date: 3/6/2025
 * Description: JS file for task services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import axios from "axios";
import { VITE_BACKEND_URL } from "../../utils/variables";

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

export const sendTranscript = async (
  user,
  isAuthenticated,
  accessToken,
  transcript
) => {
  try {
    const res = await apiRequest(
      "POST",
      `/tasks/voice-command/${user.sub}`,
      user,
      isAuthenticated,
      accessToken,
      { transcript: transcript }
    );
    console.log(`Backend response: ${res.data}`);
  } catch (error) {
    console.error("Error sending transcript to backend:", error);
    alert("Failed to send transcript");
  }
};
