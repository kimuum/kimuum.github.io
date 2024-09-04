document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const body = document.body;
  if (body.classList.contains('main-page')) {
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
  }
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
function moveWork() {
  const worksBox = document.querySelectorAll('.work-list-box');

  ScrollTrigger.matchMedia({
    '(min-width: 1025px)': function () {
      worksBox.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
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
    '(max-width: 1024px)': function () {
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

  visualWord.forEach((item) => {
    gsap.to(item, {
      opacity: '1',
      scrollTrigger: {
        trigger: item,
        start: 'top center+=100',
        end: 'bottom center+=100',
        scrub: 1,
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
        start: 'top-=100 bottom',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
    })
    .from('.contact-container .contact-title', { yPercent: 100 })
    .from('.contact-container .button-box', { yPercent: 50 });
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
