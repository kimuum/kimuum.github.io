document.addEventListener('DOMContentLoaded', () => {
  const init = document.querySelector('html');
  const wrapper = init.querySelector('.wrapper');
  init.classList.add('scroll');
  wrapper.style.cssText = 'min-height: 1080px';
});
