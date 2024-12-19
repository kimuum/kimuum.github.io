document.addEventListener('DOMContentLoaded', function () {
  const headerCont = document.querySelector('.header-container');
  const btnMenu = document.querySelector('.btn-menu');
  const menuCont = document.querySelector('.menu-container');

  if (!menuCont) return;

  const menuDim = menuCont.querySelector('.dim');

  btnMenu.addEventListener('click', function (e) {
    if (btnMenu.classList.contains('active')) {
      toggleMenu(false);
    } else {
      toggleMenu(true);
    }
  });

  menuDim.addEventListener('click', function (e) {
    toggleMenu(false);
  });

  function toggleMenu(bool) {
    if (bool) {
      btnMenu.classList.add('active');
      menuCont.classList.add('active');
      headerCont.classList.add('menu-open');
    } else {
      btnMenu.classList.remove('active');
      menuCont.classList.remove('active');
      headerCont.classList.remove('menu-open');
    }
  }

  const subMenuLists = document.querySelectorAll('.menu-sub-link');
  subMenuLists.forEach((subMenuList) => {
    subMenuList.addEventListener('mouseover', function (e) {
      const parent = e.target.closest('.menu-list');
      const parentMenuLink = parent.querySelector('.menu-link');
      parentMenuLink.classList.add('hover');
    });

    subMenuList.addEventListener('mouseout', function (e) {
      const parent = e.target.closest('.menu-list');
      const parentMenuLink = parent.querySelector('.menu-link');
      parentMenuLink.classList.remove('hover');
    });
  });
});
