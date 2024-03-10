import React, { useEffect } from "react";

const Timer = () => {
  // get current time
  const currentTime = new Date().getTime();
  const [current, setCurrent] = React.useState(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // sahri time
  const todaysSahriTimeHr = 3;
  const todaysSahriTimeMin = 40;

  // iftar time
  const todaysIftarTimeHr = 6;
  const todaysIftarTimeMin = 45;

  // current time
  const currentHr = new Date().getHours();
  const currentMin = new Date().getMinutes();

  // set sahri time to 3:40 AM
  const sahriTime = new Date();
  sahriTime.setHours(todaysSahriTimeHr);
  sahriTime.setMinutes(todaysSahriTimeMin);
  sahriTime.setSeconds(0);
  sahriTime.setMilliseconds(0);
  const sahriTimeInMs = sahriTime.getTime();

  // set iftar time to 6:45 PM
  const iftarTime = new Date();
  iftarTime.setHours(todaysIftarTimeHr + 12);
  iftarTime.setMinutes(todaysIftarTimeMin);
  iftarTime.setSeconds(0);
  iftarTime.setMilliseconds(0);
  const iftarTimeInMs = iftarTime.getTime();

  // calculate remaining iftar time
  const remainingTimeToIftar = iftarTimeInMs - current;

  // calculate remaining sahri time
  const remainingTimeToSahri = sahriTimeInMs - current;

  // convert remaining time to hours, minutes and seconds
  const hours = Math.floor(remainingTimeToIftar / (1000 * 60 * 60));
  const minutes = Math.floor(
    (remainingTimeToIftar % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((remainingTimeToIftar % (1000 * 60)) / 1000);

  const hoursToSahri = Math.floor(remainingTimeToSahri / (1000 * 60 * 60));
  const minutesToSahri = Math.floor(
    (remainingTimeToSahri % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsToSahri = Math.floor(
    (remainingTimeToSahri % (1000 * 60)) / 1000
  );

  // convert time to bangla
  const numbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const convertToBangla = (time) => {
    let banglaTime = "";
    time = time.toString();
    for (let i = 0; i < time.length; i++) {
      banglaTime += numbers[time[i]];
    }
    return banglaTime;
  };

  console.log(currentHr, todaysSahriTimeHr, currentHr > todaysSahriTimeHr);

  return (
    <div className="timer flex flex-col justify-between items-center">
      <div className="top text-center text-2xl text-white w-full h-full flex justify-center items-center">
        <a href="https://www.itvbd.com" target="_blank" rel="noreferrer" className="flex p-10 justify-center items-center h-full w-full">
          {currentHr < todaysSahriTimeHr && currentMin < todaysSahriTimeMin
            ? "সেহরির সময়"
            : "ইফতারের সময়"}
        </a>
      </div>

      {currentHr < todaysSahriTimeHr && currentMin < todaysIftarTimeMin ? (
        <div
          className={`bottom py-5 text-white bg-[#8f820e55] w-full p-3 ${
            hoursToSahri >= 0 &&
            minutesToSahri >= 0 &&
            secondsToSahri >= 0 &&
            "gap-2"
          } flex justify-center items-center`}
        >
          <span className="lh-1 timer-span font-bold text-xl">
            {hoursToSahri > 0 && convertToBangla(hoursToSahri) + " ঘন্টা "}
          </span>
          <span className="lh-1 timer-span font-bold text-xl">
            {minutesToSahri > 0 && convertToBangla(minutesToSahri) + " মিনিট "}
          </span>
          <span className="lh-1 timer-span font-bold text-xl">
            {secondsToSahri > 0 && convertToBangla(secondsToSahri) + " সেকেন্ড"}
          </span>

          <span className="lh-1 timer-span font-bold text-xl">
            {hoursToSahri <= 0 &&
              minutesToSahri <= 0 &&
              secondsToSahri <= 0 &&
              "সেহরির সময় শেষ!!!"}
          </span>
        </div>
      ) : (
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
            {hours <= 0 && minutes <= 0 && seconds <= 0 && "ইফতার এর সময় হয়েছে"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Timer;
