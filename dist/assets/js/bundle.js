document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  moveHero();
  moveVisual();
  moveWork();

  /* lenis 스크롤 효과 */
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});

/* HERO */
function moveHero() {
  const heroBox = document.querySelectorAll('.hero-box');
  heroBox.forEach((item) => {
    gsap.to(item, {
      y: '100%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: item,
        start: () => 'top top+=' + item.getBoundingClientRect().top,
        end: 'top top',
        scrub: !0,
        // markers: true,
      },
    });
  });

  gsap.to('.hero-word', {
    opacity: 1,
    delay: 1,
    ease: 'power4.inOut',
    stagger: 0.16,
  });
}
/* WORK */
function moveWork() {
  const worskBox = document.querySelectorAll('.work-box svg:not(:first-of-type)');
  worskBox.forEach(function (item, i) {
    var layer = item.getBoundingClientRect();
    gsap.to(item, {
      x: function x() {
        return -(layer.width * i);
      },
      opacity: '0.5',
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: '+=300%',
        scrub: true,
        markers: true,
      },
    });
  });

  const swiperWork = new Swiper('.work-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    allowTouchMove: true,
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
/* VISUAL */
function moveVisual() {
  const visualWord = document.querySelectorAll('.visual-word');
  visualWord.forEach(function (item) {
    gsap.to(item, {
      opacity: '1',
      scrollTrigger: {
        trigger: item,
        start: '-=400%',
        end: 'bottom center',
        scrub: true,
        // markers: true,
      },
    });
  });
}
