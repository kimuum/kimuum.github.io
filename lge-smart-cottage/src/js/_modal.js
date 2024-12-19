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
            modalEl.classList.add('active');
            enableScrollLock();
          }
        });
      });

      btnClose.addEventListener('click', function () {
        dialog.classList.remove('active');
        disableScrollLock();
      });

      dialog.addEventListener('click', (e) => {
        if (e.target.nodeName === 'DIALOG') {
          dialog.classList.remove('active');
          disableScrollLock();
        }
      });
    }
  });
});

// 스크롤 잠금
const enableScrollLock = () => {
  const { body } = document;
  const wrapper = document.querySelector('.wrapper');

  if (!body.getAttribute('scrollY')) {
    const pageY = window.pageYOffset;

    body.setAttribute('scrollY', pageY.toString());

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.left = '0px';
    body.style.right = '0px';
    body.style.bottom = '0px';
    body.style.top = `-${pageY}px`;
    wrapper.style.overflow = 'visible';
  }
};

// 스크롤 잠금 해제
const disableScrollLock = () => {
  const { body } = document;
  const wrapper = document.querySelector('.wrapper');

  if (body.getAttribute('scrollY')) {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('left');
    body.style.removeProperty('right');
    body.style.removeProperty('bottom');
    wrapper.style.removeProperty('overflow');

    window.scrollTo(0, Number(body.getAttribute('scrollY')));

    body.removeAttribute('scrollY');
  }
};
