import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// bridge component
import BridgeTogetherProduct from "pages/bridge/component/BridgeTogetherProduct";

// images
import BtnNormalCircleNext from "assets/images/common/slide_black_next.svg";
import BtnNormalCirclePrev from "assets/images/common/slide_black_prev.svg";

function BridgeTogetherBuy({ className }) {
  const togetherSwiperRef = useRef(null); //스와이퍼
  const paramsSwiperRef = useRef(null);

  // 웹접근성 포커스 이동
  const handleSlideChange = () => {
    if (paramsSwiperRef.current) {
      const swiper = paramsSwiperRef.current;
      swiper.slides.forEach((slide) => {
        slide.setAttribute("tabindex", 0);
      });
    }
  };

  // 스와이퍼 설정값
  const swiperTogetherSettings = {
    navigation: true,
    modules: [Navigation, A11y],
    slidesPerView: "auto",
    loop: true,
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
    <TogetherBuyContainer className={className}>
      <TogetherTitle>
        같이사면 좋은 <br />
        추천가전을 만나보세요.
      </TogetherTitle>
      <TogetherSwiper ref={togetherSwiperRef} {...swiperTogetherSettings}>
        <SwiperSlide>
          <TogetherProduct
            className={"product-row"}
            title="LG 퓨리케어 360˚  공기청정기 플러스"
            spec="·97㎡·2등급"
            code="AS283DWFL"
            price="869,000원"
            src={require("assets/images/thumbs/img_bridge_product03.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TogetherProduct
            className={"product-row"}
            title="LG 휘센 오브제컬렉션 위너 에어컨 2in1"
            spec=" · 56.9㎡"
            code="OLED77G3KNA"
            price="8,200,000원"
            src={require("assets/images/thumbs/img_bridge_product02.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TogetherProduct
            className={"product-row"}
            title="LG 올레드 evo (스탠드형)"
            code="OLED77G3KNA"
            price="8,200,000원"
            src={require("assets/images/thumbs/img_bridge_product01.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TogetherProduct
            className={"product-row"}
            title="LG 퓨리케어 360˚  공기청정기 플러스"
            spec="·97㎡·2등급"
            code="AS283DWFL"
            price="869,000원"
            src={require("assets/images/thumbs/img_bridge_product03.jpg")}
          />
        </SwiperSlide>
      </TogetherSwiper>
    </TogetherBuyContainer>
  );
}

const TogetherTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
  color: #000000;
  text-align: left;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    br {
      display: none;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 0 1.6rem;
  }
`;
const TogetherProduct = styled(BridgeTogetherProduct)``;

const TogetherSwiper = styled(Swiper)`
  & > .swiper-wrapper {
    & > .swiper-slide {
      max-width: 15rem;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.5rem;
    margin-top: -1.2rem;
    box-sizing: content-box;
    &:after {
      content: "";
      flex-shrink: 0;
      width: 2.4rem;
      height: 2.4rem;
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
      background-size: 6px auto;
    }
  }
  .swiper-button-next {
    &:after {
      background: url(${BtnNormalCircleNext}) no-repeat center #ffffff;
      background-size: 6px auto;
    }
  }
  .swiper-notification {
    display: none;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    & > .swiper-wrapper {
      & > .swiper-slide {
        max-width: 15.8rem;
        margin-right: 1.5rem;
      }
    }
    &.swiper {
      padding: 0 1.5rem;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      z-index: 2;
      width: 1.5rem;
      height: 100%;
      background-color: #ffffff;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
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

const TogetherBuyContainer = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
  }
`;

export default BridgeTogetherBuy;
