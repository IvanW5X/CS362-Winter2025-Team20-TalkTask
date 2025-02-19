/********************************************************************
 * File Name: generateTask.js
 * Date: 2/2/2025
 * Description: Suggest task using AI model using Gemini 2.0 Flash
 *              AI Suggested task service
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import dotenv from "dotenv";

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });

const AI_API_KEY = process.env.AI_API_KEY;
const genAI = new GoogleGenerativeAI(AI_API_KEY);

// Create tasks and prompt
const tasks = [
  "Cook dinner",
  "Buy groceries",
  "Hangout with friends",
  "Go to the gym",
  "Practice speech",
];
const testData = `Tasks: ${tasks.join(
  ", "
)}\nSuggest one additional related task. Ouput as Task Name-Description. Do not include any extra text.`;

export const suggestTask = async () => {
  try {
    // Use Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    const result = await model.generateContent(testData, {
      // Limit output and low temperture for predicable outputs
      generationConfig: {
        maxOutputTokens: 50,
        temperature: 0.3,
      },
    });
    console.log("\nPrompt:\n" + testData + "\n" + result.response.text());
    return result.response.text();
  } catch (error) {
    console.log(`\nCouldn't generate response: ${error}`);
  }
};
