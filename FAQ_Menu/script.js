'use strict';

const accordionContainer = document.getElementById('accordion');
const answers = document.querySelectorAll('.answer');

const handleAccordion = function (clickedElem) {
  if (clickedElem === null) return;

  const answerElem = document.getElementById(
    `answer--${clickedElem.dataset.answerNum}`
  );

  answerElem.classList.toggle('hidden');

  clickedElem.innerHTML = `<i class="fas fa-angle-double-${
    answerElem.classList.contains('hidden') ? 'down' : 'up'
  }"></i>`;
};

accordionContainer.addEventListener('click', function (e) {
  const clickElem = e.target.closest('.explore');
  handleAccordion(clickElem);
});
