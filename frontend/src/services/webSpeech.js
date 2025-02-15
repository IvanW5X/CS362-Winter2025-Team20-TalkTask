/********************************************************************
 * File Name: webSpeech.js
 * Date: 1/30/2025
 * Description: JS file for Web Speech API
 * Author(s): CS 362-Team 20
 ********************************************************************/

//setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;


//check browser
if(!SpeechRecognition){
    //add error notificiation
} else{
  const recognition = new SpeechRecognition();
  const speechGrammarList = new SpeechGrammarList();
}


//structure commands
const grammar = `
  #JSGF V1.0;
  grammar commands;
  public <command> = add | remove | mark;
  public <task> = [a-zA-Z0-9 ]+;
  public <phrase> = <command> <task> to my list | <command> <task> as complete;
`;
speechGrammarList.addFromString(grammar, 1);
recognition.grammars = speechGrammarList;


recognition.continuous = false; //stop listening after command
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1; //for accepting different # of comamnds, w.i.p


//recognition.start();

//valid speech
recognition.onresult = (event) => {
  //store voice input
  const transcript = event.results[0][0].transcript.toLowerCase();
  console.log('You said:', transcript);

  //parse voice input
  const command = parseComm(transcript);
  if (command) {
    exeComm(command);
  }
};

//speech error event
recognition.onerror = (event) => {
  console.error('Speech recognition error:', event.error);
};

//speech end event
recognition.onend = () => {
  console.log('Speech recognition ended.');
  recognition.start(); //restart
};


function execComm(command) {

}

function parseComm(command) {

}


function addTask(task) {
  console.log('Added:', task);
}

// Example function to remove a task
function removeTask(task) {
  console.log('Removed:', task);
}

// Example function to mark a task as complete
function markTaskAsComplete(task) {
  console.log('Marked:', task);
}