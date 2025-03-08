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

const wordToNum = {
  one: 1,
  two: 2,
  three: 3,
};

function convertWordToNum(word) {
  return wordToNum[word.toLowerCase()] || parseInt(word, 10) || null;
}

export const parseCommand = (transcript, userID) => {
  // add variants
  const addVariants = [
    /add\s+(.+?)\s+(?:with|and|priority)/i, //captures task title before certain words
    /create\s+(.+?)\s+(?:with|and|priority)/i,
    /new\s+(.+?)\s+(?:with|and|priority)/i,
    /insert\s+(.+?)\s+(?:with|and|priority)/i,
  ];

  // remove/delete variants
  const removeVariants = [
    // variants
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

  // mark as complete variants
  const markVariants = [
    /mark\s+(.+)\s+as complete/i,
    /complete\s+(.+)/i,
    /finish\s+(.+)/i,
    /done\s+(.+)/i,
    /mark\s+(.+)/i,
  ];

  for (const regex of addVariants) {
    if (regex.test(transcript)) {
      const task = transcript.match(regex)[1].trim();

      const descMatch = /with description\s+(.+?)\s/i.exec(transcript);
      // const startTimeMatch = /start time\s+(.+?)\s/i.exec(transcript);
      // const endTimeMatch = /end time\s+(.+?)\s/i.exec(transcript);
      const categoryMatch = /and category\s+(.+?)\s/i.exec(transcript);

      //priority matching
      const priorityMatch = /priority\s+(\w+)/i.exec(transcript);
      let priority = null;
      if (priorityMatch) {
        const priorityText = priorityMatch[1].trim().toLowerCase();
        //captured text is a valid number or word
        if (/^\d+$/.test(priorityText) || wordToNum.hasOwnProperty(priorityText)) {
          priority = convertWordToNum(priorityText);
        } else {
          console.warn(`Invalid priority value: ${priorityText}`);
        }
      }

      console.log("Priority: ", priority);
      return {
        type: 'add',
        task: task,
        description: descMatch ? descMatch[1].trim() : null,
        category: categoryMatch ? categoryMatch[1].trim() : null,
        // startTime: startTimeMatch ? startTimeMatch[1].trim() : null,
        // endTime: endTimeMatch ? endTimeMatch[1].trim() : null,
        priority: priority,
        userID: userID,
      };
    }
  }

  // handle remove
  for (const regex of removeVariants) {
    if (regex.test(transcript)) {
      return { type: 'removeAll' };
    }
  }

  // handle marking
  for (const regex of markVariants) {
    if (regex.test(transcript)) {
      const task = transcript.match(regex)[1].trim();
      return { type: 'mark', task };
    }
  }

  console.warn('No command detected:', transcript);
  return null;
};