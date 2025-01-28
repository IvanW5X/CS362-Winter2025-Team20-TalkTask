/********************************************************************
 * File Name: index.js
 * Date: 1/27/2025
 * Description: JS file for connecting servers, databases, and APIs.
 *              Entry point for backend server
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { startServer, connectDatabase, connectServer } from "./server.js";

connectDatabase();

connectServer();

startServer();
