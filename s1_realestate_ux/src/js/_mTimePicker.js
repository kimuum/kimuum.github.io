// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
  var datetime = new Date();
  var hour = datetime.getHours();
  var minute = datetime.getMinutes();

  var ampm = 0;
  if (hour == 0) {
    ampm = 1;
  } else if (hour < 13) {
    ampm = 0;
  } else {
    hour -= 12;
    ampm = 1;
  }
  hour = hour == 0 ? 12 : hour;

  var defaults = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    freeMode: {
      enabled: true,
      sticky: true,
      minimumVelocity: 0.5,
      momentumBounce: 0.01,
      momentumVelocityRatio: 0.01,
    },
    loop: true,
    loopAdditionalSlides: 5,
    direction: 'vertical',
    slideToClickedSlide: true,
    centeredSlides: true,
  };

  var hours = new Swiper('.swiper-container.hours', {
    ...defaults,
    initialSlide: hour - 1,
  });

  var minutes = new Swiper('.swiper-container.minutes', {
    ...defaults,
    initialSlide: minute,
  });

  var ampmSwiper = new Swiper('.swiper-container.ampms', {
    autoHeight: true,
    slidesPerView: 3,
    initialSlide: ampm,
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
