import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IoClose } from "react-icons/io5";
import commands from "../../../../documents/commands.md?raw";

export const CommandsPopUp = ({ onClose }) => {

    const lines = commands.split("\n");
    const headingLine = lines[0];
    const headingText = headingLine.replace(/^#\s*/, "").trim();
    let startIndex = 1;
    if (!lines[startIndex]?.trim()) {
        startIndex++;
    }
    const restOfContent = lines.slice(startIndex).join("\n");
    const sections = restOfContent.split(/\n---+\n/);

    return (
        <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
            <div className="relative bg-[#f4f3f2] p-8 rounded-3xl max-w-[800px] max-h-[80vh] overflow-auto">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
                    onClick={onClose}
                    type="button"
                >
                    <IoClose className="cursor-pointer" />
                </button>

                <h2 className="text-3xl font-bold text-white text-center mb-8 bg-red-600 p-4 rounded-xl">{headingText}</h2>

                <div className="space-y-10 text-lg">
                    {sections.map((section, index) => (
                        <div key={index} className="prose p-4 rounded-xl shadow bg-gray-50">
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, ...props }) => (
                                            <h2 className="text-2xl font-bold mb-4" {...props} />
                                    ),
                                    ul: ({ children, ...props }) => (
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none" {...props}>
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children, ...props }) => (
                                        <li className="bg-green-200 p-4 rounded-xl shadow-sm" {...props}>
                                            {children}
                                        </li>
                                    ),
                                    strong: ({ children, ...props }) => (
                                        <span className="underline font-semibold" {...props}>
                                            {children}
                                        </span>
                                    ),
                                    em: ({ children, ...props }) => (
                                        <span className="italic" {...props}>
                                            {children}
                                        </span>
                                    ),
                                }}
                            >
                                {section}
                            </ReactMarkdown>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
