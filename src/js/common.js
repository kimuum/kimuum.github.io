document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    scrollControl();
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis();
  moveHero();
  moveVisual();

  // topbutton
  const topButton = document.querySelector('.btn-top');
  if (topButton) {
    topButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

function lenis() {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

/* SCROLL */
function scrollControl() {
  const headerCont = document.querySelector('.header-container');
  const worksCont = document.querySelector('.work-container');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const worksTop = worksCont.getBoundingClientRect().top;
  const offset = scrollTop - worksTop;

  // header
  if (headerCont) {
    if (scrollTop > 0) {
      headerCont.classList.add('active');
    } else {
      headerCont.classList.remove('active');
    }
  }

  // work
  if (worksCont) {
    if (scrollTop > worksTop) {
      this.document.querySelector('.work-list-area').style.left = -offset + 'px';
    }
  }
}

/* HERO */
function moveHero() {
  gsap.to('.hero-word', {
    opacity: 1,
    delay: 1,
    ease: 'power4.inOut',
    stagger: 0.16,
  });

  const heroBox = document.querySelectorAll('.hero-inner');
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
