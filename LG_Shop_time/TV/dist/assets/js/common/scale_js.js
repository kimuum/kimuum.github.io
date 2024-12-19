window.onload = function() {
  checkWindowWidth();
  window.addEventListener('resize', checkWindowWidth)
};

  function checkWindowWidth(e) {
    let windowWidth = $(window).width();
    let standardWidth = 1920;
    let currentWidth = windowWidth/standardWidth;
    let $main = $(document).find('.wrapper');

    if( !$main == false ) {
    $main.css('transform', 'scale(' + currentWidth + ')'); //배율
    // console.log(e + ': ' + windowWidth, ', 기준: ' + standardWidth + ', 값: ' + currentWidth);
    }
  }
  