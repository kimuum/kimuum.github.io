function parallax(target) {
  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    target.forEach((element, i) => {
      let parallax = gsap.to(element, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          markers: true,
          scrub: true,
        },
      });
    });
  }
  // 인터렉션 대상을 querySelector로 하나만 선택했을 경우 //
  else {
    let parallax = gsap.to(target, {
      backgroundPosition: '50% 100%',
      ease: 'none', // 움직임의 이질감을 줄이기 위해 ease를 설정합니다.
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        scrub: true,
      },
    });
  }
}

function slideUp(target) {
  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    target.forEach((element, i) => {
      let elementSlideUp = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: '0 70%',
          end: '10% bottom',
          // markers: true,
          snap: {
            duration: 0.25,
            ease: 'power4.inOut',
          },
        },
      });
      // elementSlideUp.from(element, { y: 50, opacity: 0 });
      elementSlideUp.from(element, { y: 50, opacity: 0 });
    });
  }
  // 인터렉션 대상을 querySelector로 하나만 선택했을 경우 //
  else {
    let elementSlideUp = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: '0 70%',
        end: '10% bottom',
        // markers: true,
        snap: {
          duration: 0.25,
          ease: 'power4.inOut',
        },
      },
    });
    elementSlideUp.from(target, { y: 50, opacity: 0 });
  }
}

function slideDown(target) {
  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    target.forEach((element, i) => {
      let elementSlideDown = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: '0 70%',
          end: '10% bottom',
          // markers: true,
          snap: {
            duration: 0.25,
            ease: 'power4.inOut',
          },
        },
      });
      elementSlideDown.from(element, { y: -50, opacity: 0 });
    });
  }
  // 인터렉션 대상을 querySelector로 하나만 선택했을 경우 //
  else {
    let elementSlideDown = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: '0 70%',
        end: '10% bottom',
        // markers: true,
        snap: {
          duration: 0.25,
          ease: 'power4.inOut',
        },
      },
    });
    elementSlideDown.from(target, { y: -50, opacity: 0 });
  }
}

function slideLeft(target) {
  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    target.forEach((element, i) => {
      let elementSlideRIght = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: '0 70%',
          end: '10% bottom',
          // markers: true,
          snap: {
            snapTo: 'careersBoardTable',
            ease: 'power4.inOut',
          },
        },
      });
      elementSlideRIght.from(element, { x: -50, opacity: 0 });
    });
  }
  // 인터렉션 대상을 querySelector로 하나만 선택했을 경우 //
  else {
    let elementSlideRIght = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: '0 70%',
        end: '10% bottom',
        // markers: true,
        snap: {
          snapTo: 'careersBoardTable',
          ease: 'power4.inOut',
        },
      },
    });
    elementSlideRIght.from(target, { x: -50, opacity: 0 });
  }
}

function slideRight(target) {
  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    target.forEach((element, i) => {
      let elementSlideRIght = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: '0 70%',
          end: '10% bottom',
          // markers: true,
          snap: {
            snapTo: 'careersBoardTable',
            ease: 'power4.inOut',
          },
        },
      });
      elementSlideRIght.from(element, { x: 50, opacity: 0 });
    });
  }
  // 인터렉션 대상을 querySelector로 하나만 선택했을 경우 //
  else {
    let elementSlideRIght = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: '0 70%',
        end: '10% bottom',
        // markers: true,
        snap: {
          snapTo: 'careersBoardTable',
          ease: 'power4.inOut',
        },
      },
    });
    elementSlideRIght.from(target, { x: 50, opacity: 0 });
  }
}

function slideVisual(target) {
  if ($(target)) {
    let subVisual = gsap.timeline({
      duration: 0.5,
      ease: 'power4.inOut',
    });
    subVisual.addLabel('subVisual').fromTo(target, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
  }
}
function slideVisualBorad(target) {
  if ($(target)) {
    let subVisual = gsap.timeline({
      duration: 0.5,
      ease: 'power4.inOut',
    });
    subVisual
      .addLabel('subVisual')
      .from('.visual-top-area', { y: 10, opacity: 0, duration: 0.3 })
      .from('.swiper-img-box', { y: 10, opacity: 0, duration: 0.3 })
      .from('.swiper-content-box', { y: 10, opacity: 0, duration: 0.3 });
  }
}

// element observe
(function () {
  function hasClass(el, cls) {
    if (el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
      return true;
    }
  }

  function addClass(el, cls) {
    if (!el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
      el.className += ' ' + cls;
    }
  }

  function delClass(el, cls) {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
  }

  function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
        elemLength = elem.length, distTop, distPercent, distPixels, distUnit, i;
    for (i = 0; i < elemLength; ++i) {
      distTop = elem[i].getBoundingClientRect().top;
      distPercent = Math.round((distTop / winY) * 100);
      distPixels = Math.round(distTop);
      distUnit = unit == 'percent' ? distPercent : distPixels;
      if (distUnit <= distanceFromTop) {
        if (!hasClass(elem[i], classToAdd)) {
          addClass(elem[i], classToAdd);
        }
      } else {
        // delClass(elem[i], classToAdd);
      }
    }
  }

  // params: element, classes to add, distance from top, unit ('percent' or 'pixels')

  window.addEventListener('scroll', function () {
    elementFromTop(document.querySelectorAll('.scroll-ani'), 'on', 80, 'percent');
  }, false);

  window.addEventListener('resize', function () {
    elementFromTop(document.querySelectorAll('.scroll-ani'), 'on', 80, 'percent');
  }, false);
})();