/********************************************************************
 * File Name: index.js
 * Date: 1/27/2025
 * Description: JS file for connecting servers, databases, and APIs.
 *              Entry point for 
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { startServer, connectDatabase } from "./server.js";

connectDatabase();

startServer();
