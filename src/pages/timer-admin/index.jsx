import React from "react";
import calendar from "../../assets/img/calendar.jpg";

const TimerAdmin = () => {
  // get current date in dd M format
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
  return (
    <div className="max-w-5xl mx-auto py-6">
      <div className="flex gap-10 justify-between items-start">
        <div className="calendar w-1/2">
          <img src={calendar} alt="calendar" />
        </div>
        <div className="form w-1/2">
          <h2 className="text-2xl ramadan font-bold">Today is <span className="font-bold serif">{currentDate}</span></h2>
        </div>
      </div>
    </div>
  );
};

export default TimerAdmin;
