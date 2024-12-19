document.addEventListener("DOMContentLoaded", toggleVideoList);
document.addEventListener("DOMContentLoaded", function() {
    const bizCaseList = document.querySelector('.video-case-list');
    if(bizCaseList) {
        setVideoCase();
    }
});

function toggleVideoList() {
    const videoList = document.querySelector('.video-list');
    videoList.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('on')) {
            return;
        } else {
            target.parentElement.querySelector('.on') && target.parentElement.querySelector('.on').classList.remove('on');
            target.classList.add('on');
        }
    });
}

function openBizCaseVideo() {
    const target = event.target;
    const idx = Array.from(target.parentElement.querySelectorAll('li')).indexOf(target);
    const targetVideo = bizSwiperCaseList.wrapperEl.querySelectorAll('.swiper-slide')[idx].querySelector('video');
    bizSwiperCaseList.slideTo(idx);
    playPopVideo(targetVideo);
    showPopup('popupCaseVideo');
}

let bizSwiperCaseList;
function setVideoCase() {
    bizSwiperCaseList = new Swiper('.video-case-list', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
            nextEl: ".video-case-list .swiper-button-next",
            prevEl: ".video-case-list .swiper-button-prev",
        },
        observer: true,
        observeParents: true,
        on: {
          slideChange: function () {
            const videos = this.el.querySelectorAll('video');
            if(videos.length > 0) {
              const activeSlideVideo = this.slides[this.activeIndex].querySelector('video');
              if(activeSlideVideo !== null) {
                Array.prototype.forEach.call(videos, function(video){video.pause();});
                if(activeSlideVideo.paused) {
                    activeSlideVideo.currentTime = 0;
                    activeSlideVideo.play();
                }
              }
            }
          },
        }
    });
}

const closeBizCaseEl = document.querySelectorAll('.close-popup, .popup-overlay');
Array.prototype.forEach.call(closeBizCaseEl, function(el){
    el.addEventListener('click', () => {
        const videos = el.parentElement.querySelectorAll('video');
        Array.prototype.forEach.call(videos, function(video){video.pause();});
    });
});

const popupVideo = document.querySelector('.popup video');
function playPopVideo(target) {
    let video = target.tagName === 'VIDEO' ? target : popupVideo;
    video.currentTime = 0;
    video.play();
}

function stopPopVideo(target) {
    let video = target.tagName === 'VIDEO' ? target : popupVideo;
    video.pause();
    video.currentTime = 0;
}
