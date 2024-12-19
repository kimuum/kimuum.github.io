import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import BtnPageAutoPlayPlay from "assets/images/common/slide_control_play.svg";
import BtnPageAutoPlayStop from "assets/images/common/slide_control_stop.svg";
import BtnPageAutoPlayPrev from "assets/images/common/slide_control_prev.svg";
import BtnPageAutoPlayNext from "assets/images/common/slide_control_next.svg";

const SwiperPageAutoPlay = ({ className, children }) => {
  const paramsSwiperRef = useRef(null);
  const swiperRef = useRef(null); //스와이퍼
  const swiperPaginationRef = useRef(null); //스와이퍼 페이지네이션
  const swiperPrevRef = useRef(null); //스와이퍼 이전 버튼
  const swiperNextRef = useRef(null); //스와이퍼 다음 버튼
  const [isPlayer, setPlayer] = useState(true); //스와이퍼 재생 상태
  const [isSlideLength, setSlideLength] = useState(true); //스와이퍼 슬라이드 수량 체크

  // 웹접근성 포커스 방지
  const handleSlideChange = () => {
    if (paramsSwiperRef.current) {
      const swiper = paramsSwiperRef.current;

      swiper.slides.forEach((slide) => {
        const elLinks = slide.querySelectorAll("a");
        const elButtons = slide.querySelectorAll("button");
        if (elLinks.length > 0) {
          elLinks.forEach((link) => {
            link.tabIndex = -1;
          });
        }
        if (elButtons.length > 0) {
          elButtons.forEach((link) => {
            link.tabIndex = -1;
          });
        }
      });
      const activeSlide = swiper.slides[swiper.activeIndex];
      const activeElLinks = activeSlide.querySelectorAll("a");
      const activeElbuttons = activeSlide.querySelectorAll("button");
      if (activeSlide) {
        if (activeElLinks.length > 0) {
          activeElLinks.forEach((link) => {
            link.tabIndex = 0;
          });
        }
        if (activeElbuttons.length > 0) {
          activeElbuttons.forEach((button) => {
            button.tabIndex = 0;
          });
        }
      }
    }
  };

  // 스와이퍼 설정값
  const swiperPageAutoPlaySettings = {
    navigation: {
      nextEl: swiperNextRef.current,
      prevEl: swiperPrevRef.current,
    },
    pagination: {
      clickable: true,
      el: swiperPaginationRef.current,
      type: "fraction",
    },
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    autoHeight: false,
    loop: isSlideLength,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    onInit: (swiper) => {
      // 웹접근성 포커스 방지
      paramsSwiperRef.current = swiper;
      handleSlideChange();
    },
    onSlideChange: handleSlideChange, // 웹접근성 포커스 방지
  };

  // 스와이퍼 재생 이벤트
  const pageAutoPlayTogglePlay = () => {
    setPlayer((prev) => !prev);

    if (swiperRef.current && swiperRef.current.swiper) {
      if (!isPlayer) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  };

  // 스와이퍼 1개 이하 일 때
  // 페이지네이션/이전/다음/재생 버튼 미노출
  const swiperPageAutoPlayLengthCheck = () => {
    const slideLength =
      swiperRef.current.querySelector(".swiper-wrapper").children.length;
    if (swiperRef.current && slideLength > 1) {
      setSlideLength(true);
    } else {
      setSlideLength(false);
    }
  };

  useEffect(() => {
    swiperPageAutoPlayLengthCheck();
    swiperPageAutoPlaySettings.pagination.el = swiperPaginationRef.current;
    swiperPageAutoPlaySettings.navigation.nextEl = swiperNextRef.current;
    swiperPageAutoPlaySettings.navigation.prevEl = swiperPrevRef.current;

    return () => {};
  }, [swiperPaginationRef, swiperNextRef, swiperPrevRef, isSlideLength]);

  return (
    <PageAutoPlayContainer className={className}>
      <Swiper
        ref={swiperRef}
        {...swiperPageAutoPlaySettings}
        autoplay={
          isPlayer === true
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
      >
        {children}
      </Swiper>
      <PageAutoPlayArea
        className="swiper-controller-area"
        style={{ display: isSlideLength ? "block" : "none" }}
      >
        <PageAutoPlayInner>
          <PageAutoPlayController>
            <PageAutoPlayButtonPrev type="button" ref={swiperPrevRef}>
              <span>이전 슬라이드</span>
            </PageAutoPlayButtonPrev>
            <PageAutoPlayPageNation ref={swiperPaginationRef} />
            <PageAutoPlayButtonNext type="button" ref={swiperNextRef}>
              <span>다음 슬라이드</span>
            </PageAutoPlayButtonNext>
          </PageAutoPlayController>
          <PageAutoPlayButtonCtrl
            type="button"
            onClick={pageAutoPlayTogglePlay}
            playState={isPlayer}
          >
            {isPlayer === true ? "멈추기" : "재생하기"}
          </PageAutoPlayButtonCtrl>
        </PageAutoPlayInner>
      </PageAutoPlayArea>
    </PageAutoPlayContainer>
  );
};

const PageAutoPlayPageNation = styled.div`
  color: #ffffff;
  line-height: 0;
  & > .swiper-pagination-total {
    opacity: 0.7;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 0 1rem;
    font-size: 1.6rem;
  }
`;
const PageAutoPlayButtonCtrl = styled.button`
  flex-shrink: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  margin-left: 0.8rem;
  background: url(${BtnPageAutoPlayPlay}) no-repeat center / cover;

  ${(props) =>
    props.playState &&
    `background: url(${BtnPageAutoPlayStop}) no-repeat center / cover;`};

  /* PC */
  @media screen and (min-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
const PageAutoPlayButtonNext = styled.button`
  flex-shrink: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(${BtnPageAutoPlayNext}) no-repeat center / 1.6rem auto;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
const PageAutoPlayButtonPrev = styled.button`
  flex-shrink: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(${BtnPageAutoPlayPrev}) no-repeat center / 1.6rem auto;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
const PageAutoPlayController = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 3.6rem;
`;
const PageAutoPlayInner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 138rem;
    margin: 0 auto;
  }
`;
const PageAutoPlayArea = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  button {
    font-size: 1px;
    color: transparent;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 100%;
    bottom: 2.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 1.8rem;
  }
`;
const PageAutoPlayContainer = styled.div`
  position: relative;
`;

export default SwiperPageAutoPlay;
