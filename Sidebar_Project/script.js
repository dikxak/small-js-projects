'use strict';

const sidebarMenu = document.querySelector('.sidebar-menu');
const toggle = document.querySelector('.toggle-menu-container');
const closeMenu = document.querySelector('.close-cross');

const handleSlide = function () {
  sidebarMenu.classList.toggle('slide');
};

toggle.addEventListener('click', handleSlide);

closeMenu.addEventListener('click', handleSlide);
