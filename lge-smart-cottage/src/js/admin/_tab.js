document.addEventListener('DOMContentLoaded', function () {
  const tabLists = document.querySelectorAll('.tab-list');
  const tabContents = document.querySelectorAll('.tab-content-box');
  const modalButtonBox = document.querySelector('.modal-button-box');

  tabLists.forEach((tabList, key) => {
    tabList.addEventListener('click', function (e) {
      const target = e.target;

      tabLists.forEach((list) => {
        list.querySelector('.btn-tab').classList.remove('active');
      });

      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      target.classList.add('active');
      tabContents[key].classList.add('active');

      if (key === 1) {
        modalButtonBox.querySelector('.btn').textContent = '저장';
        modalButtonBox.querySelector('.btn').classList.add('btn-save');
        modalButtonBox.querySelector('.btn').classList.remove('btn-confirm');
      } else {
        modalButtonBox.querySelector('.btn').textContent = '확인';
        modalButtonBox.querySelector('.btn').classList.add('btn-confirm');
        modalButtonBox.querySelector('.btn').classList.remove('btn-save');
      }
    });
  });
});
