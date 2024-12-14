import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import { getDaysInMonth, isSameDay } from "../../../../utils/date";

function Calendar({ selectedDate, onDateSelect, minDate, maxDate }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const isDateDisabled = (date) => {
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) return true;
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999)))
      return true;
    return false;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600 py-2"
          >
            {day}
          </div>
        ))}

        {getDaysInMonth(currentDate).map((date, index) => {
          const isDisabled = isDateDisabled(date);
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const isToday = isSameDay(date, new Date());

          return (
            <button
              key={index}
              onClick={() => !isDisabled && onDateSelect(date)}
              disabled={isDisabled}
              className={`
                p-2 text-sm rounded-lg
                ${
                  isDisabled
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-blue-50"
                }
                ${isSelected ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
                ${isToday && !isSelected ? "border border-blue-500" : ""}
                ${
                  date.getMonth() !== currentDate.getMonth()
                    ? "text-gray-400"
                    : ""
                }
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Calendar;
