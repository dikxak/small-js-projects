'use strict';

const btnNext = document.querySelector('.btn--next');
const btnPrev = document.querySelector('.btn--prev');

let barNumberCount = 1;
let barLineCount = 0;

const toggleBar = function () {
  document
    .querySelector(`li[data-bar-num = "${barNumberCount}"]`)
    .classList.toggle('bar-number--active');
  document
    .querySelector(`li[data-bar-line = "${barLineCount}"]`)
    .classList.toggle('bar-line--active');
};

const handleNextBar = function () {
  btnPrev.classList.add('btn--active');

  if (barLineCount === 3 && barNumberCount === 4) {
    return;
  } else if (barLineCount === 2 && barNumberCount === 3) {
    btnNext.classList.remove('btn--active');
  }

  barLineCount++;
  barNumberCount++;

  toggleBar();
};

const handlePrevBar = function () {
  if (barLineCount <= 0 && barNumberCount <= 1) {
    return;
  } else if (barLineCount <= 1 && barNumberCount <= 2) {
    btnPrev.classList.remove('btn--active');
  } else if (barLineCount <= 3 && barNumberCount <= 4) {
    btnNext.classList.add('btn--active');
  }

  toggleBar();

  barLineCount--;
  barNumberCount--;
};

btnNext.addEventListener('click', handleNextBar);
btnPrev.addEventListener('click', handlePrevBar);
