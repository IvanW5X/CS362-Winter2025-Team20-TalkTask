/********************************************************************
 * File Name: calendar.jsx
 * Date: 2/12/2025
 * Description: JSX file for calendar UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/
import { useState } from "react";
import {
  addDays,
  subDays,
  startOfDay,
  isSameDay,
  format
} from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function CalendarBar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = Array.from({ length: 7 }, (_, i) => addDays(startOfDay(selectedDate), i - 3));

  function handleSelect(day) {
    setSelectedDate(day);
  }

  function handlePrev() {
    setSelectedDate(subDays(selectedDate, 1));
  }
  function handleNext() {
    setSelectedDate(addDays(selectedDate, 1));
  }


  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Left arrow button */}
      <button
        onClick={handlePrev}
        className="px-3 py-3 bg-[#F4F3F2] rounded-full shadow-md hover:bg-gray-400 hover:shadow-xl"
      >
        <FaAngleLeft/>
      </button>

      {/* The row of 7 days */}
      <div className="flex space-x-2">
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const dayNumber = format(day, "d");   // e.g. "24"
          const dayLabel  = format(day, "EEE"); // e.g. "Fri"

          let dayStyle =
            "flex flex-col items-center justify-center w-15 h-20 rounded-2xl bg-[#F4F3F2] text-black cursor-pointer transition-colors duration-200 shadow-md hover:bg-gray-300 hover:shadow-xl";

          if (isSelected) {
            dayStyle =
              "flex flex-col items-center justify-center w-15 h-20 rounded-2xl bg-[#37E03A] text-black cursor-pointer transition-colors duration-200 shadow-md hover:bg-green-600 hover:shadow-xl";
          }

          return (
            <div
              key={day.toISOString()}
              className={dayStyle}
              onClick={() => handleSelect(day)}
            >
              <div className="text-s">{format(day, "MMM")}</div>
              <div className="font-bold text-3xl">{dayNumber}</div>
              <div className="text-s">{dayLabel}</div>
            </div>
          );
        })}
      </div>

      {/* Right arrow button */}
      <button
        onClick={handleNext}
        className="px-3 py-3 bg-[#F4F3F2] rounded-full shadow-md hover:bg-gray-400 hover:shadow-xl"
      >
        <FaAngleRight/>
      </button>
    </div>
  );
}

export default CalendarBar;
