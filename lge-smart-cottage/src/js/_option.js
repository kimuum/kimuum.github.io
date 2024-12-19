document.addEventListener('DOMContentLoaded', function () {
  const listRbox = document.querySelector('.option-list-radius-box');
  if (listRbox) {
    const optionBoxes = listRbox.querySelectorAll('.option-list-radius');
    const listDescBox = document.querySelector('.option-desc-list-box').children;

    optionBoxes.forEach((optionBox, i) => {
      const optionRadio = optionBox.querySelector('.option-radio');
      optionRadio.addEventListener('change', (e) => {
        if (e.target.checked) {
          for (let j = 0; j < listDescBox.length; j++) {
            if (i !== j) {
              listDescBox[j].classList.remove('active');
            } else {
              listDescBox[j].classList.add('active');
            }
          }
        }
      });
    });
  }
});
