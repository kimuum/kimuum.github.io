import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import BtnHeroPrev from "assets/images/common/slide_control_prev.svg";
import BtnHeroNext from "assets/images/common/slide_control_next.svg";

const HomeHeroSwiper = ({ className, children }) => {
  const paramsSwiperRef = useRef(null);
  const swiperRef = useRef(null); //스와이퍼
  const swiperPaginationRef = useRef(null); //스와이퍼 페이지네이션
  const swiperPrevRef = useRef(null); //스와이퍼 이전 버튼
  const swiperNextRef = useRef(null); //스와이퍼 다음 버튼
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
  const swiperHeroSettings = {
    navigation: {
      nextEl: swiperNextRef.current,
      prevEl: swiperPrevRef.current,
    },
    pagination: {
      clickable: true,
      el: swiperPaginationRef.current,
      type: "fraction",
    },
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    autoHeight: false,
    loop: isSlideLength,
    onInit: (swiper) => {
      // 웹접근성 포커스 방지
      paramsSwiperRef.current = swiper;
      handleSlideChange();
    },
    onSlideChange: handleSlideChange, // 웹접근성 포커스 방지
  };

  // 스와이퍼 1개 이하 일 때
  // 페이지네이션/이전/다음/재생 버튼 미노출
  const swiperHeroLengthCheck = () => {
    const slideLength =
      swiperRef.current.querySelector(".swiper-wrapper").children.length;
    if (swiperRef.current && slideLength > 1) {
      setSlideLength(true);
    } else {
      setSlideLength(false);
    }
  };

  useEffect(() => {
    swiperHeroLengthCheck();
    swiperHeroSettings.pagination.el = swiperPaginationRef.current;
    swiperHeroSettings.navigation.nextEl = swiperNextRef.current;
    swiperHeroSettings.navigation.prevEl = swiperPrevRef.current;

    return () => {};
  }, [swiperPaginationRef, swiperNextRef, swiperPrevRef, isSlideLength]);

  return (
    <HeroContainer className={className}>
      <Swiper ref={swiperRef} {...swiperHeroSettings}>
        {children}
      </Swiper>
      <HeroArea
        className="swiper-controller-area"
        style={{ display: isSlideLength ? "block" : "none" }}
      >
        <HeroInner>
          <HeroController>
            <HeroButtonPrev type="button" ref={swiperPrevRef}>
              <span>이전 슬라이드</span>
            </HeroButtonPrev>
            <HeroPagenation ref={swiperPaginationRef} />
            <HeroButtonNext type="button" ref={swiperNextRef}>
              <span>다음 슬라이드</span>
            </HeroButtonNext>
          </HeroController>
        </HeroInner>
      </HeroArea>
    </HeroContainer>
  );
};

const HeroPagenation = styled.div`
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
const HeroButtonNext = styled.button`
  flex-shrink: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(${BtnHeroNext}) no-repeat center / 1.6rem auto;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
const HeroButtonPrev = styled.button`
  flex-shrink: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(${BtnHeroPrev}) no-repeat center / 1.6rem auto;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
const HeroController = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 3.6rem;
`;
const HeroInner = styled.div`
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
const HeroArea = styled.div`
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
const HeroContainer = styled.div`
  position: relative;
`;

export default HomeHeroSwiper;
