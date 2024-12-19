document.addEventListener('DOMContentLoaded', function () {
  const dialogs = document.querySelectorAll('.modal');
  const btnShows = document.querySelectorAll('.btn-modal');
  dialogs.forEach((dialog) => {
    const btnClose = dialog.querySelector('.btn-close');
    if (dialog) {
      btnShows.forEach((btnShow) => {
        btnShow.addEventListener('click', function () {
          const modalId = btnShow.getAttribute('data-modal');
          if (modalId) {
            const modalEl = document.getElementById(modalId);
            modalEl.showModal();
            document.body.style.overflow = 'hidden';
          }
        });
      });

      btnClose.addEventListener('click', function () {
        dialog.close();
        document.body.removeAttribute('style');
      });

      dialog.addEventListener('click', (e) => {
        if (e.target.nodeName === 'DIALOG') {
          dialog.close();
          document.body.removeAttribute('style');
        }
      });
    }
  });
});
