/********************************************************************
 * File Name: calendar.jsx
 * Date: 2/12/2025
 * Description: JSX file for calendar UI component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, {useState} from "react";
import calendarStyles from "./calendar.module.css"; 



export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(24); // Default to Jan 24
    
    const days = [
        { month: "Jan", day: "Tue", date: 21 },
        { month: "Jan", day: "Wed", date: 22 },
        { month: "Jan", day: "Thu", date: 23 },
        { month: "Jan", day: "Fri", date: 24 },
        { month: "Jan", day: "Sat", date: 25 },
        { month: "Jan", day: "Sun", date: 26 },
        { month: "Jan", day: "Mon", date: 27 },
    ];

    return (
        <>
          <div className="bg-red-200 w-[1000px] h-[130px] absolute mt-[110px] ml-[520px]">
                {/* implement calender with actual functions */}
          </div>
        </>
    );
};
