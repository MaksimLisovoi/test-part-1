import refs from '../refs';
import { refreshTable } from '../templates/tableRow';
import { archiveTable } from '../templates/archivedTable';
import { notes, archiveNotes } from '../dataForApp/notes';
import { openModal } from '../notes-modal';

const currentNote = id => notes.indexOf(notes.find(note => String(note.id) === id));

function eventTargetCheck(e) {
  if (e.target.className === 'js-table-btn-update') {
    updateItem(e);
    refreshTable();
  } else if (e.target.closest('.js-table-btn-del')) {
    deleteNote(e);
    refreshTable();
    archiveTable();
  } else if (e.target.closest('.js-table-btn-archive')) {
    archiveNote(e);
    refreshTable();
    archiveTable();
  }
}

export function deleteNote(e) {
  const id = e.target.id;
  const note = notes.splice(currentNote(id), 1);
  return note;
}

function archiveNote(e) {
  const id = e.target.id;
  console.log(notes[currentNote(id)]);

  notes[currentNote(id)].isArchived = !notes[currentNote(id)].isArchived;
}

function updateItem(e) {
  const id = e.target.id;

  const clickedNote = notes[currentNote(id)];

  refs.notesForm[0].value = clickedNote.name;
  refs.notesForm[1].value = clickedNote.category;
  refs.notesForm[2].value = clickedNote.content;
  refs.notesForm.id = currentNote(id);
  openModal();
}

refs.notesTableBody.addEventListener('click', eventTargetCheck, false);
