function tootipControl(e) {
  $($(e)).on('click', function () {
    $(this).parent('.tooltip-container').toggleClass('active');
  });

  $('.tooltip-close').on('click', function () {
    if ($(this).parents('.tooltip-container').hasClass('active')) {
      $(this).parents('.tooltip-container').removeClass('active');
    }
  });
}
