/********************************************************************
 * File Name: index.js
 * Date: 1/27/2025
 * Description: JS for starting server and listening for connections
 * Author(s): CS 362-Team 20
 ********************************************************************/

import app from "./server.js";
import { connectDB } from "./db/connection.js";
import { SERVER_PORT } from "./utils/variables.js";

async function Initialize() {
  // Connect to database first
  await connectDB();

  // Start server
  app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
  });
}

Initialize();
