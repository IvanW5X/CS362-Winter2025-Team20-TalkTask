/********************************************************************
 * File Name: index.js
 * Date: 1/27/2025
 * Description: JS file for connecting servers, databases, and APIs.
 *              Entry point for backend server
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { startServer, connectServers} from "./server.js";
import { connectTTDB } from "./db/connection.js";
connectTTDB();

connectServers();

startServer();
