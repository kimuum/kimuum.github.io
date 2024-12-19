document.addEventListener('DOMContentLoaded', function () {
  var progressCont = document.getElementById('progress-container');

  if (progressCont) {
    const titleBox = document.querySelector('.charge-page-container .title-box');
    const title = titleBox.querySelector('.text');
    const num = titleBox.querySelector('.num');
    const btnCharge = document.querySelector('.btn-charge');
    const valueBg = progressCont.querySelector('.progress-wave-box');
    const timeRemaining = document.querySelector('.time-remaining-box');
    let value = progressCont.getAttribute('data-value');
    let timer = null;

    timer = setInterval(function () {
      value++;
      if (value <= 100) {
        num.innerText = value + '%';
        title.innerText = '충전중이에요.';
        btnCharge.querySelector('span').innerText = '충전 중단하기';
        progressCont.setAttribute('data-value', value);
        valueBg.style.bottom = value + '%';
      } else {
        num.remove();
        timeRemaining.remove();
        title.innerText = '충전이 완료되었습니다.';
        btnCharge.querySelector('span').innerText = '완료';
        btnCharge.querySelector('i').remove();
        progressCont.classList.add('end');
        progressCont.classList.remove('ing');
      }
    }, 3000);
  }
});
