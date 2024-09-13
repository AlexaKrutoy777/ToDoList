import React from "react";

export function Title() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    function getWeekDay(date:Date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
        return days[date.getDay()];
      }
      
      function getWeekMonth(date:Date) {
        const months = ['December', 'January','February','March','April','May','June','July','August','September','October','November'];

        return months[date.getMonth()];
      }

    return (
        <h1 className="text-white text-6xl cursor-vertical-text w-1/3 h-1/4 m-auto items-center justify-center flex p-4 bg-sky-500 rounded-md my-24 shadow-2xl selection:bg-sky-600">{getWeekDay(today)}, {getWeekMonth(today)}  {today.getDate()}</h1>
    )
}