import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

// common
import Button from "components/common/Button";
import ImageBox from "components/common/ImageBox";
import SwiperIntro from "sample/componets/SwiperIntro";

// image
import IconLightbulb from "assets/images/bridge/icon_lightbulb.svg";

//data
import { slideIntroData } from "assets/data/bridgeSwiperImagesIntro";

function BridgeContentSwiperType() {
  const slideIntro = slideIntroData.map((item, index) => (
    <BridgeContentSwiperSlide key={index.toString()} id={`${index}`}>
      <BridgeContentImageBox
        src={require("assets/images/thumbs/" + item.image)}
        alt=""
      />
      <BridgeContentText>
        숙면의 첫 번째 비결은 취침 전 시각의 자극을 줄이는 것입니다. <br />
        일몰에 맞춰 집안의 조명이 어두워지도록 설정하여, 편안한 수면 환경을
        만들어보세요.
      </BridgeContentText>
    </BridgeContentSwiperSlide>
  ));

  return (
    <BridgeContentContainer>
      <BridgeContentTopArea>
        <BridgeContentTitle>
          가장 잠자기 좋은 곳, <br />
          바로 우리 집
        </BridgeContentTitle>
        <BridgeContentButton>
          <Button aesthetic={"bgWhite"}>패키지 체험하기</Button>
        </BridgeContentButton>
      </BridgeContentTopArea>
      <BridgeContentMiddleArea>
        <BridgeContentSwiper slideCard={slideIntro} />
      </BridgeContentMiddleArea>
    </BridgeContentContainer>
  );
}

const BridgeContentContainer = styled.div`
  margin-top: 3.6rem;
  margin-bottom: 6rem;

  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 10rem;
    margin-bottom: 8.8rem;
  }
`;
const BridgeContentTopArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 2.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 5.6rem;
  }
`;
const BridgeContentMiddleArea = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin: 0 -1.6rem;
  }
`;
const BridgeContentTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  color: #0f0f0f;
  &:before {
    content: "";
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 auto 0.8rem;
    background: url(${IconLightbulb}) no-repeat center / cover;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 2.8rem;
    font-size: 4.8rem;
    &:before {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
`;
const BridgeContentText = styled.div`
  margin-top: 1.6rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  color: #0f0f0f;
  text-align: center;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 2rem;
    font-size: 1.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 0 1.6rem;
  }
`;

const BridgeContentImageBox = styled(ImageBox)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    height: 29.5rem;
    object-fit: cover;
  }
`;
const BridgeContentButton = styled.div`
  max-width: 16rem;
  margin: 0 auto;
`;

const BridgeContentSwiper = styled(SwiperIntro)``;
const BridgeContentSwiperSlide = styled(SwiperSlide)``;

export default BridgeContentSwiperType;
