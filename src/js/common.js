document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  window.addEventListener('scroll', function () {
    scrollControl();
  });

  moveHero();
  moveVisual();
  moveWork();
  moveContact();
  getClock();
  setInterval(getClock, 1000);
  navigator.geolocation.getCurrentPosition(onGeoOk);

  // top 버튼 클릭시 상단 이동
  const topButton = document.querySelector('.btn-top');
  if (topButton) {
    topButton.addEventListener('click', function () {
      lenis.scrollTo(0);
    });
  }

  // gnb 클릭시 영역이동
  const gnbList = document.querySelectorAll('.gnb-list');
  gnbList.forEach((item) => {
    item.addEventListener('click', function () {
      id = this.dataset.id;
      lenis.scrollTo(id);
    });
  });
});
/* SCROLL */
function scrollControl() {
  const headerCont = document.querySelector('.header-container');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // header
  if (headerCont) {
    if (scrollTop > 0) {
      headerCont.classList.add('scroll');
    } else {
      headerCont.classList.remove('scroll');
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
function moveWork(e) {
  const worksBox = document.querySelectorAll('.work-list-box');

  ScrollTrigger.matchMedia({
    '(min-width: 1001px)': function () {
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
        .to('.work-list-box', {
          xPercent: -(100 * (worksBox.length - 1)),
        });
    },
    '(max-width: 1000px)': function () {
      worksBox.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
              scrub: 1,
              // markers: true,
            },
          },
        );
      });
    },
  });

  window.addEventListener('resize', ScrollTrigger.update);
}

/* VISUAL */
function moveVisual() {
  const visualWord = document.querySelectorAll('.visual-word');

  ScrollTrigger.matchMedia({
    '(min-width: 1001px)': function () {
      visualWord.forEach((item) => {
        gsap.to(item, {
          opacity: '1',
          scrollTrigger: {
            trigger: item,
            start: 'top+=4000 center',
            end: 'top+=3000 center',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    '(max-width: 1000px)': function () {
      visualWord.forEach((item) => {
        gsap.to(item, {
          opacity: '1',
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: 'top center',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
  });
  window.addEventListener('resize', ScrollTrigger.update);
}

/* CONTACT */
function moveContact() {
  ScrollTrigger.matchMedia({
    '(min-width: 721px)': function () {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.contact-container',
            start: 'top-=10 center',
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        })
        .from('.contact-bottom .contact-title', { yPercent: 50 })
        .from('.contact-bottom .button-box', { yPercent: 10 });
    },
    '(max-width: 720px)': function () {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.contact-container',
            start: 'top-=100 center+=50',
            bottom: 'top center',
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        })
        .from('.contact-bottom .contact-title', { yPercent: 50 })
        .from('.contact-bottom .button-box', { yPercent: 10 });
    },
  });
  window.addEventListener('resize', ScrollTrigger.update);
}

/* 현재시간 */
function getClock() {
  const currentInfo = document.querySelector('.header-current-info .time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  currentInfo.innerText = `${hours}:${minutes}`;
}

/* 위치 및 날씨 */
function onGeoOk(position) {
  const API_KEY = 'd040b02e0ede83a1a254be0ca469cdd2';
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('.header-current-info .location');
      const weather = document.querySelector('.header-current-info .weather');

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
