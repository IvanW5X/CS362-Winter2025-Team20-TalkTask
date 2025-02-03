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

// DeepSeek was too big for the free account :(
// If no model specified, Hugging Face picks one for you, kinda nice
const model = "";

const testData =
  "Generate a different suggested task based off the current tasks. Limit to one task only: Study for midterm, finish presentation, sleep";

export const test = async () => {
  console.log("Generating text...");

  // Get output
  try {
    const result = await inference.textGeneration({
      model: model,
      inputs: testData,
    });
    console.log(`${result.generated_text || result[0]?.generated_text}`);
  } catch (error) {
    console.log("Failed to fetch test output from AI model.");
  }
};
