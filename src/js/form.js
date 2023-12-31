import refs from './refs';
import { nanoid } from 'nanoid';
import { notes } from './dataForApp/notes';
import { refreshTable } from './templates/commonTable';
import { archiveTable } from './templates/archivedTable';
import { datesRegex } from './regexes';
import { closeModal } from './notes-modal';

refs.notesForm.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const formData = new FormData(refs.notesForm);
  const content = formData.get('content');

  const createdDate = new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  formData.append('created', createdDate);
  formData.append('id', nanoid());

  content.match(datesRegex)
    ? formData.append('dates', content.match(datesRegex))
    : formData.append('dates', '');

  const dataObject = Object.fromEntries(formData.entries());
  dataObject.isArchived = false;

  const currentNote = notes[refs.notesForm.id];

  const refreshPage = () => {
    refreshTable();
    archiveTable();
    closeModal();
  };

  try {
    if (currentNote) {
      currentNote.name = dataObject.name;
      currentNote.category = dataObject.category;
      currentNote.content = dataObject.content;

      refreshPage();
      return;
    }
    notes.push(dataObject);
    refreshPage();
  } catch (error) {
    console.log(error);
  }
}
