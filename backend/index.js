/********************************************************************
 * File Name: index.js
 * Date: 1/27/2025
 * Description: JS file for connecting servers, databases, and APIs.
 *              Entry point for backend server
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { startServer, connectServers} from "./server.js";
import { suggestTask } from "./services/generateTask.js";
import { connectTTDB } from "./db/connection.js";

async function Initialize () {
    // await connectTTDB();

    await connectServers();
    console.log("Client-Server Connection");

    startServer();
    
    // await suggestTask();
}

Initialize();
