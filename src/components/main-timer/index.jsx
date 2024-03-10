import React from "react";

const MainTimer = ({ hours, minutes, seconds, convertToBangla, message }) => {
  return hours < 1 ? (
    <div
      className={`bottom main-timer text-white w-full p-3 ${
        hours >= 0 && minutes >= 0 && seconds >= 0 && "gap-2"
      } flex justify-center items-center`}
    >
      {/* <span className="lh-1 timer-span font-bold text-xl">
        {hours > 0 && convertToBangla(hours) + " ঘন্টা "}
      </span> */}
      <span className="lh-1 timer-span font-bold text-2xl">
        {minutes > 0 && convertToBangla(minutes) + " মিনিট "}
      </span>
      <span className="lh-1 timer-span font-bold text-2xl">
        {seconds > 0 && convertToBangla(seconds) + " সেকেন্ড"}
      </span>

      <span className="lh-1 timer-span font-bold text-xl">
        {hours <= 0 && minutes <= 0 && seconds <= 0 && message}
      </span>
    </div>
  ) : (
    <div className="bottom main-timer text-white w-full p-3 flex justify-center items-center">
      <span className="lh-1 timer-span font-bold text-xl">
        কাউন্ট-ডাউন শীঘ্রই শুরু হবে
      </span>
    </div>
  );
};

export default MainTimer;
