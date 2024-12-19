/****************** common 인터랙션 시작 */
/* counter */
function isInteger(number)  {
  return number % 1 === 0;
}
function counterMotion(number) {

  let snapData = 1;

  // 인터렉션 대상을 querySelectorAll로 여러 개 선택했을 경우 //
  if (typeof target === 'object' && target.constructor.name === 'NodeList') {
    number.forEach((element, i) => {
      if(!isInteger(element.textContent)) {
        snapData = 0.1;
      }
      
      let elementCount = gsap.from(element, {
        textContent: 0,
        duration: 1,
        ease: 'power1.in',
        snap: { textContent: snapData },
        scrollTrigger: {
          trigger: element,
          start: 'center 70%',
          end: 'center bottom',
          // markers: true,
          snap: {
            duration: 0.3,
            ease: 'power4.inOut',
          },
        },
        stagger: {
          each: 1.0,
          onUpdate: function () {
            this.targets()[0].innerHTML = numberWithCommas(this.targets()[0].textContent);
          },
        },
      });
    });
  } else {
    if(!isInteger(number.textContent)) {
      snapData = 0.1;
    }

    let elementCount = gsap.from(number, {
      textContent: 0,
      duration: 1,
      ease: 'power1.in',
      snap: { textContent: snapData },
      scrollTrigger: {
        trigger: number,
        start: 'center 70%',
        end: 'center bottom',
        // markers: true,
        snap: {
          duration: 0.3,
          ease: 'power4.inOut',
        },
      },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML = numberWithCommas(this.targets()[0].textContent);
        },
      },
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
/****************** common 인터랙션 끝 */
