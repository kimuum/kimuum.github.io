import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";
import SwiperPageAutoPlay from "components/common/SwiperPageAutoPlay";

// images
import ArrowLinkWhite from "assets/images/common/arrow_link_white.svg";

// function
import ResizeMobile from "components/common/ResizeMobile";

function HomeBanner() {
  const isHomeBannerMobile = ResizeMobile(); // 디바이스 모바일/PC 상태 : true 일 때 모바일

  return (
    <HomeBannerContainer>
      <HomeBannerSwiper>
        <HomeBannerSwiperSlide>
          <BannerContent>
            <BannerText>
              우리 집에 딱 맞는 <br />
              공기청정기
            </BannerText>
            <BannerLink to="/">자세히 보기</BannerLink>
          </BannerContent>
          {isHomeBannerMobile ? (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_mo.jpg")}
              alt=""
            />
          ) : (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_pc.jpg")}
              alt=""
            />
          )}
        </HomeBannerSwiperSlide>
        <HomeBannerSwiperSlide>
          <BannerContent>
            <BannerText>
              우리 집에 딱 맞는 <br />
              공기청정기
            </BannerText>
            <BannerLink to="/">자세히 보기</BannerLink>
          </BannerContent>
          {isHomeBannerMobile ? (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_mo.jpg")}
              alt=""
            />
          ) : (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_pc.jpg")}
              alt=""
            />
          )}
        </HomeBannerSwiperSlide>
        <HomeBannerSwiperSlide>
          <BannerContent>
            <BannerText>
              우리 집에 딱 맞는 <br />
              공기청정기
            </BannerText>
            <BannerLink to="/">자세히 보기</BannerLink>
          </BannerContent>
          {isHomeBannerMobile ? (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_mo.jpg")}
              alt=""
            />
          ) : (
            <BannerImageBox
              src={require("assets/images/home/home_banner_01_pc.jpg")}
              alt=""
            />
          )}
        </HomeBannerSwiperSlide>
      </HomeBannerSwiper>
    </HomeBannerContainer>
  );
}

const BannerText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  br {
    display: none;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    br {
      display: block;
    }
  }
`;
const BannerContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 0.2rem;
  padding: 2.4rem;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    justify-content: center;
    padding: 1rem 9.5rem;
    margin-bottom: 0.8rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 1rem 5rem;
  }
`;
const BannerImageBox = styled(ImageBox)`
  display: block;
  overflow: hidden;
  border-radius: 8px;
  /* PC */
  @media screen and (min-width: 769px) {
    border-radius: 16px;
  }
`;
const BannerLink = styled(Link)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  &:after {
    content: "";
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 2px;
    background: url(${ArrowLinkWhite}) no-repeat center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
    font-weight: 500;
    &:hover {
      color: #ffffff;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    opacity: 0.7;
    &:after {
      background-size: 90% auto;
    }
  }
`;

const HomeBannerSwiperSlide = styled(SwiperSlide)`
  position: relative;
`;
const HomeBannerSwiper = styled(SwiperPageAutoPlay)`
  & > .swiper-controller-area {
    bottom: 1.6rem;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .swiper-controller-area {
      bottom: 2rem;
    }
  }
`;
const HomeBannerContainer = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

export default HomeBanner;
