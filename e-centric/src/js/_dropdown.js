// dropdown.js
document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  dropdownContainers.forEach((dropdownContainer) => {
    const dropdownButton = dropdownContainer.querySelector('.btn-dropdown');
    const dropdownMenu = dropdownContainer.querySelector('.dropdown-list-box');

    dropdownButton.addEventListener('click', function (e) {
      const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';

      dropdownButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
      const target = e.target;
      const listCont = target.closest('.dropdown-box').querySelector('.dropdown-list-container');
      const clientRect = target.getBoundingClientRect();
      const listContPosX = clientRect.left;
      const listContPosY = clientRect.top;
      const activeList = listCont.querySelector('.btn-dropdown-list[aria-pressed="true"]');
      console.log(activeList);

      if (dropdownContainer.className.indexOf('show') > -1) {
        dropdownContainer.classList.remove('show');
        listCont.removeAttribute('style');
        listCont.close();
      } else {
        dropdownContainer.classList.add('show');
        listCont.style.cssText = `width: ${target.clientWidth}px; top: ${listContPosY + target.clientHeight + 8}px; left: ${listContPosX}px;`;
        setTimeout(() => {
          listCont.showModal();
          if (activeList) {
            activeList.focus();
          } else {
            listCont.querySelectorAll('.dropdown-list')[0].querySelector('.btn-dropdown-list');
          }
        }, 0);
      }
    });

    document.addEventListener('click', function (event) {
      const target = event.target;
      if (!dropdownContainer.contains(target)) {
        // 클릭된 요소가 드롭다운 컨테이너 내부 요소가 아니라면 드롭다운을 닫는다.
        dropdownButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.setAttribute('aria-hidden', 'true');
        dropdownContainer.classList.remove('show');
        dropdownContainer.querySelector('.dropdown-list-container').close();
        dropdownContainer.querySelector('.dropdown-list-container').removeAttribute('style');
      }
    });

    // 드롭다운 버튼 포커스 아웃 이벤트 처리
    dropdownButton.addEventListener('blur', function () {
      setTimeout(function () {
        if (!dropdownContainer.contains(document.activeElement)) {
          // 포커스가 드롭다운 컨테이너 내부로 돌아가지 않으면 드롭다운을 닫는다.
          dropdownButton.setAttribute('aria-expanded', 'false');
          dropdownMenu.setAttribute('aria-hidden', 'true');
          dropdownContainer.classList.remove('show');
          console.log(dropdownContainer.querySelector('.dropdown-list-container'));
          dropdownContainer.querySelector('.dropdown-list-container').close();
          dropdownContainer.querySelector('.dropdown-list-container').removeAttribute('style');
        }
      }, 0);
    });
  });
});
