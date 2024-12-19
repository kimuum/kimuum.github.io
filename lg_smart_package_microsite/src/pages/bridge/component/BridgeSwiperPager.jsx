import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageBox from "components/common/ImageBox";
// images
import BtnPageAutoPlayPrev from "assets/images/common/slide_control_prev.svg";
import BtnPageAutoPlayNext from "assets/images/common/slide_control_next.svg";

const BridgeSwiperPager = ({ className, data, packageName }) => {
  const paramsSwiperRef = useRef(null);
  const swiperPagerRef = useRef(null);
  const swiperPagerPrevRef = useRef(null);
  const swiperPagerNextRef = useRef(null);

  // 이미지 매칭
  const getImageDataByName = (name) => {
    const packageName = data.find((item) => item.name === name);
    return packageName && packageName.heroImages;
  };

  // 슬라이드 이미지 배치
  const slideCard = getImageDataByName(packageName).map((card, index) => (
    <BridgeHeroSwiperSlide key={index.toString()} id={`${index}`}>
      <BridgeHeroImageBox
        src={require("assets/images/bridge/" + card.src)}
        alt={card.alt}
      />
    </BridgeHeroSwiperSlide>
  ));

  // 웹접근성 포커스 방지
  const handleSlideChange = () => {
    if (paramsSwiperRef.current) {
      const swiper = paramsSwiperRef.current;

      swiper.slides.forEach((slide) => {
        slide.setAttribute("aria-hidden", true);
      });
      const activeSlide = swiper.slides[swiper.activeIndex];
      if (activeSlide) {
        activeSlide.setAttribute("aria-hidden", false);
      }
    }
  };

  const PagerSwiperSettings = {
    navigation: {
      nextEl: swiperPagerNextRef.current,
      prevEl: swiperPagerPrevRef.current,
    },
    pagination: {
      clickable: true,
      el: swiperPagerRef.current,
      type: "fraction",
    },
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    loop: true,
    a11y: {
      enabled: true,
    },
    onInit: (swiper) => {
      // 웹접근성 포커스 방지
      paramsSwiperRef.current = swiper;
      handleSlideChange();
    },
    onSlideChange: handleSlideChange, // 웹접근성 포커스 방지
  };

  useEffect(() => {
    PagerSwiperSettings.pagination.el = swiperPagerRef.current;
    PagerSwiperSettings.navigation.nextEl = swiperPagerNextRef.current;
    PagerSwiperSettings.navigation.prevEl = swiperPagerPrevRef.current;
  }, [swiperPagerRef, swiperPagerPrevRef, swiperPagerNextRef]);

  return (
    <SwiperPagerContainer className={className}>
      <PagerSwiper {...PagerSwiperSettings}>{slideCard}</PagerSwiper>
      <PagerControllerArea>
        <PagerControllerInner>
          <PagerButtonPrev type="button" ref={swiperPagerPrevRef}>
            <span>이전 슬라이드</span>
          </PagerButtonPrev>
          <PagerPagination ref={swiperPagerRef}></PagerPagination>
          <PagerButtonNext type="button" ref={swiperPagerNextRef}>
            <span>다음 슬라이드</span>
          </PagerButtonNext>
        </PagerControllerInner>
      </PagerControllerArea>
    </SwiperPagerContainer>
  );
};

const BridgeHeroImageBox = styled(ImageBox)``;
const BridgeHeroSwiperSlide = styled(SwiperSlide)``;
const PagerButtonNext = styled.button`
  position: static;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background: url(${BtnPageAutoPlayNext}) no-repeat center;
  span {
    opacity: 0;
    font-size: 1px;
  }
`;
const PagerButtonPrev = styled.button`
  position: static;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background: url(${BtnPageAutoPlayPrev}) no-repeat center;
  span {
    opacity: 0;
    font-size: 1px;
  }
`;
const PagerPagination = styled.div`
  position: static;
  margin: 0 1rem;
  line-height: 1;
  color: #ffffff;
`;
const PagerControllerInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2.4rem;
  padding: 0 1rem;
  border-radius: 5rem;
  background: rgba(0, 0, 0, 0.25);
`;
const PagerControllerArea = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 0;
  bottom: 1.5rem;
  width: 100%;
`;

const PagerSwiper = styled(Swiper)`
  &.swiper {
    width: 100%;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2;
      width: 100%;
      height: 8rem;
      background-image: linear-gradient(
        180deg,
        rgba(244, 244, 244, 0) 0%,
        rgba(244, 244, 244, 0.9) 100%
      );
    }
    .swiper-slide {
      position: relative;
      z-index: 1;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .swiper-notification {
    display: none;
  }
`;

const SwiperPagerContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export default BridgeSwiperPager;
