import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// data
import { slideCardData } from "samples/data/data_slide";

function SwiperCardOptions() {
  const swiperRef = useRef(null);
  const slideCards = slideCardData.map((card, index) => (
    <SwiperSlide
      key={index.toString()}
      id={`${index}`}
      className="slide-card-box"
    >
      <h2 className="slide-title">{card.title}</h2>
      <p>{card.content}</p>
    </SwiperSlide>
  ));

  const [isPlay, setPlay] = useState(false);
  const togglePlay = () => {
    setPlay((prev) => !prev);
    if (swiperRef.current && swiperRef.current.swiper) {
      if (!isPlay) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  };

  return (
    <SwiperContainer className="swiper-container">
      <Swiper
        ref={swiperRef}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={
          isPlay === true
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[Autoplay, Navigation, Pagination]}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={3}
        loop={false}
        loopedslides={2}
      >
        {slideCards}
      </Swiper>
      <button type="button" className="btn-swiper-control" onClick={togglePlay}>
        {isPlay === true ? "멈추기" : "재생하기"}
      </button>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
  overflow: hidden;
  max-width: 800px;
  padding: 10px 35px 80px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    position: relative;
    opacity: 0;
    z-index: 1;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    border-radius: 7px;
    box-sizing: border-box;
    font-size: 16px;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
    &-active {
      opacity: 1;
      z-index: 2;
    }
    &-prev,
    &-next {
      opacity: 0.4;
      top: 30px;
      transition: transform 0.8s;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    &-prev {
      left: 30px;
      transform: rotate(-30deg);
    }
    &-next {
      right: 30px;
      transform: rotate(30deg);
    }
  }
  .swiper-button {
    &-prev,
    &-next {
      top: calc(50% + 50px);
      width: 40px;
    }
    &-prev {
      left: -50px;
    }
    &-next {
      right: -50px;
    }
  }
  .swiper-pagination {
    bottom: -100px;
    &-bullet {
    }
  }
  .slide-card-box {
    min-height: 14rem;
    .slide-title {
      margin: 0 0 2rem;
      font-size: 1.8rem;
    }
    @media screen and (min-width: 480px) {
      min-height: 20rem;
    }
  }
  @media screen and (max-width: 380px) {
    padding: 10px 16px 60px;
    .swiper-slide {
      &-prev,
      &-next {
        top: 10px;
      }
      &-prev {
        left: 10px;
        transform: rotate(-10deg);
      }
      &-next {
        right: 10px;
        transform: rotate(10deg);
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding: 10px 50px 100px;
    .swiper-slide {
      &-prev,
      &-next {
        top: 45px;
      }
    }
  }
`;

export default SwiperCardOptions;
