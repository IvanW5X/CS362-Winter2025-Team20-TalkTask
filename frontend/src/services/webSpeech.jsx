/********************************************************************
 * File Name: webSpeech.jsx
 * Date: 1/30/2025
 * Description: JSX file for Web Speech API
 * Author(s): CS 362-Team 20
 ********************************************************************/


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;