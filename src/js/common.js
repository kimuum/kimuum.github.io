document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin();
  const heroBox = document.querySelectorAll('.hero-box');

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

  /* gsap */
  gsap.to('.hero-word', {
    opacity: 1,
    delay: 1,
    ease: 'power4.inOut',
    stagger: 0.16,
  });
  heroBox.forEach((el) => {
    gsap.to(el, {
      y: '100%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: el,
        start: () => 'top top+=' + el.getBoundingClientRect().top,
        end: 'top top',
        scrub: !0,
        markers: true,
      },
    });
    console.log(el.getBoundingClientRect().top);
  });
});
