import { notes } from '../dataForApp/notes';
import refs from '../refs';

export function archiveTable() {
  const notesAmount = notes.reduce((acc, note) => {
    return typeof acc[note.category] !== 'undefined'
      ? { ...acc, [note.category]: acc[note.category] + 1 }
      : { ...acc, [note.category]: 1 };
  }, {});

  const categories = Object.keys(notesAmount);

  refs.tableSummary.innerHTML = categories
    .map(category => {
      return `<tr class="table-notes__row">
                    <td class="table-notes__row--column"></td>
                    <td class="table-notes__row--column">${category}</td>
                    <td class="table-notes__row--column">${notesAmount[category]}</td>
                    <td class="table-notes__row--column"></td>
                  </tr>`;
    })
    .join('');
}

archiveTable();
