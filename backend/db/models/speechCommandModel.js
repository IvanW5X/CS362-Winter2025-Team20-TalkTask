/********************************************************************
 * File Name: speechCommandModel.js
 * Date: 2/15/2025
 * Description: File for speech command schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';

const speechCommandSchema = new mongoose.Schema({
    commandID: { type: Number, unique: true, required: true },
    commandText: { type: String, required: true },
    CustomerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const SpeechCommand = mongoose.model('SpeechCommand', speechCommandSchema);