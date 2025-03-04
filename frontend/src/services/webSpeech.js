/********************************************************************
 * File Name: webSpeech.js
 * Date: 1/30/2025
 * Description: JS file for Web Speech API
 * Author(s): CS 362-Team 20
 ********************************************************************/

// Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

// Check browser support
if (!SpeechRecognition) {
  console.error("Web Speech API is not supported in this browser.");
} else {
  recognition = new SpeechRecognition();

  // Configure recognition settings
  recognition.continuous = false;         // Stop after one command
  recognition.lang = 'en-US';             // Set language
  recognition.interimResults = false;     // Only final results
  recognition.maxAlternatives = 1;        
}

// Function to start listening
export const startListening = (onResult, onError, onEnd) => {
  if (!recognition) {
    console.error("Speech recognition is not initialized.");
    return;
  }

  // Set up event listeners
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Voice input:", transcript);
    onResult(transcript); // Send the raw transcript to the callback
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    onError(event.error);
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
    onEnd(); // Notify when recognition ends
  };

  // Start listening
  recognition.start();
};

// Function to stop listening
export const stopListening = () => {
  if (recognition) {
    recognition.stop(); // Stop the recognition process
  }
};