'use strict';

const showModalElement = document.getElementById('showModal');
const coverElem = document.getElementById('cover');
const closeModalButton = document.getElementById('closeModal');
const agreeCheckbox = document.getElementById('agree');

function showModal() {
  coverElem.classList.remove('hidden');
  closeModalButton.disabled = true;
  agreeCheckbox.checked = false;
}

function hideModal(event) {
  if(event.target === this && agreeCheckbox.checked) {
    coverElem.classList.add('hidden');
  }
}

showModalElement.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal);
coverElem.addEventListener('click', hideModal);

agreeCheckbox.addEventListener('change', function() {
  closeModalButton.disabled = !this.checked;
});