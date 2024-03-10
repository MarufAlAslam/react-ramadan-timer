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

  const todaysIftarTimeHr = 6;
  const todaysIftarTimeMin = 45;

  // set iftar time to 6:45 PM
  const iftarTime = new Date();
  iftarTime.setHours(todaysIftarTimeHr + 12);
  iftarTime.setMinutes(todaysIftarTimeMin);
  iftarTime.setSeconds(0);
  iftarTime.setMilliseconds(0);
  const iftarTimeInMs = iftarTime.getTime();

  // calculate remaining time
  const remainingTime = iftarTimeInMs - current;

  // convert remaining time to hours, minutes and seconds
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

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

  return (
    <div className="timer flex flex-col justify-between items-center">
      <div className="top text-center text-2xl p-5 text-white w-full h-full flex justify-center items-center">
        {/* ইফতার এর সময় বাকি আছে */}
      </div>
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
    </div>
  );
};

export default Timer;
