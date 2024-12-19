document.addEventListener('DOMContentLoaded', function () {
  gsap.config({ nullTargetWarn: false, trialWarn: false, });
  gsap.set('.null', {opacity: 1})
  gsap.registerPlugin(ScrollTrigger);
  // Lazy loader
  var ll = new LazyLoad({
    //
  });

  // 작은 해상도에서 Document scale 줄이기
  const defaultWidth = 375;
  const defaultFontSize = 10;
  let windowWidth = window.window.innerWidth;

  if(windowWidth < 360) {
      document.documentElement.style.fontSize = `${defaultFontSize * getScaleRatio(windowWidth, defaultWidth)}px`;
      document.body.style.fontSize = `${defaultFontSize * getScaleRatio(windowWidth, defaultWidth)}px`;
  } else {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');
  }
  /*230925 수정사항 : fold 대응*/
  window.addEventListener('resize', function() {
    windowWidth = window.window.innerWidth;
    if(windowWidth < 360) {
      document.documentElement.style.fontSize = `${defaultFontSize * getScaleRatio(windowWidth, defaultWidth)}px`;
      document.body.style.fontSize = `${defaultFontSize * getScaleRatio(windowWidth, defaultWidth)}px`;
  } else {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');
  }
  });

  // top button
  const topButton = document.querySelector('.go-to-top-box');

  document.addEventListener('scroll', function() {  
    if(topButton) {
      if(window.scrollY > 0) {
        topButton.style.display = 'block';
      } else {
        topButton.style.display = 'none';
      }

      if(checkVisible('.footer-container')) {
        topButton.classList.add('off');
      } else {
        topButton.classList.remove('off');
      }
    }
  });
});

function getScaleRatio(pram1, pram2) {
  let ratio = pram1 / pram2;

  if(ratio > 1.6) {
    ratio = 1.6;
  }

  return ratio;
}


function checkVisible(elm) {
  var viewportHeight = window.innerHeight, // Viewport Height
  elm = document.querySelector(elm),
  scrolltop = window.scrollY, // Scroll Top
  y = elm.offsetTop,
  elementHeight = elm.clientHeight;
  
  return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
}