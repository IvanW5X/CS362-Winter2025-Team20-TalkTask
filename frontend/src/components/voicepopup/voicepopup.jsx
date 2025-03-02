/********************************************************************
 * File Name: voicepopup.jsx
 * Date: 2/26/2025
 * Description: React file for using voice commands
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";

export const VoicePopUp = ({ onClose }) => {
    const queryClient = useQueryClient();

    const [voiceTranscript, setVoiceTranscript] = useState("");
    const [listening, setListening] = useState(false);

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
                setVoiceTranscript("");
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

    const removeTaskMutation = useMutation(
        (taskName) => axios.delete(`${VITE_BACKEND_URL}/tasks/delete-task/${taskName}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("tasks");
                setVoiceTranscript("");
                onClose();
            },
            onError: (error) => {
                console.error(
                    "An error occurred while removing the task:",
                    error.response?.data || error.message
                );
            },
        }
    );

    const updateStatusMutation = useMutation(
        (taskName) => axios.patch(`${VITE_BACKEND_URL}/tasks/update-task/${taskName}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("tasks");
                setVoiceTranscript("");
                onClose();
            },
            onError: (error) => {
                console.error(
                    "An error occurred while marking the task as complete:",
                    error.response?.data || error.message
                );
            },
        }
    );

    const deleteCompletedTasksMutation = useMutation(
        () => axios.delete(`${VITE_BACKEND_URL}/tasks/delete`),
            {
            onSuccess: () => {
                queryClient.invalidateQueries("tasks");
            },
            onError: (error) => {
                console.error("Error deleting completed tasks:", error);
                alert("Failed to delete completed tasks.");
            },
        }
    );

    const handleVoiceCommand = async (transcript) => {
        transcript = transcript.toLowerCase().trim();

        let match = transcript.match(/^add\s+(.+?)(\s+to my list)?$/i);
        if (match) {
            const taskName = match[1].trim();
            const today = new Date().toISOString().split("T")[0];
            const currentTime = new Date().toTimeString().slice(0, 5);
            const dateStart = new Date(`${today}T${currentTime}:00`);
            const newTask = {
                taskID: Date.now(),
                title: taskName,
                description: "Voice-created task",
                category: "General",
                priority: 3,
                status: "pending",
                dateStart,
                dateCompleted: null,
                userId: "64c0f3abf8d12c0004c4a1f2", 
            };
            createTaskMutation.mutate(newTask);
            return;
        }

        match = transcript.match(/^remove\s+(.+?)(\s+from my list)?$/i);
        if (match) {
            const taskName = match[1].trim
            removeTaskMutation.mutate(taskName)
            onClose();
            return;
        }

        match = transcript.match(/^mark\s+(.+?)\s+as complete$/i);
        if (match) {
            const taskName = match[1].trim();
            updateStatusMutation.mutate(taskName);
            onClose();
            return;
        }

        if (/^clear all completed tasks$/.test(transcript)) {
            deleteCompletedTasksMutation.mutate();
            onClose();
            return;
        }
        console.warn("No matching command found:", transcript);
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
            setVoiceTranscript(transcript);
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

    const handleSubmit = (e) => { 
        e.preventDefault();
        if (!voiceTranscript) {
            console.warn("No voice input to process.");
            return;
        }
        handleVoiceCommand(voiceTranscript);
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
                <div className="bg-[#F4F3F2] mt-4 p-4 w-[80%] text-[28px] font-bold text-center rounded-2xl">
                    Add Task via Voice
                </div>

                {/* Voice Command Section */}
                <div className="flex flex-col items-center mt-4">
                    <button
                        type="button"
                        onClick={startVoiceRecognition}
                        className="w-[200px] h-[50px] bg-[#37E03A] text-[#F4F3F2] rounded-[10px] mb-4"
                    >
                        {listening ? "Listening..." : "Start Voice Command"}
                    </button>
                    <p className="text-[18px] font-semibold">
                        {voiceTranscript
                            ? `Recognized: ${voiceTranscript}`
                            : "No voice input yet."}
                    </p>
                </div>

                {/* Create Task Button */}
                <button
                type="submit"
                className="w-[150px] h-[47px] bg-[#37E03A] rounded-[10px] cursor-pointer border-[2px] border-black drop-shadow-lg mt-4 text-[#F4F3F2] font-bold"
                >
                    Process Command
                </button>
            </form>
        </div>
    );
};

export default VoicePopUp;
