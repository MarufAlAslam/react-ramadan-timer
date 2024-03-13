import React, { useEffect } from "react";
import TopClickable from "../../components/top-clickable";
import MainTimer from "../../components/main-timer";
import FixedTimer from "../../components/fixed-timer";

const Timer = () => {
  const currentTime = new Date().getTime();
  const [current, setCurrent] = React.useState(currentTime);

  // get todays date
  const todaysDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ramadanData = [
    {
      date: "12 Mar",
      sahriMin: 51,
      iftarMin: 10,
    },
    {
      date: "13 Mar",
      sahriMin: 50,
      iftarMin: 10,
    },
    {
      date: "14 Mar",
      sahriMin: 49,
      iftarMin: 11,
    },
    {
      date: "15 Mar",
      sahriMin: 48,
      iftarMin: 11,
    },
    {
      date: "16 Mar",
      sahriMin: 47,
      iftarMin: 12,
    },
    {
      date: "17 Mar",
      sahriMin: 46,
      iftarMin: 12,
    },
    {
      date: "18 Mar",
      sahriMin: 45,
      iftarMin: 12,
    },
    {
      date: "19 Mar",
      sahriMin: 44,
      iftarMin: 13,
    },
    {
      date: "20 Mar",
      sahriMin: 43,
      iftarMin: 13,
    },
    {
      date: "21 Mar",
      sahriMin: 42,
      iftarMin: 13,
    },
    {
      date: "22 Mar",
      sahriMin: 41,
      iftarMin: 14,
    },
    {
      date: "23 Mar",
      sahriMin: 40,
      iftarMin: 14,
    },
    {
      date: "24 Mar",
      sahriMin: 39,
      iftarMin: 14,
    },
    {
      date: "25 Mar",
      sahriMin: 38,
      iftarMin: 15,
    },
    {
      date: "26 Mar",
      sahriMin: 36,
      iftarMin: 15,
    },
    {
      date: "27 Mar",
      sahriMin: 35,
      iftarMin: 16,
    },
    {
      date: "28 Mar",
      sahriMin: 34,
      iftarMin: 16,
    },
    {
      date: "29 Mar",
      sahriMin: 33,
      iftarMin: 16,
    },
    {
      date: "30 Mar",
      sahriMin: 31,
      iftarMin: 17,
    },
    {
      date: "31 Mar",
      sahriMin: 30,
      iftarMin: 18,
    },
    {
      date: "1 Apr",
      sahriMin: 29,
      iftarMin: 18,
    },
    {
      date: "2 Apr",
      sahriMin: 28,
      iftarMin: 19,
    },
    {
      date: "3 Apr",
      sahriMin: 27,
      iftarMin: 19,
    },
    {
      date: "4 Apr",
      sahriMin: 26,
      iftarMin: 19,
    },
    {
      date: "5 Apr",
      sahriMin: 24,
      iftarMin: 20,
    },
    {
      date: "6 Apr",
      sahriMin: 24,
      iftarMin: 20,
    },
    {
      date: "7 Apr",
      sahriMin: 23,
      iftarMin: 21,
    },
    {
      date: "8 Apr",
      sahriMin: 22,
      iftarMin: 21,
    },
    {
      date: "9 Apr",
      sahriMin: 21,
      iftarMin: 21,
    },
    {
      date: "10 Apr",
      sahriMin: 20,
      iftarMin: 22,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const todaysSahriTimeHr = 4;
  const todaysIftarTimeHr = 6;
  // const todaysIftarTimeMin = 10;
  // const todaysSahriTimeMin = 49;
  const [todaysSahriTimeMin, setTodaysSahriTimeMin] = React.useState(0);
  const [todaysIftarTimeMin, setTodaysIftarTimeMin] = React.useState(0);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    ramadanData.map((data) => {
      if (data.date === todaysDate) {
        setTodaysSahriTimeMin(data.sahriMin);
        setTodaysIftarTimeMin(data.iftarMin);
      }
    });
  }, [ramadanData, todaysDate]);

  
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

  // console.log(currentHr, currentMin, todaysIftarTimeHr + 12, todaysIftarTimeMin)

  return (
    <>
      {currentHr < 3 && (
        <div
          className={`sahri-coming timer flex flex-col justify-between items-center`}
        >
          <TopClickable
            currentHr={currentHr}
            currentMin={currentMin}
            todaysSahriTimeHr={todaysSahriTimeHr}
            todaysSahriTimeMin={todaysSahriTimeMin}
          />
          <FixedTimer
            hour={todaysSahriTimeHr}
            minute={todaysSahriTimeMin}
            convertToBangla={convertToBangla}
          />
        </div>
      )}

      {currentHr >= 3 && currentHr < todaysSahriTimeHr + 1 && (
        <div
          className={`sahri-timer timer flex flex-col justify-between items-center`}
        >
          <TopClickable
            currentHr={currentHr}
            currentMin={currentMin}
            todaysSahriTimeHr={todaysSahriTimeHr}
            todaysSahriTimeMin={todaysSahriTimeMin}
          />
          <MainTimer
            hours={hoursToSahri}
            minutes={minutesToSahri}
            seconds={secondsToSahri}
            convertToBangla={convertToBangla}
            message="সাহরির সময় শেষ!!!"
          />
        </div>
      )}

      {currentHr >= todaysSahriTimeHr + 1 && currentHr < 17 && (
        <div
          className={`iftar-coming timer flex flex-col justify-between items-center`}
        >
          <TopClickable
            currentHr={currentHr}
            currentMin={currentMin}
            todaysSahriTimeHr={todaysSahriTimeHr}
            todaysSahriTimeMin={todaysSahriTimeMin}
          />
          <FixedTimer
            hour={todaysIftarTimeHr}
            minute={todaysIftarTimeMin}
            convertToBangla={convertToBangla}
          />
        </div>
      )}

      {currentHr >= 17 && (
        <div
          className={`iftar-timer timer flex flex-col justify-between items-center`}
        >
          <TopClickable
            currentHr={currentHr}
            currentMin={currentMin}
            todaysSahriTimeHr={todaysSahriTimeHr}
            todaysSahriTimeMin={todaysSahriTimeMin}
          />
          <MainTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            convertToBangla={convertToBangla}
            message="ইফতার এর সময় হয়েছে"
          />
        </div>
      )}

      {currentHr >= todaysIftarTimeHr + 13 && (
        <div
          className={`sahri-coming timer flex flex-col justify-between items-center`}
        >
          <TopClickable
            currentHr={currentHr}
            currentMin={currentMin}
            todaysSahriTimeHr={todaysSahriTimeHr}
            todaysSahriTimeMin={todaysSahriTimeMin}
          />
          <FixedTimer
            hour={todaysSahriTimeHr}
            minute={todaysSahriTimeMin}
            convertToBangla={convertToBangla}
          />
        </div>
      )}
    </>
  );
};

export default Timer;
