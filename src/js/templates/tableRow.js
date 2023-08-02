import { notes } from '../dataForApp/notes';
import refs from '../refs';

const tableRowMarkup = createTableRow(notes);

refs.table.insertAdjacentHTML('beforeend', tableRowMarkup);

function createTableRow(notes) {
  if (!notes) {
    return;
  }

  return notes
    .map(note => {
      const { name, icon, created, category, content } = note;
      const contentCheck = content.length > 20 ? content.slice(0, 20) + '...' : content;
      const datesCheck = note.dates ? note.dates : '';

      return `<tr class="table-notes__row">
                    <td class="table-notes__row--column">${icon}</td>
                    <td class="table-notes__row--column ">${name}</td>
                    <td class="table-notes__row--column">${created}</td>
                    <td class="table-notes__row--column">${category}</td>
                    <td class="table-notes__row--column">${contentCheck}</td>
                    <td class="table-notes__row--column">${datesCheck}</td>
                  
                  </tr>`;
    })
    .join('');
}
