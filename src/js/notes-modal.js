import refs from './refs';

const { notesModalOverlay, notesModalOpenBtn, notesModalCloseBtn } = refs;

const openModal = () => {
  notesModalOverlay.classList.remove('is-hidden');
  document.addEventListener('keydown', e => escapeModalHandler(e));
};

const closeModal = () => {
  notesModalOverlay.classList.add('is-hidden');
  document.removeEventListener('keydown', e => escapeModalHandler);
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

notesModalOverlay.addEventListener('click', e => clickModalHandler(e));

notesModalOpenBtn.addEventListener('click', openModal);
