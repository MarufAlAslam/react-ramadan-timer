import React from "react";

const TopClickable = ({
  currentHr,
  currentMin,
  todaysSahriTimeHr,
  todaysSahriTimeMin,
}) => {
  return (
    <div className="top text-center text-2xl text-white w-full h-full flex justify-center items-center">
      <a
        href="https://www.itvbd.com"
        target="_blank"
        rel="noreferrer"
        className="flex p-10 justify-center items-center h-full w-full"
      >
        {currentHr < todaysSahriTimeHr && currentMin < todaysSahriTimeMin
          ? "সেহরির সময়"
          : "ইফতারের সময়"}
      </a>
    </div>
  );
};

export default TopClickable;
