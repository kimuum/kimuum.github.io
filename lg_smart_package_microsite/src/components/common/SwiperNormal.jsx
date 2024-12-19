import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import BtnNormalCircleNext from "assets/images/common/slide_black_next.svg";
import BtnNormalCirclePrev from "assets/images/common/slide_black_prev.svg";

function SwiperNormal({
  className,
  children,
  perview = 1,
  loop = true,
  pagination = true,
  navigation = true,
}) {
  const NormalSwiperRef = useRef(null); //스와이퍼
  const paramsSwiperRef = useRef(null);

  // 웹접근성 포커스 방지
  const handleSlideChange = () => {
    if (paramsSwiperRef.current) {
      const swiper = paramsSwiperRef.current;
      if (!perview === "auto") {
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
    }
  };

  // 스와이퍼 설정값
  const swiperNormalSettings = {
    navigation: navigation,
    pagination: pagination,
    modules: [Navigation, Pagination, A11y],
    slidesPerView: perview,
    loop: loop,
    a11y: {
      enabled: true,
    },
    onInit: (swiper) => {
      paramsSwiperRef.current = swiper;
      // 웹접근성 포커스 이동
      handleSlideChange();
    },
    onSlideChange: handleSlideChange, // 웹접근성 포커스 이동
  };

  return (
    <NormalSwiper
      className={className}
      ref={NormalSwiperRef}
      {...swiperNormalSettings}
    >
      {children}
    </NormalSwiper>
  );
}

const NormalSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    width: 4.8rem;
    height: 4.8rem;
    padding: 0.5rem;
    margin-top: -2.4rem;
    box-sizing: content-box;
    &:after {
      content: "";
      flex-shrink: 0;
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 5rem;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.14);
    }
    /* &.swiper-button-disabled {
      display: none;
    } */
  }
  .swiper-button-prev {
    &:after {
      background: url(${BtnNormalCirclePrev}) no-repeat center #ffffff;
    }
  }
  .swiper-button-next {
    &:after {
      background: url(${BtnNormalCircleNext}) no-repeat center #ffffff;
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 2rem;
    line-height: 0;
  }
  .swiper-pagination-bullet {
    opacity: 0.2;
    width: 0.6rem;
    height: 0.6rem;
    background-color: #000000;
    border-radius: 0.6rem;
    &.swiper-pagination-bullet-active {
      opacity: 1;
      width: 2.4rem;
    }
  }
  .swiper-notification {
    display: none;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      z-index: 2;
      width: 3rem;
      height: 100%;
      background-color: #ffffff;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
    &.swiper {
      padding: 0 3rem;
    }
    .swiper-pagination {
      margin-top: 3rem;
    }
    .swiper-pagination-bullet {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.8rem;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    &.swiper {
      padding: 0 1.6rem;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

export default SwiperNormal;
