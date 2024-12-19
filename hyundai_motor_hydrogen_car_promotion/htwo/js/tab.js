(function (global, $) {
    var $menu = $('.tab li'),
        $contents = $('.content-wrap'),
        $doc = $('html, body');
        
    $(function () {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function(e){
            if($(window).width()<768) {
                var scrollTopVar = 50;
            } else {
                var scrollTopVar = 80;
            }
            var $target = $(this).parent(),
                idx = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top - scrollTopVar;

            $doc.stop()
                .animate({
                    scrollTop :offsetTop
                }, 800);
            return false;
        });
    });

    // tab class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target = $contents.eq(idx),
            i = $target.index(),
            targetTop = $target.offset().top - 300;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });
}(window, window.jQuery));