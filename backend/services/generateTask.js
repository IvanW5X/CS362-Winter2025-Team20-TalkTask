/********************************************************************
 * File Name: generateTask.js
 * Date: 2/2/2025
 * Description: Setup AI model from Hugging Face.
 *              Using DeepSeek Model
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import dotenv from "dotenv";

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });

const AI_API_KEY = process.env.AI_API_KEY;

const tasks = [ "Cook dinner", "Buy groceries", "Hangout with friends", "Go to the gym", "Practice speech" ];

const testData = `Here is a list of tasks: \n- ${ tasks.join('\n- ') }\nSuggest one additional related task. Ouput only the task name and a brief description separated by "." Do not include any extra text.`;

console.log(testData + '\n');

const genAI = new GoogleGenerativeAI(AI_API_KEY);

export const test = async () => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(testData);
    console.log(result.response.text());
  } catch (error) {
    console.log(`Couldn't generate response: ${error}`);
  }
};
