// [VOS2차] 결함ID 1122059 하드코딩으로 변경
// [VOS2차] 결함ID 1122882 시작
$(function () {
  $(window).on('load', function () {
    // 단계 표현 IR
    if ($(document).find('.deliveryStep.detail').length !== 0) {
      $('.deliveryStep.detail').each(function(){
        var $currentStep = $(this).find('.step.on > .title');
        $currentStep.prepend('<span class="iconState">현재</span>');
      });
    }
  });
});
// [VOS2차] 결함ID 1122882 끝