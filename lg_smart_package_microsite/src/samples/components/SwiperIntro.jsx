import styled from "styled-components";
import { Swiper } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperIntro = ({ className, slideCard }) => {
  const SwiperIntroSettings = {
    pagination: {
      clickable: false,
      el: ".swiper-intro-pager",
    },
    modules: [EffectFade, Pagination],
    spaceBetween: 0,
    slidesPerView: 1,
  };

  return (
    <SwiperIntroContainer className={className}>
      <Swiper {...SwiperIntroSettings} className="swiper-intro">
        {slideCard}
      </Swiper>
      <div className="swiper-intro-pager"></div>
    </SwiperIntroContainer>
  );
};

const SwiperIntroContainer = styled.div`
  .swiper {
    &-intro-pager {
      position: static;
      margin-top: 1.6rem;
      text-align: center;
    }
    &-pagination-bullet {
      opacity: 1;
      width: 6px;
      height: 6px;
      background-color: #cccccc;
      border-radius: 6px;
    }
    &-pagination-bullet-active {
      width: 18px;
      background-color: black;
    }
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    .swiper {
      &-intro-pager {
        padding-bottom: 3.6rem;
      }
    }
  }

  /* PC */
  @media screen and (min-width: 769px) {
    .swiper {
      &-intro-pager {
        margin-top: 2rem;
      }
      &-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 8px;
      }
      &-pagination-bullet-active {
        width: 24px;
      }
    }
  }
`;

export default SwiperIntro;
