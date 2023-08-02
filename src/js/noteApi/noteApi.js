import refs from '../refs';
import { refreshTable } from '../templates/tableRow';
import { archiveTable } from '../templates/archivedTable';
import { notes, archiveNotes } from '../dataForApp/notes';

function eventTargetCheck(e) {
  if (e.target.className === 'item') {
    updateItem(e);
    refreshTable();
  } else if (e.target.closest('.js-table-btn-del')) {
    deleteNote(e);
    refreshTable();
    archiveTable();
  } else if (e.target.closest('.js-table-btn-archive')) {
    archiveNote(e);
    refreshTable();
    archiveTable;
  }
}

export function deleteNote(e) {
  const id = e.target.id;
  const note = notes.splice(notes.indexOf(notes.find(note => note.id === Number(id))), 1);
  return note;
}

function archiveNote(e) {
  const deletedNote = deleteNote(e);
  archiveNotes.push(...deletedNote);
  console.log(archiveNotes);
}

// function updateItem(e) {
//   id = e.target.parentNode.childNodes[1].innerHTML;

//   listArr[arrPosition(id)] = update;
// }

refs.notesTableBody.addEventListener('click', eventTargetCheck, false);
