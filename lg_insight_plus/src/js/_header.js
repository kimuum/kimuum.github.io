document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.querySelector('.header-container');
  const mainDepth = document.querySelectorAll('.gnb-list');
  const btnSearch = headerContainer.querySelector('.btn-search');
  const btnClose = headerContainer.querySelector('.btn-close');
  const subDepthBg = headerContainer.querySelector('.bg');
  const dim = headerContainer.querySelector('.dim');

  const toggleClasses = (element, addClass, removeClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
  };

  const gnbController = {
    // menu mouseenter
    menuEnter: function (event) {
      const target = event.currentTarget;
      const subDepth = target.querySelector('.sub-depth-area');

      mainDepth.forEach((depth01) => {
        toggleClasses(depth01, 'inactive', 'active');
        if (!target.classList.contains('active')) {
          toggleClasses(target, 'active', 'inactive');
          subDepthBg.style.display = 'block';
        } else if (!subDepth) {
          subDepthBg.style.display = 'none';
        }
      });
    },

    // menu mouseleave
    menuLeave: function () {
      mainDepth.forEach((depth01) => toggleClasses(depth01, 'inactive', 'active'));
      subDepthBg.style.display = 'none';
    },
  };

  const searchController = {
    // 검색영역 열기
    searchOpen: function () {
      const headerSearch = this.closest('.header-search');

      headerSearch.classList.add('active');
      dim.style.display = 'block';
      document.body.style.overflow = 'hidden';
    },

    // 검색영역 닫기
    searchClose: function () {
      const headerSearch = this.closest('.header-search');

      headerSearch.classList.remove('active');
      dim.style.display = 'none';
      document.body.style.overflow = 'initial';
    },
  };

  mainDepth.forEach((item) => item.addEventListener('mouseenter', gnbController.menuEnter));
  headerContainer.addEventListener('mouseleave', gnbController.menuLeave);

  btnSearch.addEventListener('click', searchController.searchOpen);
  btnClose.addEventListener('click', searchController.searchClose);
});
