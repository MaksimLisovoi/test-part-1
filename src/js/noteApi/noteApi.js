import refs from '../refs';
import { refreshTable } from '../templates/tableRow';

function eventTargetCheck(e) {
  if (e.target.className === 'item') {
    updateItem(e);
    populateList();
  } else if (e.target.className === 'js-table-btn-del') {
    deleteNote(e);
    refreshTable();
  }
}

function deleteNote(e) {
  const text = e.target.parentNode.parentElement;

  console.dir(text);
  //   arrPos = listArr.indexOf(text);
  //   listArr.splice(arrPos, 1);
}

refs.notesTableBody.addEventListener('click', eventTargetCheck);
