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
    // add variants
    const add = /add\s+(.+)\s/i; 

    //remove/delete variants
    const remove = /remove\s+(.+)\s/i;

    //mark as complete variants
    const mark = /mark\s+(.+)\s+as complete/i;
  
    if (add.test(transcript)) {
      const task = transcript.match(add)[1].trim();
      return { type: 'add', task };
    } else if (remove.test(transcript)) {
      const task = transcript.match(remove)[1].trim();
      return { type: 'remove', task };
    } else if (mark.test(transcript)) {
      const task = transcript.match(mark)[1].trim();
      return { type: 'mark', task };
    } else {
      console.warn('No command detected:', transcript);
      return null;
    }
};