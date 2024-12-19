/*
 ** comment : 팝업
 */
document.addEventListener('DOMContentLoaded', function () {
  // 팝업 열기
  const popupBtns = document.querySelectorAll('.btn-popup');
  if (popupBtns) {
    for (const popupBtn of popupBtns) {
      popupBtn.addEventListener('click', (event) => {
        popupOpen(event);
      });
    }
  }

  // 팝업 열기
  const toastPopupBtns = document.querySelectorAll('.btn-toast-popup');
  if (toastPopupBtns) {
    for (const toastPopupBtn of toastPopupBtns) {
      toastPopupBtn.addEventListener('click', (event) => {
        toastPopupOpen(event);
      });
    }
  }

  // 팝업 닫기
  const popupConts = document.querySelectorAll('.popup-container');
  if (popupConts) {
    for (const popupCont of popupConts) {
      // popupCont.style.display = 'none';
      popupCont.addEventListener('click', (event) => {
        const target = event.target;
        const targetId = target.closest('.popup-container').getAttribute('id');
        if (
          targetId !== 'popup-download' &&
          targetId !== 'popup-pdf-download' &&
          !target.closest('.btn-popup') &&
          !target.closest('.btn-toast-popup')
        ) {
          if (
            target.className.indexOf('btn-popup-close') > -1 ||
            target.className.indexOf('dim') > -1 ||
            (target.closest('.btn') && target.closest('.popup-bottom'))
          ) {
            popupClose(targetId);
          }
        }
      });
    }
  }
});

function popupOpen(event) {
  const target = event.target.closest('button');
  const popupId = target.getAttribute('data-popup');

  if (popupId) {
    const popupEle = document.getElementById(popupId);
    popupEle.style.display = 'block';
    popupEle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function popupClose(id) {
  document.getElementById(id).classList.remove('active');
  document.getElementById(id).style.display = 'none';

  const popupConts = document.querySelectorAll('.popup-container');
  let blockElementsCount = 0;
  for (let i = 0; i < popupConts.length; i++) {
    let element = popupConts[i];
    let computedStyle = window.getComputedStyle(element);

    if (computedStyle.display === 'block') {
      blockElementsCount++;
    }
  }

  if (blockElementsCount === 0) {
    document.body.removeAttribute('style');
  }
}

function toastPopupOpen(event) {
  const target = event.target.closest('button');
  const popupId = target.getAttribute('data-popup');

  if (popupId) {
    const popupEle = document.getElementById(popupId);
    popupEle.style.display = 'block';
    popupEle.classList.add('active');

    setTimeout(function () {
      popupEle.style.display = 'none';
      popupEle.classList.remove('active');
    }, 2000);
  }
}
