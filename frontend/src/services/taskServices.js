/********************************************************************
 * File Name: taskServices.js
 * Date: 3/6/2025
 * Description: JS file for task services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { apiRequest } from "../../utils/utils.js";

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
