/*
 ** comment : Textarea 글자 수 count
 */
document.addEventListener('DOMContentLoaded', function () {
  const txts = document.getElementsByTagName('textarea');

  if (txts) {
    for (let i = 0, l = txts.length; i < l; i++) {
      if (/^[0-9]+$/.test(txts[i].getAttribute('maxlength'))) {
        const total = txts[i].nextElementSibling.querySelector('.total');
        total.textContent = parseInt(txts[i].getAttribute('maxlength'), 10);

        const func = function () {
          const len = parseInt(this.getAttribute('maxlength'), 10);
          const countNum = this.nextElementSibling.querySelector('.num');
          countNum.textContent = this.value.length;
        };

        txts[i].onkeyup = func;
        txts[i].onblur = func;
      }
    }
  }
});
