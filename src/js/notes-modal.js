import refs from './refs';

const { notesModalOverlay, notesModalOpenBtn, notesModalCloseBtn } = refs;

const openModal = () => {
  notesModalOverlay.classList.remove('is-hidden');
  document.addEventListener('keydown', escapeModalHandler);
};

const closeModal = () => {
  notesModalOverlay.classList.add('is-hidden');
  document.removeEventListener('keydown', escapeModalHandler);
};

const escapeModalHandler = e => {
  console.log(e.key);

  if (e.key === 'Escape') {
    closeModal();
  }
};

const clickModalHandler = e => {
  if (e.target === notesModalOverlay || e.target === notesModalCloseBtn) {
    closeModal();
  }
};

notesModalOverlay.addEventListener('click', clickModalHandler);

notesModalOpenBtn.addEventListener('click', openModal);
