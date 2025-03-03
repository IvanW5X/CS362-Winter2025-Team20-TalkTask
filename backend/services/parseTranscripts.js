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
    const removeVariants = [
      //variants
      /remove\s+completed\s+task/i, 
      /delete\s+completed\s+task/i, 
      /erase\s+completed\s+task/i, 
      /clear\s+completed\s+task/i,

      /remove\s+complete\s+task/i, 
      /delete\s+complete\s+task/i, 
      /erase\s+complete\s+task/i, 
      /clear\s+complete\s+task/i,
      
      /remove\s+completed\s+task/i, 
      /delete\s+completed\s+task/i,
      /erase\s+completed\s+task/i, 
      /clear\s+completed\s+task/i,

      /remove\s+completed\s+tasks/i, 
      /delete\s+completed\s+tasks/i,
      /erase\s+completed\s+tasks/i, 
      /clear\s+completed\s+tasks/i,
    ];
      

    //mark as complete variants
    const markVariants = [
        /mark\s+(.+)\s+as complete/i,
        /complete\s+(.+)/i,
        /finish\s+(.+)/i,
        /done\s+(.+)/i,
        /mark\s+(.+)/i,
    ];



  //handle remove
  for (const regex of removeVariants) {
    if (regex.test(transcript)) {
      return { type: 'removeAll' }; // No need to extract a task name
    }
  }

  //handle marking
  for (const regex of markVariants) {
    const match = transcript.match(regex);
    console.log("Testing regex:", regex, "against transcript:", transcript);
    if (match && match[1]) {
        const task = match[1].trim();
        console.log("Matched command for marking:", task);
        return { type: "mark", task };
    }
}


  console.warn('No command detected:', transcript);
  return null;
};