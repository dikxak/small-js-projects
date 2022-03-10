'use strict';

const sectionCover = document.querySelector('.cover');
const heading = document.querySelector('h1');
const toggleButton = document.querySelector('.btn-toggle');

const handleDarkMode = function () {
  sectionCover.classList.toggle('dark-mode');
  heading.classList.toggle('text-light');
  heading.textContent = heading.classList.contains('text-light')
    ? 'Dark Mode'
    : 'Light Mode';
  this.classList.toggle('btn-dark');
  this.innerHTML = `<i class="far fa-${
    this.classList.contains('btn-dark') ? 'moon' : 'sun'
  }"></i>`;
};

toggleButton.addEventListener('click', handleDarkMode);
