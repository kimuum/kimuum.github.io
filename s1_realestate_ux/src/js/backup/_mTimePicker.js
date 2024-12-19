// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
  // var datetime = new Date();
  // var hour = datetime.getHours();
  // var minute = datetime.getMinutes();

  // var ampm = 0;
  // if (hour == 0) {
  //   ampm = 1;
  // } else if (hour < 13) {
  //   ampm = 0;
  // } else {
  //   hour -= 12;
  //   ampm = 1;
  // }
  // hour = hour == 0 ? 12 : hour;

  var hours = new Swiper('.swiper-container.hours', {
    autoHeight: true,
    slidesPerView: 3,
    // initialSlide: hour - 1,
    initialSlide: 1,
    loopedSlides: 5,
    mousewheel: {
      invert: true,
      thresholdDelta: 0.5,
      releaseOnEdges: true,
    },
    // freeMode: {
    //   enabled: true,
    //   sticky: true,
    //   ModeMomentumRatio: 3,
    // },
    loop: true,
    lazy: true,
    direction: 'vertical',
    slideToClickedSlide: true,
    centeredSlides: true,
  });

  var minute = new Swiper('.swiper-container.minutes', {
    autoHeight: true,
    slidesPerView: 3,
    // initialSlide: minute - 1,
    initialSlide: 1,
    loopedSlides: 5,
    mousewheel: {
      invert: true,
      thresholdDelta: 0.5,
      releaseOnEdges: true,
    },
    loop: true,
    direction: 'vertical',
    slideToClickedSlide: true,
    centeredSlides: true,
  });

  var ampmSwiper = new Swiper('.swiper-container.ampms', {
    autoHeight: true,
    slidesPerView: 3,
    initialSlide: 0,
    // initialSlide: ampm,
    mousewheel: {
      invert: true,
      thresholdDelta: 0.5,
      releaseOnEdges: true,
    },
    loop: false,
    direction: 'vertical',
    slideToClickedSlide: true,
    centeredSlides: true,
  });

  const timepickerBoxes = document.querySelectorAll('.m-timepicker-box');

  timepickerBoxes.forEach((timepickerBox) => {
    const timeInput = timepickerBox.querySelector('.time-input');
    timeInput.addEventListener('click', function () {
      const timepicker = timepickerBox.querySelector('.timepicker');
      const isActive = timepicker.classList.contains('active');

      timepickerBoxes.forEach((box) => {
        const otherDropdown = box.querySelector('.timepicker');
        if (box !== timepickerBox && otherDropdown.classList.contains('active')) {
          otherDropdown.classList.remove('active');
        }
      });

      if (!isActive) {
        openTimepickerDropdown(timepickerBox);
      }
    });

    const timeConfirm = timepickerBox.querySelector('.btn-confirm');
    timeConfirm.addEventListener('click', function () {
      updateTimeDisplay(timepickerBox, timeInput);
    });

    const timePickerClose = timepickerBox.querySelector('.btn-timepicker-close');
    timePickerClose.addEventListener('click', function () {
      closeTimepickerDropdown(timepickerBox);
    });

    const timePickerCancel = timepickerBox.querySelector('.btn-cancel');
    timePickerCancel.addEventListener('click', function () {
      closeTimepickerDropdown(timepickerBox);
    });
  });

  function updateTimeDisplay(timepickerBox, inputElement) {
    const selectedAmpmElement = timepickerBox.querySelector('.ampm.swiper-slide-active');
    let selectedAmpm = null;
    const selectedHourElement = timepickerBox.querySelector('.hour.swiper-slide-active');
    let selectedHour = null;
    const selectedMinuteElement = timepickerBox.querySelector('.minute.swiper-slide-active');
    let selectedMinute = null;

    if (selectedAmpmElement) {
      selectedAmpm = selectedAmpmElement.textContent;
    } else {
      selectedAmpm = '오전';
    }

    if (selectedHourElement) {
      selectedHour = selectedHourElement.textContent;
    } else {
      selectedHour = '0';
    }

    if (selectedMinuteElement) {
      selectedMinute = selectedMinuteElement.textContent;
    } else {
      selectedMinute = '00';
    }

    if (selectedAmpm === '오전') {
      if (selectedHour === '12') {
        inputElement.value = '0' + ':' + selectedMinute;
      } else {
        inputElement.value = selectedHour + ':' + selectedMinute;
      }
    } else {
      if (selectedHour === '12') {
        inputElement.value = String(Number(selectedHour)) + ':' + selectedMinute;
      } else {
        inputElement.value = String(Number(selectedHour) + 12) + ':' + selectedMinute;
      }
    }

    closeTimepickerDropdown(timepickerBox);
  }

  function openTimepickerDropdown(timepickerBox) {
    const timepickerDropdown = timepickerBox.querySelector('.timepicker');
    if (timepickerDropdown.className.indexOf('active') === -1) {
      timepickerDropdown.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      return;
    }
  }

  function closeTimepickerDropdown(timepickerBox) {
    const timepickerDropdown = timepickerBox.querySelector('.timepicker');
    timepickerDropdown.classList.remove('active');
    document.body.removeAttribute('style');
  }
});
