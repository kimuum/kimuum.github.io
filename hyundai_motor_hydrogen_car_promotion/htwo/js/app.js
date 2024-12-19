
// $(window).on('load',function() {
//     $('.loader').fadeOut();
// });

$(function(){

    $(window).scroll(function(){
    	var scroll = getCurrentScroll();
        if(scroll >= 300){
        	$('body').addClass('scrolled');
        }else{
        	$('body').removeClass('scrolled');
        }
    });
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
    $('.scroll-top').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 1200 );
	    return false;
    })

    
    $('.menu > li').mouseover(function(){
        $('.menu').addClass('opened');
        $('.header').removeClass('header-tr');
    });
    $('.menu > li').mouseout(function(){
        $('.menu').removeClass('opened');

        var pageScrollHeight = $(window).scrollTop();
        if (pageScrollHeight === 0) {
            if( $('.page').hasClass('page-home') ) {
                $('.header').addClass('header-tr');
            }
        }
    });

    $('.hamburger').click(function(){
        $('body').addClass('menu-opened');
    });
    $('.close-menu').click(function(){
        $('body').removeClass('menu-opened');
    });
    $('header .overlay').click(function(){
        $('body').removeClass('menu-opened');
    });

    /* Dropdown */
    $('.dropdown').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });

    $('.exp-toggle').click(function(){
        var parent = $(this).parent();
        if(parent.attr('data-expanded') == 'false') {
            parent.children('.exp-detail').slideDown();
            parent.attr('data-expanded', 'true');
        } else {
            parent.children('.exp-detail').slideUp();
            parent.attr('data-expanded', 'false');
        }
    });

    $('.change-lang > button').click(function(){
        event.stopPropagation();
        var parent = $(this).parent();
        if(parent.hasClass('on')) {
            parent.removeClass('on');
        } else {
            parent.addClass('on');
        }
    });
    $(document).click(function(){
        $('.change-lang').removeClass('on');
    });

    $('.popup-overlay').click(function(){
        var popup = $(this).parent();
        popup.fadeOut(100, function () {
            $(this).removeClass('open');
            $('body').removeClass('popup-opened');
        });
    })

    // $('.share').tooltipster({
    //     position: 'bottom',
    //     trigger: 'click',
    //     interactive: true,
    //     minWidth: 130,
    //     offsetX: 20,
    //     content: $(
    //         '<div class="share-menu">' +
    //         '<a href="#" class="sns-facebook"><span>페이스북</span></a>' +
    //         '<a href="#" class="sns-twitter"><span>트위터</span></a>' +
    //         '<a href="#" class="sns-kakaotalk"><span>카카오톡</span></a>' +
    //         '<a href="#" class="sns-kakaostory"><span>카카오스토리</span></a>' +
    //         '<a href="#" class="sns-band"><span>네이버 밴드</span></a>' +
    //         '<a href="#" class="sns-url"><span>URL 복사</span></a>' +
    //         '</div>'
    //         )
    // });
})

function showPopup(object) {
    const popup = $('#' + object);
    popup.css('display', 'flex');
    popup.hide();
    popup.find('video').length === 1 && popup.find('video')[0].play();
    popup.fadeIn(150, function () {
        $(this).addClass('open');
        $('body').addClass('popup-opened');
    });
}

function closePopup(object) {
    if(object === null) {
        object = event.target.closest('.popup').getAttribute('id');
    }
    const popup = $('#' + object); 
    popup.fadeOut(100, function () {
        $(this).removeClass('open');
        $('body').removeClass('popup-opened');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }
                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });
        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    //lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
    }
});
