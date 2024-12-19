document.addEventListener('DOMContentLoaded', function (event) {
  const menuBtns = document.querySelectorAll('.btn-menu');
  
  if(menuBtns) {
    for (const menuBtn of menuBtns) {
      menuBtn.addEventListener('click', function (event) {
        const target = event.target;
        const targetName = target.className;
        const menuCont = target.closest('.header-container').querySelector('.menu-container');
        if(targetName.indexOf('active') > -1) {
          target.classList.remove('active');
          menuCont.classList.remove('active');
          document.body.removeAttribute('style');
        } else {
          target.classList.add('active');
          menuCont.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    }
  }

  const menuLists = document.querySelectorAll('.menu-list');
  for (const menuList of menuLists) {
    menuList.addEventListener('click', function (event) {
      const target = event.target;
      const targetName = target.className;
      const currentTarget = event.currentTarget;

      menuLists.forEach(function (menuList) {
        if(menuList !== currentTarget) {
          menuList.classList.remove('active');
        }
      });

      if(targetName.indexOf('name') > -1) {
        if(currentTarget.className.indexOf('active') > 1) {
          currentTarget.classList.remove('active');
        } else {
          currentTarget.classList.add('active');
        }
      }
    });
  }

  const menuCloseBtns = document.querySelectorAll('.btn-menu-close');
  if(menuCloseBtns) {
    for (const menuCloseBtn of menuCloseBtns) {
      menuCloseBtn.addEventListener('click', function (event) {
        event.target.closest('.header-container').querySelector('.btn-menu').classList.remove('active');
        event.target.closest('.header-container').querySelector('.menu-container').classList.remove('active');
        document.body.removeAttribute('style');
      });
    }
  }
});