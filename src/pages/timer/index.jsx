import React, { useEffect } from "react";
import TopClickable from "../../components/top-clickable";
import MainTimer from "../../components/main-timer";

const Timer = () => {
  const currentTime = new Date().getTime();
  const [current, setCurrent] = React.useState(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // set sahri time
  const todaysSahriTimeHr = 4;
  const todaysSahriTimeMin = 51;

  // set iftar time
  const todaysIftarTimeHr = 6;
  const todaysIftarTimeMin = 10;

  // current time
  const currentHr = new Date().getHours();
  const currentMin = new Date().getMinutes();

  const setTime = (hr, min) => {
    const time = new Date();
    time.setHours(hr);
    time.setMinutes(min);
    time.setSeconds(0);
    time.setMilliseconds(0);
    return time.getTime();
  };

  // calculate remaining iftar time
  const remainingTimeToIftar =
    setTime(todaysIftarTimeHr + 12, todaysIftarTimeMin) - current;

  // calculate remaining sahri time
  const remainingTimeToSahri =
    setTime(todaysSahriTimeHr, todaysSahriTimeMin) - current;

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

  return (
    <div
      className={`${currentHr <= todaysSahriTimeHr && currentMin <= todaysSahriTimeMin
        ? "sahri-timer"
        : currentHr > todaysIftarTimeHr+12 ? "sahri-timer" : "iftar-timer"
        } timer flex flex-col justify-between items-center`}
    >
      <TopClickable
        currentHr={currentHr}
        currentMin={currentMin}
        todaysSahriTimeHr={todaysSahriTimeHr}
        todaysSahriTimeMin={todaysSahriTimeMin}
      />

      {currentHr <= todaysSahriTimeHr && currentMin <= todaysSahriTimeMin ? (
        <MainTimer
          hours={hoursToSahri}
          minutes={minutesToSahri}
          seconds={secondsToSahri}
          convertToBangla={convertToBangla}
          message="সাহরির সময় শেষ!!!"
        />
      ) :
        currentHr >= todaysIftarTimeHr+12 && currentMin >= todaysSahriTimeMin ? (
          <MainTimer
            hours={hoursToSahri}
            minutes={minutesToSahri}
            seconds={secondsToSahri}
            convertToBangla={convertToBangla}
            message="কাউন্ট-ডাউন শীঘ্রই শুরু হবে"
          />
        ) : 
        (
          <MainTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            convertToBangla={convertToBangla}
            message="ইফতার এর সময় হয়েছে"
          />
        )
      }
    </div>
  );
};

export default Timer;
