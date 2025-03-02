/********************************************************************
 * File Name: parseTranscript.js
 * Date: 2/28/2025
 * Description: Takes a speech input from client and tokenizes the
 *              text
 * Author(s): CS 362-Team 20
 ********************************************************************/


// get the speech input, send to backend
// tokenize string in a new task format
// send that form to the client, with confir or cancel
// await confimation
// if (confirm)
    // manage task -> data base
// else
    // throw away, send response that it cancled

// confirm


export const parseCommand = (transcript) => {
    const addRegex = /add\s+(.+)\s/i; 
    const removeRegex = /remove\s+(.+)\s/i;
    const markRegex = /mark\s+(.+)\s+as complete/i;
  
    if (addRegex.test(transcript)) {
      const task = transcript.match(addRegex)[1].trim();
      return { type: 'add', task };
    } else if (removeRegex.test(transcript)) {
      const task = transcript.match(removeRegex)[1].trim();
      return { type: 'remove', task };
    } else if (markRegex.test(transcript)) {
      const task = transcript.match(markRegex)[1].trim();
      return { type: 'mark', task };
    } else {
      console.warn('No command detected:', transcript);
      return null;
    }
};