// Search Input
document.addEventListener('DOMContentLoaded', function () {
  const inputBoxes = document.querySelectorAll('.field-search');
  if (inputBoxes) {
    inputBoxes.forEach((inputBox) => {
      const input = inputBox.querySelector('input');
      const removeBtn = inputBox.querySelector('.btn-remove');
      input.addEventListener('keyup', function () {
        if (input.value.length === 0) {
          removeBtn.style.display = 'none';
        } else {
          removeBtn.style.display = 'block';
        }
      });
      removeBtn.addEventListener('click', function () {
        input.value = '';
        removeBtn.style.display = 'none';
      });
    });
  }
});

// Password Input
document.addEventListener('DOMContentLoaded', function () {
  const pwInputs = document.querySelectorAll('.input-pw');
  if (pwInputs) {
    pwInputs.forEach((pwInput) => {
      const btnEye = pwInput.closest('.field-input').querySelector('.btn-show-pw');
      btnEye.addEventListener('click', function () {
        if (btnEye.classList.contains('active')) {
          btnEye.classList.remove('active');
          pwInput.type = 'password';
        } else {
          btnEye.classList.add('active');
          pwInput.type = 'text';
        }
      });
    });
  }
});
