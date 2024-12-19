document.addEventListener('DOMContentLoaded', function () {
  const mapBtns = document.querySelectorAll('.map-area');
  const mapConts = document.querySelectorAll('.country-container');
  if (mapBtns) {
    for (const mapBtn of mapBtns) {
      mapBtn.addEventListener('click', function (event) {
        const target = event.target.closest('.map-area');
        const targetClass = target.className;
        const targetData = target.getAttribute('data-bg');
        const parents = target.closest('.map-list-area');

        if(targetClass.indexOf('active') === -1) {
          const arry = targetClass.split(' ');
          const arryarry = arry[1].split('map-');
          const targetCountryName = arryarry[1];

          mapBtns.forEach(function(el) {
            if (el !== mapBtn) {
              el.closest('.map-area').classList.remove('active');
              el.closest('.map-list-area').classList.remove(el.closest('.map-area').getAttribute('data-bg'));
            } else {
              el.closest('.map-area').classList.add('active');
            }
          });

          for (const mapCont of mapConts) {
            if(mapCont.className.indexOf(targetCountryName) > -1) {
              mapCont.classList.add('active');
              parents.classList.add(targetData)
              window.scrollTo({top: mapCont.offsetTop - document.querySelector('.header-container').clientHeight, behavior: 'smooth'});
            } else {
              mapCont.classList.remove('active');
            }
          }
        }
      })
    }
  }
});
