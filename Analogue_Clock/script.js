'use strict';

const startAnalogueClock = () => {
  const secondNeedle = document.querySelector('.second-needle');
  const minuteNeedle = document.querySelector('.minute-needle');
  const hourNeedle = document.querySelector('.hour-needle');

  let date = new Date();
  let curSec = date.getSeconds();
  let curMin = date.getMinutes();
  let curHr = date.getHours();

  const setTransform = (curTime, transformVal) => {
    return `translate(-50%, 50%) rotate(${curTime * transformVal}deg)`;
  };

  const initClock = () => {
    secondNeedle.style.transform = setTransform(curSec, 6);
    minuteNeedle.style.transform = setTransform(curMin, 6);
    hourNeedle.style.transform = setTransform(curHr, 30);
  };

  const runClock = () => {
    setInterval(() => {
      date = new Date();

      curSec = date.getSeconds();
      secondNeedle.style.transform = setTransform(curSec, 6);

      if (curSec === 0) {
        curMin = date.getMinutes();
        minuteNeedle.style.transform = setTransform(curMin, 6);
      }

      if (curMin === 0) {
        curHr = date.getHours();
        hourNeedle.style.transform = setTransform(curHr, 30);
      }
    }, 1000);
  };

  initClock();
  runClock();
};

startAnalogueClock();
