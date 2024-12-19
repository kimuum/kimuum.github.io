document.addEventListener('DOMContentLoaded', function (event) {
  const moGnbs = document.querySelectorAll('.mobile-gnb');
  const moLnb = document.querySelector('.mobile-lnb-container');

  if (moGnbs) {
    for (const moGnb of moGnbs) {
      moGnb.addEventListener('click', function (event) {
        const target = event.target.closest('.mobile-gnb');
        const targetName = target.className;

        moGnbs.forEach(function (moGnb) {
          if (moGnb !== event.currentTarget) {
            moGnb.classList.remove('active');
          }
        });

        if (targetName.indexOf('active') > -1) {
          target.classList.remove('active');
        } else {
          target.classList.add('active');
        }

        if (targetName.indexOf('all') > -1) {
          moLnb.classList.add('active');
        } else {
          moLnb.classList.remove('active');
          document.body.removeAttribute('style');
        }
      });
    }
  }
});
