/********************************************************************
 * File Name: voicepopup.jsx
 * Date: 2/26/2025
 * Description: React file for using voice commands
 * Author(s): CS 362-Team 20
 ********************************************************************/

// voicepopup.jsx

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";

export const VoicePopUp = ({ onClose }) => {
    const queryClient = useQueryClient();

    // State to hold the recognized voice input
    const [voiceTitle, setVoiceTitle] = useState("");
    const [listening, setListening] = useState(false);

    // Disable scrolling when popup is active
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        return () => {
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
        };
    }, []);

    // Mutation to create a new task
    const createTaskMutation = useMutation(
        (newTask) => axios.post(`${VITE_BACKEND_URL}/tasks/create-task`, newTask),
        {
        onSuccess: () => {
            queryClient.invalidateQueries("tasks");
            setVoiceTitle("");
            onClose();
        },
        onError: (error) => {
            console.error(
            "An error occurred while creating the task:",
            error.response?.data || error.message
            );
        },
        }
    );

    // Submit handler that creates a task using the recognized voice input as title
    const handleSubmit = (e) => {
        e.preventDefault();
        const today = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toTimeString().slice(0, 5);
        const dateStart = new Date(`${today}T${currentTime}:00`);

        const newTask = {
        taskID: Date.now(),
        title: voiceTitle,
        description: "Voice-created task",
        category: "General",
        priority: 3,
        status: "pending",
        dateStart,
        dateCompleted: null,
        userId: "64c0f3abf8d12c0004c4a1f2", // use your default or current user id
        };
        createTaskMutation.mutate(newTask);
    };

    // Function to start voice recognition and capture the task title
    const startVoiceRecognition = () => {
        if (!("SpeechRecognition" in window) && !("webkitSpeechRecognition" in window)) {
        console.error("Speech Recognition API is not supported in this browser.");
        return;
        }
        const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        setListening(true);
        recognition.start();

        recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setVoiceTitle(transcript);
        setListening(false);
        };

        recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setListening(false);
        };

        recognition.onend = () => {
        setListening(false);
        };
    };

    return (
        <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
        <form
            className="relative border-3 flex flex-col w-[500px] h-[300px] bg-gray-200 rounded-3xl items-center p-4 overflow-auto"
            onSubmit={handleSubmit}
        >
            {/* Close Button */}
            <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
            onClick={onClose}
            type="button"
            >
            <IoClose className="cursor-pointer" />
            </button>

            {/* Popup Title */}
            <div className="bg-white mt-4 p-4 w-[80%] text-[28px] font-bold text-center rounded-2xl">
            Add Task via Voice
            </div>

            {/* Voice Command Section */}
            <div className="flex flex-col items-center mt-4">
            <button
                type="button"
                onClick={startVoiceRecognition}
                className="w-[200px] h-[50px] bg-[#37E03A] text-white rounded-[10px] mb-4"
            >
                {listening ? "Listening..." : "Start Voice Command"}
            </button>
            <p className="text-[18px] font-semibold">
                {voiceTitle ? `Recognized: ${voiceTitle}` : "No voice input yet."}
            </p>
            </div>

            {/* Create Task Button */}
            <button
            type="submit"
            className="w-[150px] h-[47px] bg-[#37E03A] rounded-[10px] cursor-pointer border-[2px] border-black drop-shadow-lg mt-4 text-white font-bold"
            >
            Create Task
            </button>
        </form>
        </div>
    );
};

export default VoicePopUp;
