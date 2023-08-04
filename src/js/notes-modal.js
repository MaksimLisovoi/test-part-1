import refs from './refs';

const { notesModalOverlay, notesModalOpenBtn, notesModalCloseBtn } = refs;

const clearNoteValues = () => {
  refs.notesForm.id = '';
  refs.notesForm[0].value = '';
  refs.notesForm[1].value = '';
  refs.notesForm[2].value = '';
};

export const openModal = () => {
  notesModalOverlay.classList.remove('is-hidden');
  document.addEventListener('keydown', escapeModalHandler);
};

export const closeModal = () => {
  notesModalOverlay.classList.add('is-hidden');
  document.removeEventListener('keydown', escapeModalHandler);
  clearNoteValues();
  refs.addNoteBtn.textContent = 'Add Note';
};

const escapeModalHandler = e => {
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
