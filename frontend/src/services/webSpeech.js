/********************************************************************
 * File Name: webSpeech.js
 * Date: 1/30/2025
 * Description: JS file for Web Speech API
 * Author(s): CS 362-Team 20
 ********************************************************************/

//setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
let recognition;

//check browser
if(!SpeechRecognition){
    //add error notificiation
} else{
  recognition = new SpeechRecognition();
  const speechGrammarList = new SpeechGrammarList();



  //structure commands
  const grammar = `
    #JSGF V1.0;
    grammar commands;
    public <command> = add | remove | mark;
    public <task> = [a-zA-Z0-9 ]+;
    public <phrase> = <command> <task>| <command> <task> as complete;
  `;
  speechGrammarList.addFromString(grammar, 1);
  recognition.grammars = speechGrammarList; //add to grammar


  recognition.continuous = false; //stop listening after command
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1; //for accepting different # of comamnds, can chain if increased i think


  //recognition.start();

  //valid speech event
  recognition.onresult = (event) => {
    //store voice input
    const transcript = event.results[0][0].transcript.toLowerCase();
    //console.log('voice input:', transcript);

    //parse voice input
    const command = parseCommand(transcript);
    if (command) {
      execCommand(command); //exec function based on command
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

}  

//replace with db comamnds when fully implemented
function execCommand(command) {
  switch (command.type) { //switch case for all possible commands, add more to this later
    case 'add':
      addTask(command.task);
      break;
    case 'remove':
      removeTask(command.task);
      break;
    case 'mark':
      markTask(command.task);
      break;
    default:
      console.warn('Unknown command type:', command.type);
  }
}


function parseCommand(transcript) {
  //use regular expressions to parse voice input (had no idea you can do this)
  const addRegex = /add\s+(.+)\s/i;
  const removeRegex = /remove\s+(.+)\s/i;
  const markRegex = /mark\s+(.+)\s+as complete/i;

  if (addRegex.test(transcript)) {
    const task = transcript.match(addRegex)[1].trim();
    return { type: 'add', task };
  }
  else if (removeRegex.test(transcript)) {
    const task = transcript.match(removeRegex)[1].trim();
    return { type: 'remove', task };
  }
  else if (markRegex.test(transcript)) {
    const task = transcript.match(markRegex)[1].trim();
    return { type: 'mark', task };
  }
  else {
    console.warn('no command:', transcript);
    return null;
  }
}


//replace with db comamnds when fully implemented
function addTask(task) {
  console.log('Added:', task);
}

// Example function to remove a task
function removeTask(task) {
  console.log('Removed:', task);
}

// Example function to mark a task as complete
function markTask(task) {
  console.log('Marked:', task);
}

export { recognition, parseCommand, execCommand};
