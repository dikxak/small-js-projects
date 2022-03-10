'use strict';

const carousel = () => {
  const carouselBtnRight = document.querySelector('.btn--carousel-right');
  const carouselBtnLeft = document.querySelector('.btn--carousel-left');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carousel = document.querySelector('.carousel');
  let counter = 0;
  let currentElem = 5;

  // Removing active class from the cards
  const clickInit = function () {
    carouselItems.forEach(elem =>
      elem.classList.remove('carousel-item--active')
    );
  };

  const getElement = function (counter) {
    carouselItems.forEach(item => {
      item.style.transform = `translateX(calc(${100 * counter}% + ${
        counter * Number.parseFloat(getComputedStyle(carousel).columnGap)
      }px))`;
    });
  };

  const reset = function () {
    if (
      counter === -(carouselItems.length / 3 + 1) ||
      counter === carouselItems.length / 3 + 1
    ) {
      currentElem = 5;
      counter = 0;
    }
  };

  const activateCurrentElem = function (curElem) {
    document
      .querySelector(`.carousel-item--${curElem}`)
      .classList.add('carousel-item--active');
  };

  const handleNext = function () {
    if (counter >= -(carouselItems.length / 3)) {
      clickInit();

      counter--;
      getElement(counter);
      currentElem++;
      activateCurrentElem(currentElem);
    }

    reset();
  };

  const handlePrev = function () {
    if (counter <= carouselItems.length / 3) {
      clickInit();
      counter++;
      getElement(counter);

      currentElem--;
      activateCurrentElem(currentElem);
    }

    reset();
  };

  carouselBtnRight.addEventListener('click', handlePrev);
  carouselBtnLeft.addEventListener('click', handleNext);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') handlePrev();
    if (e.key === 'ArrowLeft') handleNext();
  });
};

carousel();
