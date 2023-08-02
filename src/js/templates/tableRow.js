import { notes } from '../dataForApp/notes';
import refs from '../refs';
import { deleteNote } from '../noteApi/noteApi';

refreshTable();

export function refreshTable() {
  if (!notes) {
    return;
  }

  refs.notesTableBody.innerHTML = notes
    .map(note => {
      const { id, name, icon, created, category, content } = note;
      const contentCheck = content.length > 20 ? content.slice(0, 20) + '...' : content;
      const datesCheck = note.dates ? note.dates : '';

      return `<tr class="table-notes__row" >
                    <td class="table-notes__row--column"><span class="table-notes__id" >${id}<span/></td>
                    <td class="table-notes__row--column ">${name}</td>
                    <td class="table-notes__row--column">${created}</td>
                    <td class="table-notes__row--column">${category}</td>
                    <td class="table-notes__row--column">${contentCheck}</td>
                    <td class="table-notes__row--column">${datesCheck}</td>
                    <td>
                        <div class='table-notes__btn-block'>
                          <button class="js-table-btn-update"><svg class="table-notes__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>
                          <button id="${id}"class="js-table-btn-del"><svg class="table-notes__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i></button>
                          <button class="js-table-btn-archive"><svg class="table-notes__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg></button>
                        </div>
                      </td>

                  </tr>`;
    })
    .join('');
}
