'use strict';

const btnContainer = document.querySelector('.btn-container');
const modalContainer = document.querySelector('.modal-container');
const closeCrossModal = document.querySelector('.close-modal-cross');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modalContainer.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalContainer.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-open-modal')) {
    openModal();
  }
});

closeCrossModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
