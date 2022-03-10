'use strict';

const btnContainer = document.querySelector('.btn-container');
const contents = document.querySelectorAll('.job-desc-container');
const buttons = document.querySelectorAll('.btn');

btnContainer.addEventListener('click', function (e) {
  const targetElem = e.target;
  if (targetElem.classList.contains('btn')) {
    // Remove active class from all buttons and add to the clicked one.
    buttons.forEach(btn => btn.classList.remove('btn--active'));
    targetElem.classList.add('btn--active');

    // Add hidden class to all contents and remove from the active one accord to target button.
    contents.forEach(elem => elem.classList.add('hidden'));
    document
      .getElementById(`content--${targetElem.dataset.tabNum}`)
      .classList.remove('hidden');
  }
});
