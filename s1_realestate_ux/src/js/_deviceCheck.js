function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function addClassToElement(className) {
  if (className) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.className += ' ' + className;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (isMobileDevice()) {
    addClassToElement('mobile');
  } else {
    addClassToElement('desktop');
  }
});