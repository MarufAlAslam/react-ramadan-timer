import React from "react";

const MainTimer = ({ hours, minutes, seconds, convertToBangla, message }) => {
  return (
    <div
      className={`bottom py-5 text-white bg-[#8f820e55] w-full p-3 ${
        hours >= 0 && minutes >= 0 && seconds >= 0 && "gap-2"
      } flex justify-center items-center`}
    >
      <span className="lh-1 timer-span font-bold text-xl">
        {hours > 0 && convertToBangla(hours) + " ঘন্টা "}
      </span>
      <span className="lh-1 timer-span font-bold text-xl">
        {minutes > 0 && convertToBangla(minutes) + " মিনিট "}
      </span>
      <span className="lh-1 timer-span font-bold text-xl">
        {seconds > 0 && convertToBangla(seconds) + " সেকেন্ড"}
      </span>

      <span className="lh-1 timer-span font-bold text-xl">
        {hours <= 0 && minutes <= 0 && seconds <= 0 && message}
      </span>
    </div>
  );
};

export default MainTimer;
