import { notes, archiveNotes } from '../dataForApp/notes';
import refs from '../refs';

export function archiveTable() {
  const notesAmount = notes.reduce((acc, note) => {
    return {
      ...acc,
      active: note.isArchived
        ? { ...acc.active, [note.category]: acc?.active?.[note.category] || 0 }
        : { ...acc.active, [note.category]: (acc?.active?.[note.category] || 0) + 1 },
      archived: !note.isArchived
        ? { ...acc.archived, [note.category]: acc?.archived?.[note.category] || 0 }
        : { ...acc.archived, [note.category]: (acc?.archived?.[note.category] || 0) + 1 },
    };
  }, {});

  const allCategories = { ...notesAmount.active, ...notesAmount.isArchived };

  refs.tableSummary.innerHTML = Object.keys(allCategories)
    .map(category => {
      return `<tr class="table-notes__row">
                    <td class="table-notes__row--column"></td>
                    <td class="table-notes__row--column">${category}</td>
                    <td class="table-notes__row--column">${notesAmount.active[category] || 0}</td>
                    <td class="table-notes__row--column">${notesAmount.archived[category] || 0}</td>
                  </tr>`;
    })
    .join('');
}

archiveTable();
