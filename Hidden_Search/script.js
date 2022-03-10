'use strict';

const revealSearch = document.querySelector('.reveal-search');
const searchBar = document.querySelector('.searchbar');

let clicked = false;

revealSearch.addEventListener('click', function () {
  if (!clicked) {
    searchBar.classList.add('reveal');
    clicked = true;
  } else {
    searchBar.classList.remove('reveal');
    clicked = false;
  }
});
