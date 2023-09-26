import React, { useEffect, useRef, useState } from "react";
import img1 from "../../Assets/1.png"
import img4 from "../../Assets/4.png"

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Oct 28, 2023 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval.current);
        // Optionally: Set the timer values to "00" when the countdown reaches zero
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (

    <section class="  body-font text-white   pt-24 ">
    <div class="container animate-pulse shadow-xl shadow-white/20 bg-white/10 w-2/4 rounded mx-auto">
      <div className="flex justify-start">
        <img src={img1} alt=""/>
      </div>
      <h1 className="text-white text-2xl font-bold flex justify-center uppercase mb-8  ">Starts in </h1>
      <div class="flex flex-wrap -m-4 text-center">
    
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl    text-white">{timerDays}</h2>
          <p class="leading-relaxed ">Days</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl   text-white">{timerHours}</h2>
          <p class="leading-relaxed">Hours</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl   text-white">{timerMinutes}</h2>
          <p class="leading-relaxed">Minutes</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl   text-white">{timerSeconds}</h2>
          <p class="leading-relaxed">Seconds</p>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={img4} alt=""/>
      </div>
    </div>
  </section>
  );
};

export default CountDown;
