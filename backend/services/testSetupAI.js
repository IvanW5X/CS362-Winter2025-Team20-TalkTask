/********************************************************************
 * File Name: setupAI.js
 * Date: 2/2/2025
 * Description: Setup AI model from Hugging Face.
 *              Using DeepSeek Model
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { HfInference } from "@huggingface/inference";
import path from "path";
import dotenv from "dotenv";

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });

const AI_API_KEY = process.env.AI_API_KEY;

// Initialize Hugging Face Inference class
const inference = new HfInference(AI_API_KEY);

const model = "mistralai/Mistral-7B-Instruct-v0.2";

const testData =
  "I am an AI model that takes in a list of tasks to produce a single suggested task.";

export const setupAI = async () => {
  console.log("Generating text...");

  // Get output
  try {
    const result = await inference.textGeneration({
      model: model,
      inputs: testData,
    });
    console.log(`${result.generated_text || result[0]?.generated_text}`);
    return result.generated_text || result[0]?.generated_text;
  
  } catch (error) {
    console.log(error);
    return "Failed to generte task."
  }
};

const list = "Finish presentation, study midterm, go to the gym.";

export const test = async () => {
  try {
    const result = await inference.textGeneration ({
      inputs: list,
    });
    console.log(`${result.generated_text || result[0]?.generated_text}`);
  } catch (error) {
    console.log(error);
  }

};