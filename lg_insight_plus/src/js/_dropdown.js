document.addEventListener('DOMContentLoaded', function () {
  const addClickEvent = (elements, callback) => {
    elements.forEach(function (item) {
      item.addEventListener('click', callback);
    });
  };

  const btntDetailOpen = document.querySelectorAll('.btn-detail-open');
  const btnDropdown = document.querySelectorAll('.btn-dropdown');
  const btnArrow = document.querySelectorAll('.btn-arrow');
  const btnOpen = document.querySelectorAll('.btn-open');

  // 통합검색
  addClickEvent(btntDetailOpen, totalSearchOpen);

  // 기본 드롭다운
  addClickEvent(btnDropdown, dropdown);

  // 첨부파일 영역
  addClickEvent(btnArrow, dropdown);

  // 푸터 > 패밀리 사이트 영역
  addClickEvent(btnOpen, dropdown);

  window.addEventListener('click', dropdownClose);
});

// 통합검색
function totalSearchOpen(event) {
  const target = event.target;
  const totalSearchContainer = target.closest('.total-search-container');
  totalSearchContainer.classList.toggle('active');
}

// 드롭다운
function dropdown(event) {
  const target = event.target;
  const toggleActiveClass = (element) => element.classList.toggle('active');

  const dropdownContainer = target.closest('.dropdown-container');
  const attachmentArea = target.closest('.attachment-area');
  const familySitBox = target.closest('.family-site-box');

  // 기본 드롭다운
  if (dropdownContainer) {
    toggleActiveClass(dropdownContainer);
  }

  // 첨부파일 영역
  if (attachmentArea) {
    toggleActiveClass(attachmentArea);
  }

  // 푸터 > 패밀리 사이트 영역
  if (familySitBox) {
    toggleActiveClass(familySitBox);
  }
}

function dropdownClose(event) {
  const target = event.target;
  const dropdownContainer = target.closest('.dropdown-container');
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  dropdownContainers.forEach(function (wrap) {
    // 자신 외 영역/영역 외 클릭 닫기
    if (dropdownContainer !== wrap) {
      wrap.classList.remove('active');
    }
  });
}
