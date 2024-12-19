function loginBgScroll(homeLogin) {
  var state = null;
  var $fixedImg = $(homeLogin).find('.loginImage .moType');
  var fixedImgH = $fixedImg.outerHeight();
  var $footer = $(homeLogin).find('.footerContainer');
  var footerH = $footer.outerHeight();
  var $loginContainer = $(homeLogin).find('.loginContainer');
  var loginContainerH = $loginContainer.outerHeight();
  var $loginWrapper = $(homeLogin).find('.loginWrapper');
  var loginContainerPaddingSum = (footerH + loginContainerH);

  if ($(window).width() <= 1024) {
    // 컨테이너 하단 여백값 (푸터 높이 + 이미지 높이)

    // fixedImgH = $fixedImg.outerHeight();

    fixedImgH = $(window).outerWidth() * 0.831125828;

    footerH = $footer.outerHeight();
    loginContainerH = $loginContainer.outerHeight();
    loginContainerPaddingSum = (footerH + loginContainerH);

    if(state != 'mobile') {
      state = 'mobile';
      $loginWrapper.addClass('mobile');

      

      $loginContainer.css({
        'position': 'relative',
        'marginTop' : fixedImgH
      });
    }
  }

  else {
    if(state != 'pc') {
      state = 'pc';
      $loginWrapper.removeClass('mobile');

      $loginContainer.removeAttr('style');
    }
  }
}

