import refs from '../refs';
import { refreshTable } from '../templates/commonTable';
import { archiveTable } from '../templates/archivedTable';
import { notes, archiveNotes } from '../dataForApp/notes';
import { openModal } from '../notes-modal';

const currentNote = id => notes.indexOf(notes.find(note => String(note.id) === id));

function eventTargetCheck(e) {
  console.dir(e.target);
  if (
    e.target.className === 'js-table-btn-update' ||
    e.target.className === 'table-notes__row--column'
  ) {
    updateItem(e);
    refreshTable();
  } else if (e.target.className === 'js-table-btn-del') {
    deleteNote(e);
    refreshTable();
    archiveTable();
  } else if (e.target.className === 'js-table-btn-archive') {
    archiveNote(e);
    refreshTable();
    archiveTable();
  }
}

export function deleteNote(e) {
  const id = e.target.parentNode.id;
  const note = notes.splice(currentNote(id), 1);
  return note;
}

function archiveNote(e) {
  const id = e.target.parentNode.id;

  notes[currentNote(id)].isArchived = !notes[currentNote(id)].isArchived;
}

function updateItem(e) {
  const id = e.target.parentNode.id;

  const clickedNote = notes[currentNote(id)];

  refs.notesForm[0].value = clickedNote.name;
  refs.notesForm[1].value = clickedNote.category;
  refs.notesForm[2].value = clickedNote.content;
  refs.notesForm.id = currentNote(id);
  refs.addNoteBtn.textContent = 'Update Note';

  openModal();
}

refs.notesTableBody.addEventListener('click', eventTargetCheck);
