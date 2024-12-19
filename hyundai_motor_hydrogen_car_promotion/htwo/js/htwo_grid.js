'use strict';

const _winW = window.innerWidth;

//Img, Video Tag Responsive
const setVideoSrc = reponsiveObj('video');
const setImgSrc = reponsiveObj('img');

function reponsiveObj(obj) {
    const elements = document.querySelectorAll(obj);
    Array.prototype.forEach.call(elements, function(el){
        if(el.getAttribute('data-media-pc') === null && el.getAttribute('data-media-mobile') === null) {
            return;
        } else {
            if (_winW > 768 && el.getAttribute('data-media-pc') !== el.getAttribute('src')) {
                el.setAttribute('src', el.getAttribute('data-media-pc'));
            } 

            if (_winW <= 768 && el.getAttribute('data-media-mobile') !== el.getAttribute('src')) {
                el.setAttribute('src', el.getAttribute('data-media-mobile'));
            }
        }
    });
}

window.addEventListener("resize", setVideoSrc);
window.addEventListener("load", setVideoSrc);
window.addEventListener("resize", setImgSrc);
window.addEventListener("load", setImgSrc);


//tab
const gridTabWrap = document.querySelector('.inno-detail__tab');
const gridTabMenu = document.querySelectorAll('.inno-detail__tab li');
const gridTarget = document.querySelectorAll('.inno-detail__section');

window.addEventListener('scroll', () => {
    const _contTop = document.querySelector('.sub-header').clientHeight; 
    const _scrollTop = window.scrollY || document.documentElement.scrollTop;
    const _tabScroll = document.querySelector('.inno-detail__tab ul');
    const _gnbHeight = document.querySelector('header .menu').clientHeight;
    const _fixedTop = _gnbHeight + gridTabWrap.clientHeight; 

    if( _winW <= 768){
        if (_scrollTop >= _contTop + _gnbHeight) {
            gridTabWrap.classList.add('fixed');
        } else {
            gridTabWrap.classList.remove('fixed');
        }
    } else {
        if (_scrollTop >= _contTop) {
            gridTabWrap.classList.add('fixed');
        } else {
            gridTabWrap.classList.remove('fixed');
        } 
    }

    Array.prototype.forEach.call(gridTarget, function(el, idx){
        const gridTargetTop = el.offsetTop;

        if (_scrollTop + _fixedTop >= gridTargetTop) {
            gridTabMenu.forEach((el) => {
                el.classList.remove('on');
            });
            
            gridTabMenu[idx].classList.add('on');
            
            if( _winW <= 768){
                let liLeft = gridTabMenu[idx].offsetLeft - 100;
                _tabScroll.scrollTo({left: liLeft});
            }
        }
    });
});

window.addEventListener("load", clickTab());

function clickTab() {
    Array.prototype.forEach.call(gridTabMenu, function(el){
        el.addEventListener("click", (e) => {
            e.preventDefault();
            let idx = [...e.target.closest('ul').children].indexOf(e.target.parentElement);
            let gridTargetTop = gridTarget[idx].offsetTop - gridTabWrap.clientHeight;
            window.scrollTo({top:gridTargetTop});
        });
    });
}

//Motion
if ( _winW > 740) {
    setGridMotion('.inno-detail__section div');
    setGridMotion('.inno-visual__img');    
}

function setGridMotion(obj) {
    const options = { threshold: 0.3 }
    const callback = ((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');  
            } 
        })
    });
        
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(obj);

    Array.prototype.forEach.call(targets, function(el){
        if(obj === '.inno-visual__img') {
            observer.observe(el);
        } else {
            if (el.getAttribute('data-type')) {
                observer.observe(el);
            }
        }
    });
}

// ** Video auto play when scroll is detected
const videoElements = document.querySelectorAll('#vidArea video');
const loadVideos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('detected');
            entry.target.play();
        } else {
            entry.target.classList.remove('detected');
            entry.target.pause();
        }
    });                            
}, {
    threshold: 0.1, // 타겟의 가시성이 10%일때 옵저버 실행
});

videoElements.forEach((vid) => loadVideos.observe(vid));