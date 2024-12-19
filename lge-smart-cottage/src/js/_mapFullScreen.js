document.addEventListener('DOMContentLoaded', function () {
  const map = document.getElementById('map');
  if (map) {
    const mapParent = map.closest('.section-container');
    const fullScreenBtn = map.querySelector('.btn-screen-rotate');

    if (fullScreenBtn) {
      fullScreenBtn.addEventListener('click', function () {
        if (mapParent.classList.contains('full')) {
          fullScreenBtn.classList.remove('active');
          mapParent.classList.remove('full');
        } else {
          fullScreenBtn.classList.add('active');
          mapParent.classList.add('full');
        }
      });
    }
  }
});
