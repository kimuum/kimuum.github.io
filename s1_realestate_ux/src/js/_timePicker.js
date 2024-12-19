// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
  const timepickerBoxes = document.querySelectorAll('.timepicker-box');

  function updateTimeDisplay(inputElement) {
    const timepickerDropdown = inputElement.closest('.timepicker-box').querySelector('.timepicker-dropdown');
    const selectedAmpmElement = timepickerDropdown.querySelector('.ampm.active');
    let selectedAmpm = null;
    const selectedHourElement = timepickerDropdown.querySelector('.hour.active');
    let selectedHour = null;
    const selectedMinuteElement = timepickerDropdown.querySelector('.minute.active');
    let selectedMinute = null;

    if (selectedAmpmElement) {
      selectedAmpm = selectedAmpmElement.textContent;
    } else {
      selectedAmpm = '오전';
      timepickerDropdown.getElementsByClassName('ampm')[0].classList.add('active');
    }

    if (selectedHourElement) {
      selectedHour = selectedHourElement.textContent;
    } else {
      selectedHour = '00';
      timepickerDropdown.getElementsByClassName('hour')[0].classList.add('active');
    }

    if (selectedMinuteElement) {
      selectedMinute = selectedMinuteElement.textContent;
    } else {
      selectedMinute = '00';
      timepickerDropdown.getElementsByClassName('minute')[0].classList.add('active');
    }

    if (selectedAmpm === '오전') {
      inputElement.value = selectedHour + ':' + selectedMinute;
    } else {
      inputElement.value = String(Number(selectedHour) + 12) + ':' + selectedMinute;
    }
  }

  function clearActiveButtons(buttons) {
    buttons.forEach((button) => button.classList.remove('active'));
  }

  function toggleTimepickerDropdown(timepickerBox) {
    const timepickerDropdown = timepickerBox.querySelector('.timepicker-dropdown');
    timepickerDropdown.classList.toggle('active');

    const timeInput = timepickerBox.querySelector('.time-input');

    if (timepickerDropdown.classList.contains('active')) {
      const boxRect = timepickerBox.getBoundingClientRect();
      const inputRect = timeInput.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (boxRect.top >= windowHeight / 2) {
        timepickerDropdown.classList.add('bottom');
      } else {
        timepickerDropdown.classList.remove('bottom');
      }
    }
  }

  timepickerBoxes.forEach((timepickerBox) => {
    const timeInput = timepickerBox.querySelector('.time-input');
    const ampmButtons = timepickerBox.querySelectorAll('.ampm');
    const hourButtons = timepickerBox.querySelectorAll('.hour');
    const minuteButtons = timepickerBox.querySelectorAll('.minute');

    timeInput.addEventListener('click', function () {
      const timepickerDropdown = timepickerBox.querySelector('.timepicker-dropdown');
      const isActive = timepickerDropdown.classList.contains('active');

      timepickerBoxes.forEach((box) => {
        const otherDropdown = box.querySelector('.timepicker-dropdown');
        if (box !== timepickerBox && otherDropdown.classList.contains('active')) {
          otherDropdown.classList.remove('active');
        }
      });

      if (!isActive) {
        toggleTimepickerDropdown(timepickerBox);
      }
    });

    ampmButtons.forEach((ampmButton) => {
      ampmButton.addEventListener('click', function () {
        clearActiveButtons(ampmButtons);
        this.classList.add('active');
        updateTimeDisplay(timeInput);
      });
    });

    hourButtons.forEach((hourButton) => {
      hourButton.addEventListener('click', function () {
        clearActiveButtons(hourButtons);
        this.classList.add('active');
        updateTimeDisplay(timeInput);
      });
    });

    minuteButtons.forEach((minuteButton) => {
      minuteButton.addEventListener('click', function () {
        clearActiveButtons(minuteButtons);
        this.classList.add('active');
        updateTimeDisplay(timeInput);
      });
    });
  });

  document.addEventListener('click', function (event) {
    timepickerBoxes.forEach((timepickerBox) => {
      const timepickerDropdown = timepickerBox.querySelector('.timepicker-dropdown');
      const isClickedInsideTimepicker = timepickerBox.contains(event.target);

      if (!isClickedInsideTimepicker && timepickerDropdown.classList.contains('active')) {
        timepickerDropdown.classList.remove('active');
      }
    });
  });

  window.addEventListener('resize', function () {
    timepickerBoxes.forEach((timepickerBox) => {
      const timepickerDropdown = timepickerBox.querySelector('.timepicker-dropdown');
      if (timepickerDropdown.classList.contains('active')) {
        toggleTimepickerDropdown(timepickerBox);
      }
    });
  });
});
