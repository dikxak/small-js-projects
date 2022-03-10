'use strict';

const startAnalogueClock = () => {
  const secondNeedle = document.querySelector('.second-needle');
  const minuteNeedle = document.querySelector('.minute-needle');
  const hourNeedle = document.querySelector('.hour-needle');

  let curSec = new Date().getSeconds();
  let curMin = new Date().getMinutes();
  let curHr = new Date().getHours();

  const setTransform = function (curTime, transformVal) {
    return `translate(-50%, 50%) rotate(${curTime * transformVal}deg)`;
  };

  const initClock = function () {
    secondNeedle.style.transform = setTransform(curSec, 6);
    minuteNeedle.style.transform = setTransform(curMin, 6);
    hourNeedle.style.transform = setTransform(curHr, 30);
  };

  const runClock = function () {
    setInterval(() => {
      curSec = new Date().getSeconds();
      secondNeedle.style.transform = `translate(-50%, 50%) rotate(${
        curSec * 6
      }deg)`;

      if (curSec === 0) {
        curMin = new Date().getMinutes();
        minuteNeedle.style.transform = `translate(-50%,50%) rotate(${
          curMin * 6
        }deg)`;
      }

      if (curMin === 0) {
        curHr = new Date().getHours();
        hourNeedle.style.transform = `translate(-50%,50%) rotate(${
          curHr * 30
        }deg)`;
      }
    }, 1000);
  };

  initClock();
  runClock();
};

startAnalogueClock();
