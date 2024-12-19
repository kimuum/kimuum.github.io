import React, { useRef, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// images
import BtnPagePrev from "assets/images/common/slide_control_prev.svg";
import BtnPageNext from "assets/images/common/slide_control_next.svg";

const SceneSwiper = React.forwardRef(
  ({ className, children, perview = 1, pagerRef }, ref) => {
    const sceneSwiperRef = useRef(null); //스와이퍼
    const paramsSwiperRef = useRef(null);
    const pagerNumberRef = useRef(null);
    const swiperNextRef = useRef(null);
    const swiperPrevRef = useRef(null);

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

    function updateFractionPagination(swiper) {
      const paginationFraction = pagerNumberRef.current;
      const totalSlides = swiper.slides.length;
      const currentIndex = swiper.realIndex + 1;

      paginationFraction.innerHTML = `<span>${currentIndex}</span> / <span>${totalSlides}</span>`;
    }

    // 스와이퍼 설정값
    const swiperNormalSettings = {
      navigation: {
        nextEl: swiperNextRef.current,
        prevEl: swiperPrevRef.current,
      },
      pagination: {
        clickable: false,
        el: pagerRef.current,
      },
      modules: [Navigation, Pagination, A11y],
      slidesPerView: perview,
      onInit: (swiper) => {
        // 웹접근성 포커스 방지
        paramsSwiperRef.current = swiper;
        handleSlideChange();
        updateFractionPagination(swiper);
      },
      onSlideChange: (swiper) => {
        handleSlideChange();
        updateFractionPagination(swiper);
      }, // 웹접근성 포커스 방지
    };

    useEffect(() => {
      swiperNormalSettings.pagination.el = pagerRef.current;
      swiperNormalSettings.navigation.nextEl = swiperNextRef.current;
      swiperNormalSettings.navigation.prevEl = swiperPrevRef.current;
    }, [pagerRef, swiperNextRef, swiperPrevRef]);

    return (
      <SceneSwiperArea
        className={`${className}`}
        ref={sceneSwiperRef}
        {...swiperNormalSettings}
      >
        <div className="total-pagination">
          <button
            ref={swiperPrevRef}
            type="button"
            className="btn-slide-prev"
            title="이전 패키지"
          ></button>
          <div ref={pagerNumberRef}></div>
          <button
            ref={swiperNextRef}
            type="button"
            className="btn-slide-next"
            title="다음 패키지"
          ></button>
        </div>
        {children}
      </SceneSwiperArea>
    );
  }
);

const SceneSwiperArea = styled(Swiper)`
  height: 100%;
  &.show {
    z-index: 1;
    opacity: 1;
    transition: opacity 0.2s;
  }
  .swiper-notification {
    display: none;
  }
  .total-pagination {
    position: absolute;
    z-index: 3;
    right: 6rem;
    bottom: 6.6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 4rem;
    background: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #ffffff;
    span {
      &:last-child {
        opacity: 0.7;
      }
    }
    button {
      width: 3.6rem;
      height: 3.6rem;
      &:disabled {
        opacity: 0.7;
      }
    }
    .btn-slide-prev {
      background: url(${BtnPagePrev}) no-repeat center;
    }
    .btn-slide-next {
      background: url(${BtnPageNext}) no-repeat center;
    }
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    .total-pagination {
      display: none;
    }
  }
`;

export default SceneSwiper;
