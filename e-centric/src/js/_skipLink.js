document.addEventListener('DOMContentLoaded', function () {
  const link = document.querySelector('.skip-link');
  if(link) {
    const linkTarget = link.getAttribute('href').replace('#', '');
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(linkTarget).setAttribute('tabindex', '-1');
      document.getElementById(linkTarget).focus();
    });
  }
});