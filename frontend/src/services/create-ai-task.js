/********************************************************************
 * File Name: create-ai-task.js
 * Date: 3/6/2025
 * Description: JS file for category hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

export const createSuggestTask = (suggestedTask) => {
  if (!suggestedTask) return null;

  // Parse the suggested task into the required format
  const [title, description] = suggestedTask.split(" - ");
  return {
    title: title || "New Task",
    description: description || "No description provided",
  };
};