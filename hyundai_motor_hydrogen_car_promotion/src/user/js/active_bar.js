document.addEventListener("DOMContentLoaded", function() {
  const depth2 = document.querySelector('.header-center-inner.depth_02');
  if(depth2) {
    const headerContainer = document.querySelector('.header-container');
    const topNaviContainer = document.querySelector('.top-navigation-container');
    const pageLink = topNaviContainer.querySelectorAll('.page-link');
    const sectionContainer = document.querySelectorAll('.section-container:not(.not-active-bar)');
  
    let headerHeight = headerContainer.offsetHeight;
  
    pageLink.forEach((link, i) => {
      link.addEventListener('click', function(e) {
        const target = e.currentTarget;
        const index = getIndex(target);
        let headerHeight = headerContainer.offsetHeight;
  
        smoothScroll(sectionContainer[index], 500, headerHeight + 60);
      });
    });
  
    window.addEventListener('load', function (e) {
      setPosition();
    });
  
    window.addEventListener('scroll', function (e) {
      setPosition();
    });
  
  
    window.addEventListener('resize', function (e) {
      setPosition();
    });
  
    function setPosition() {
      const windowHeight = window.innerHeight; // 윈도우 높이
      let headerHeight = headerContainer.offsetHeight;
      let trigger = windowHeight; // 인터렉션 시작점
  
      if (sectionContainer) {
        sectionContainer.forEach((section, i) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionHeight = section.offsetHeight;
  
          const naviScrollLeft = topNaviContainer.scrollLeft;
          const naviWidth = topNaviContainer.offsetWidth;
          const linkLeft = pageLink[i].getBoundingClientRect().left;
          const linkWidth = pageLink[i].offsetWidth;
          const linkPosition = linkLeft + linkWidth;
  
          if (sectionTop < trigger && sectionTop + sectionHeight > trigger) {
            if(!section.classList.contains('over')) {
              section.classList.add('over');
              
              if(linkPosition > naviWidth) {
                topNaviContainer.scroll({
                  left: naviScrollLeft + (linkPosition - naviWidth) + 24,
                  behavior: 'smooth'
                });
              }
              else if(linkLeft < 20) {
                topNaviContainer.scroll({
                  left: naviScrollLeft + linkLeft - 20,
                  behavior: 'smooth'
                });
              }
            }
  
            pageLink.forEach((link, i) => {
              link.classList.remove('active');
            });
  
            pageLink[i].classList.add('active');
          }
          else {
            if(section.classList.contains('over')) {
              section.classList.remove('over');
            }
          }
        });
      }
    }
  }
});

// 스크롤 애니메이션 함수 //
function smoothScroll(target, duration, defaultTop) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - defaultTop;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, Math.floor(run));
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// 대상의 인덱스를 구하는 함수 //
function getIndex(option) {
  const parent = option.parentNode;
  let index = Array.prototype.indexOf.call(parent.children, option);

  return index;
}