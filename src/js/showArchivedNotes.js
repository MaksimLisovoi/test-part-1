import refs from './refs';
import { refreshTable } from './templates/commonTable';

refs.archiveBtn.addEventListener('click', archiveBtnClickHandler, false);

function archiveBtnClickHandler(e) {
  if (e.target.closest('.js-archive-btn')) {
    refs.archiveBtn.classList.toggle('is-clicked');
    refreshTable();
  }
}
