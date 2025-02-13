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
        <div className={calendarStyles.calendarContainer}>
            <button className={calendarStyles.navButton}>&#9664;</button> {/* Left Arrow */}
            <div className={calendarStyles.dates}>
                {days.map((d) => (
                    <button
                        key={d.date}
                        className={`${calendarStyles.dateButton} ${selectedDate === d.date ? calendarStyles.selected : ""}`}
                        onClick={() => setSelectedDate(d.date)}
                    >
                        <span className={calendarStyles.month}>{d.month}</span>
                        <span className={calendarStyles.date}>{d.date}</span>
                        <span className={calendarStyles.day}>{d.day}</span>
                    </button>
                ))}
            </div>
            <button className={calendarStyles.navButton}>&#9654;</button> {/* Right Arrow */}
        </div>
    );
};
