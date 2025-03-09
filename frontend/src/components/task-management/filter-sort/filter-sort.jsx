/********************************************************************
 * File Name: filter-sort.jsx
 * Date: 2/26/2025
 * Description: React file for filtering and sorting tasks
 * Author(s): CS 362-Team 20
 ********************************************************************/

//icons
import { IoClose } from "react-icons/io5";

//react and backend
import React, { useState, useEffect } from "react";

export const FilterSort = ({ onClose, onApply, initialSelectedPriorities, initialSortOrder }) => {
    // Initialize state with props
    const [selectedPriorities, setSelectedPriorities] = useState(initialSelectedPriorities || []);
    const [sortOrder, setSortOrder] = useState(initialSortOrder || "highToLow");

    const handlePriorityChange = (priority) => {
        setSelectedPriorities((prev) =>
            prev.includes(priority)
                ? prev.filter((p) => p !== priority)
                : [...prev, priority]
        );
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleApply = () => {
        onApply({ selectedPriorities, sortOrder });
        onClose();
    };

    // Stop scrolling when popup is open
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

    return (
        <>
            <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                <form
                    className="relative border-3 flex flex-col w-[900px] h-[700px] bg-gray-200 rounded-3xl items-center overflow-x-auto p-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* close button */}
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
                        onClick={onClose}
                        type="button"
                    >
                        <IoClose className="cursor-pointer" />
                    </button>

                    {/* title */}
                    <div className="bg-[#F4F3F2] mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">
                        Filter & Sort
                    </div>

                    {/* filter */}
                    <div className="w-[90%] max-w-[800px] mt-6">
                        <h2 className="text-xl font-semibold mb-4">Filter by Priority</h2>
                        <div className="space-y-2">
                            {[1, 2, 3].map((priority) => (
                                <label
                                    key={priority}
                                    className="flex items-center bg-[#F4F3F2] p-2 rounded-2xl w-fit"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedPriorities.includes(priority)}
                                        onChange={() => handlePriorityChange(priority)}
                                        className="accent-black mr-2"
                                    />
                                    Priority {priority}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* priority sort */}
                    <div className="w-[90%] max-w-[800px] mt-6">
                        <h2 className="text-xl font-semibold mb-4">Sort by Priority</h2>
                        <select
                            value={sortOrder}
                            onChange={handleSortOrderChange}
                            className="border-[2px] bg-[#F4F3F2] w-[200px] p-2 rounded-2xl"
                        >
                            <option value="lowToHigh">Highest to Lowest</option>
                            <option value="highToLow">Lowest to Highest</option>
                        </select>
                    </div>

                    {/* apply */}
                    <div className="absolute bottom-6 w-full flex justify-center">
                        <button
                            type="button"
                            onClick={handleApply}
                            className="text-white font-bold bg-[#37E03A] cursor-pointer p-2 rounded-2xl text-center w-[150px]"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};