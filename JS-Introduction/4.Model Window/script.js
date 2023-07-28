'use strict';

//select class from html
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button Clicked');

  //code to show and hide modal window
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Add Event Listener for click functionality
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//code to close modal
btnCloseModal.addEventListener('click', closeModal);
//same for overlay
overlay.addEventListener('click', closeModal);
