import React, { useState } from "react";
import { recognition, parseCommand, execCommand } from "../../services/webSpeech.js";


//button example for later implementation
export const TestSpeech = () => {

    const [transcript, setTranscript] = useState("");
    const [command, setCommand] = useState("");
  
    const startRecognition = () => {
      recognition.start();
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setTranscript(transcript);
  
      const parsed = parseCommand(transcript);
      if (parsed) {
        setCommand(`Command: ${parsed.type}, Task: ${parsed.task}`);
        execCommand(parsed);
      }
    };
  
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  
    recognition.onend = () => {
      console.log('Speech recognition ended.');
      recognition.start();
    };
    
    //follow code above for implementation later
    //need to adjust button later b/c it keeps listening

    return ( //temp button
      <div>
        <button onClick={startRecognition}>button</button>
        <div>
        {/* no need for console.log */}
          <p>Transcript:</p> 
          <p>{transcript}</p>
        </div>
        <div>
          <p>Command:</p>
          <p>{command}</p>
        </div>
      </div>
    );
  };

