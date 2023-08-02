import { notes } from '../dataForApp/notes';
import refs from '../refs';

refreshTable();

export function refreshTable() {
  if (!notes) {
    return;
  }

  refs.notesTableBody.innerHTML = notes
    .map(note => {
      const { name, icon, created, category, content } = note;
      const contentCheck = content.length > 20 ? content.slice(0, 20) + '...' : content;
      const datesCheck = note.dates ? note.dates : '';

      return `<tr class="table-notes__row">
                    <td class="table-notes__row--column"></td>
                    <td class="table-notes__row--column ">${name}</td>
                    <td class="table-notes__row--column">${created}</td>
                    <td class="table-notes__row--column">${category}</td>
                    <td class="table-notes__row--column">${contentCheck}</td>
                    <td class="table-notes__row--column">${datesCheck}</td>
                    <td>
                        <div class='table-notes__btn-block'>
                          <button class="js-table-btn-update">Change</button>
                          <button class="js-table-btn-del">Delete</button>
                          <button class="js-table-btn-archive">Archive</button>
                        </div>
                      </td>

                  </tr>`;
    })
    .join('');
}
