/********************************************************************
 * File Name: webSpeech.js
 * Date: 1/30/2025
 * Description: JS file for Web Speech API
 * Author(s): CS 362-Team 20
 ********************************************************************/

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const colors = [
  "aqua", "azure", "beige", "bisque", "black", "blue", "brown", "chocolate", "coral"
];

const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(" | ")};`;


export const recognition = new SpeechRecognition(); 
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  console.log(`Result received: ${color}.`);
  document.body.style.backgroundColor = color;
};

recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onnomatch = () => {
  console.log("I didn't recognize that color.");
};

recognition.onerror = (event) => {
  console.log(`Error occurred in recognition: ${event.error}`);
};

