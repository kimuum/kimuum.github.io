document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    scrollControl();
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis();
  moveHero();
  moveVisual();
  moveWork();
  moveContact();

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
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // header
  if (headerCont) {
    if (scrollTop > 0) {
      headerCont.classList.add('active');
    } else {
      headerCont.classList.remove('active');
    }
  }
}

/* HERO */
function moveHero() {
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

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        toggleActions: 'restart none restart none',
      },
    })
    .to('.hero-word', { opacity: 1, delay: 1, ease: 'power4.inOut', stagger: 0.16 })
    .to('.hero-bottom', { opacity: 1, y: -10, stagger: 0.16 });
}

/* WORK */
function moveWork() {
  let worksBox = gsap.utils.toArray('.work-list-box');

  const tl = gsap
    .timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.work-container',
        pin: true,
        scrub: 0.5,
        start: 'top-=25% top',
        end: '+=4000',
        // markers: true,
      },
    })
    .to(worksBox, {
      xPercent: -(100 * (worksBox.length - 1)),
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
        start: '+=3500',
        scrub: true,
        // markers: true,
      },
    });
  });
}

/* CONTACT */
function moveContact() {
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top-=20% top+=30%',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
    })
    .from('.contact-title', { yPercent: 100 })
    .from('.button-box', { yPercent: 100 });
}
