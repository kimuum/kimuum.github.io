import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";
import VideoBox from "components/common/VideoBox";
import HomeHeroSwiper from "components/common/SwiperPageAutoPlay";

function HomeHero() {
  const [isHomeHeroMobile, setHomeHeroMobile] = useState(false); // 디바이스 모바일/PC 상태 : true 일 때 모바일

  function handleResizeMobile() {
    const mobileCheck = window.innerWidth <= 640;
    setHomeHeroMobile(mobileCheck);
  }
  useEffect(() => {
    handleResizeMobile();
    window.addEventListener("resize", handleResizeMobile);

    return () => {
      window.removeEventListener("resize", handleResizeMobile);
    };
  }, [isHomeHeroMobile]);

  return (
    <HomeHeroContainer>
      <HomeHeroSwiper>
        <HomeHeroSwiperSlide>
          <HeroContentArea>
            <HeroContentInner>
              <h2 className="hero-con-title">
                공간의 완성으로 <br />더 편리한 생활
              </h2>
              <div className="hero-con-text">
                ThinQ AI Home으로 <br />
                언제 어디서나 편리함을 누리세요.
              </div>
            </HeroContentInner>
          </HeroContentArea>
          {isHomeHeroMobile ? (
            <HeroSlideImageBox
              src={require("assets/images/home/img_home_hero_01_mo.jpg")}
              alt=""
            />
          ) : (
            <HeroSlideImageBox
              src={require("assets/images/home/img_home_hero_01_pc.jpg")}
              alt=""
            />
          )}
        </HomeHeroSwiperSlide>
        <HomeHeroSwiperSlide>
          <HeroContentArea>
            <HeroContentInner>
              <h2 className="hero-con-title">
                공간의 완성으로 <br />더 편리한 생활
              </h2>
              <div className="hero-con-text">
                ThinQ AI Home으로 <br />
                언제 어디서나 편리함을 누리세요.
              </div>
            </HeroContentInner>
          </HeroContentArea>
          {isHomeHeroMobile ? (
            <HeroSlideImageBox
              src={require("assets/images/home/img_home_hero_01_mo.jpg")}
              alt=""
            />
          ) : (
            <HeroSlideImageBox
              src={require("assets/images/home/img_home_hero_01_pc.jpg")}
              alt=""
            />
          )}
        </HomeHeroSwiperSlide>
      </HomeHeroSwiper>
    </HomeHeroContainer>
  );
}
const HomeHeroSwiperSlide = styled(SwiperSlide)`
  position: relative;
`;
const HeroSlideImageBox = styled(ImageBox)`
  max-width: 192rem;
  margin: 0 auto;
`;
const HeroSlideVideoBox = styled(VideoBox)``;

const HeroContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 138rem;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  & > .hero-con-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -1px;
    color: #ffffff;
    word-break: keep-all;
  }
  & > .hero-con-text {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.75);
    word-break: keep-all;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    justify-content: center;
    & > .hero-con-title {
      font-size: 4.8rem;
    }
    & > .hero-con-text {
      margin-top: 1.8rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-bottom: 6.2rem;
    & > .hero-con-text {
      margin-top: 1.5rem;
      color: #e6ddd1;
    }
  }
`;
const HeroContentArea = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 1.6rem;
  box-sizing: border-box;
`;
const HomeHeroContainer = styled.div``;

export default HomeHero;
