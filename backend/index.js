/********************************************************************
 * File Name: index.js
 * Date: 1/13/2025
 * Description: Entry point for server side of development
 * Author(s): CS 362-Team 20
 ********************************************************************/


const express = require('express');
const app = express();
const SERVER_PORT = 5001;


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});
