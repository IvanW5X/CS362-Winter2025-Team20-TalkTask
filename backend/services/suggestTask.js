/********************************************************************
 * File Name: suggestTask.js
 * Date: 2/2/2025
 * Description: Suggest task using AI model using Gemini 2.0 Flash
 *              AI Suggested task service
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_API_KEY } from "../utils/variables.js";

const genAI = new GoogleGenerativeAI(AI_API_KEY);

export const suggestTask = async (taskList) => {
  try {
    // Add tasks to prompt
    const prompt = `Tasks: ${taskList.join(
      ", "
    )}\nSuggest one additional related task. Ouput as Task Name - Description. Do not include any extra text.`;

    // Use Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    // Limit output and low temperture for predicable outputs
    const result = await model.generateContent(prompt, {
      generationConfig: {
        maxOutputTokens: 35,
        temperature: 0.6,
      },
    });
    return result.response.text();
  } catch (error) {
    console.log(`\nCouldn't generate response: ${error}`);
  }
};
