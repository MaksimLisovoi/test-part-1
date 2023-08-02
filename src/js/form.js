import refs from './refs';
import { nanoid } from 'nanoid';
import { notes } from './dataForApp/notes';

refs.notesForm.addEventListener('submit', submitHandler);

const datesRegex = /\d{2}([\/.-])\d{2}\1\d{4}/g;

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
  //   formData.append('dates', content.match(datesRegex));

  content.match(datesRegex)
    ? formData.append('dates', content.match(datesRegex))
    : formData.append('dates', '');

  const dataObject = Object.fromEntries(formData.entries());

  console.log(dataObject);

  notes.push(dataObject);

  console.log(notes);

  //   try {
  //     notes.push(dataObject);
  //   } catch (error) {
  //     console.log(error);
  //     error.message();
  //   }
}
