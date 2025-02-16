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
  recognition.maxAlternatives = 1; //for accepting different # of comamnds, can chain if increased i think


  //recognition.start();

  //valid speech
  recognition.onresult = (event) => {
    //store voice input
    const transcript = event.results[0][0].transcript.toLowerCase();
    //console.log('voice input:', transcript);

    //parse voice input
    const command = parseCommand(transcript);
    if (command) {
      execCommand(command);
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

  //replace with db comamnds when fully implemented
  function execCommand(command) {
    switch (command.type) {
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

  //no idea rn w.i.p
  function parseCommand(command) {

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

} export { recognition, parseCommand, execCommand, addTask, removeTask, markTask };