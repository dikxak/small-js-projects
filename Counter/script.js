'use strict';

const numberElem = document.querySelector('.secondary-heading');
const btnContainer = document.querySelector('.btn-container');
let number = 0;

btnContainer.addEventListener('click', function (e) {
  const targetElem = e.target;
  if (targetElem.classList.contains('btn')) {
    targetElem.classList.contains('btn-decrease')
      ? number--
      : targetElem.classList.contains('btn-increase')
      ? number++
      : (number = 0);

    numberElem.textContent = number;
  }
});
