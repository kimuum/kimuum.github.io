import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

// common
import Button from "components/common/Button";
import SwiperNormal from "components/common/SwiperNormal";

function RecommendPackageCard({
  className,
  src,
  alt = "",
  title,
  description,
  group,
  products,
  labelData = [],
  buttonTitle,
}) {
  const packageProductBoxRef = useRef(null); //스와이퍼
  const packageLength = products.length; //구성 제품 수
  const [isSlideLength, setSlideLength] = useState(false); //스와이퍼 슬라이드 수량 체크

  const packageProducts = products.map((item, index) => (
    <PackageProductSlide key={index.toString()}>
      <PackageProduct>
        <ProductItem>
          <img
            src={require(`assets/images/bridge/${item.src}`)}
            alt={item.name}
          />
        </ProductItem>
        <span className="product-name">{item.name}</span>
      </PackageProduct>
    </PackageProductSlide>
  ));

  // 이전/다음 버튼 미노출
  const swiperPackageLengthCheck = () => {
    const packageProductBox = packageProductBoxRef.current;
    const productSlide =
      packageProductBox.querySelector(".swiper-slide").offsetWidth + 16;
    const maxSlideWidth = packageProductBox.offsetWidth;
    const currentSlidetWidth = productSlide * packageLength;

    if (
      packageProductBox &&
      productSlide &&
      currentSlidetWidth > maxSlideWidth
    ) {
      setSlideLength(true);
    } else {
      setSlideLength(false);
    }
  };

  const hashs = group.map((item, index) => (
    <span key={index.toString()}>{item.hash}</span>
  ));

  const labels = labelData.map((type, index) => (
    <Label key={index.toString()} id={`${index}`}>
      {type.theme}
    </Label>
  ));

  useEffect(() => {
    window.addEventListener("load", swiperPackageLengthCheck);
    window.addEventListener("resize", swiperPackageLengthCheck);
    return () => {
      window.removeEventListener("load", swiperPackageLengthCheck);
      window.removeEventListener("resize", swiperPackageLengthCheck);
    };
  }, []);

  return (
    <PackageCardContainer className={className} src={src}>
      <PackageHead>
        <PackageThumbnail>
          <img src={src} alt={alt} />
        </PackageThumbnail>
      </PackageHead>
      <PackageBody>
        <BodyTopArea>
          {labelData && <PackageLabels>{labels}</PackageLabels>}
          <PackageTitle>{title}</PackageTitle>
          <PackageDescription>{description}</PackageDescription>
        </BodyTopArea>
        <BodyMiddleArea>
          <PackageSubTitle>
            구성 제품 (<strong className="color-red">{packageLength}</strong>)
          </PackageSubTitle>
          <div ref={packageProductBoxRef}>
            <PackageProductSwiper
              className={isSlideLength ? "has-navi" : ""}
              perview={"auto"}
              loop={false}
              pagination={false}
              navigation={isSlideLength}
            >
              {packageProducts}
            </PackageProductSwiper>
          </div>
        </BodyMiddleArea>
        <BodyBottomArea>
          <PackageLocation>
            <span className="location-title">추천 장소</span>
            <div className="location-hash-group">{hashs}</div>
          </PackageLocation>
          <PackageButtonBox>
            <PackageButtonPrev aesthetic={"bgWhite"}>
              체험하기
            </PackageButtonPrev>
            <PackageButtonNext aesthetic={"bgWhite"}>
              {buttonTitle}
            </PackageButtonNext>
          </PackageButtonBox>
        </BodyBottomArea>
      </PackageBody>
    </PackageCardContainer>
  );
}

const PackageThumbnail = styled.div`
  overflow: hidden;
  height: 20rem;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    height: 28rem;
  }
`;

const PackageButtonPrev = styled(Button)`
  flex: 1;
  max-width: 100%;
  height: 3.2rem;
  margin: 0 0.4rem;
  font-size: 1.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 1.4rem;
  }
`;
const PackageButtonNext = styled(Button)`
  flex: 1;
  max-width: 100%;
  height: 3.2rem;
  margin: 0 0.4rem;
  font-size: 1.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 1.4rem;
  }
`;
const PackageButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.6rem;
  margin-left: -0.4rem;
  margin-right: -0.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 100%;
    margin-top: 2rem;
    margin-left: -0.8rem;
    margin-right: -0.8rem;
  }
`;

const PackageLocation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > .location-title {
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    color: #0f0f0f;
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 12px;
      margin: 0 8px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  & > .location-hash-group {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    color: #008282;

    //말줄임
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    & > span {
      padding-right: 0.8rem;
      &:after {
        content: ",";
      }
      &:last-child {
        padding-right: 0;
        &:after {
          display: none;
        }
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .location-title {
      font-size: 1.6rem;
    }
    & > .location-hash-group {
      font-size: 1.6rem;

      & > span {
        padding-right: 1rem;
      }
    }
  }
`;
const PackageProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  & > .product-name {
    display: block;
    width: 100%;
    margin-top: 0.4rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.3;
    color: #0f0f0f;
    text-align: center;
    word-break: keep-all;
    //말줄임
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .product-name {
      margin-top: 0.6rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4;
    }
  }
`;
const ProductItem = styled.div`
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid #eeeeee;
  background-color: #dddddd;
  border-radius: 7.5rem;
  box-sizing: border-box;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

const PackageProductSlide = styled(SwiperSlide)`
  width: 4.8rem;
  margin-right: 0.8rem;
  &:last-child {
    margin-right: 0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 7.5rem;
    margin-right: 1.6rem;
  }
`;

const PackageProductSwiper = styled(SwiperNormal)`
  /* PC */
  @media screen and (min-width: 769px) {
    &.swiper {
      padding: 0;
      &.has-navi {
        padding: 0 4.8rem;
        &:before,
        &:after {
          display: block;
          width: 4.8rem;
        }
      }
      &:before,
      &:after {
        display: none;
      }
      &:before {
        background: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          #fff 20.09%
        );
      }
      &:after {
        background: linear-gradient(
          270deg,
          #fff 79.91%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .swiper-button-prev,
      .swiper-button-next {
        width: 2.7rem;
        height: 2.7rem;
        &:after {
          width: 100%;
          height: 100%;
          background-size: 7px auto;
        }
      }
      .swiper-button-prev {
        left: 6px;
      }
      .swiper-button-next {
        right: 6px;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &.swiper {
      padding: 0;
      &.has-navi {
        margin-left: -1.6rem;
        margin-right: -1.6rem;
        padding: 0 1.6rem;
      }
      &:before,
      &:after {
        display: none;
      }
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
`;
const PackageSubTitle = styled.div`
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5;
  color: #0f0f0f;
  & > .color-red {
    color: #ea1917;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
`;
const PackageDescription = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333333;
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-wrap: break-word;

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const PackageTitle = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
  }
`;
const PackageLabels = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.4rem;
  }
`;
const Label = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: #ea1917;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 1rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    background-color: #dddddd;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const BodyBottomArea = styled.div`
  width: 100%;
  margin-top: 1rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 0.8rem;
  }
`;
const BodyMiddleArea = styled.div`
  width: 100%;
  margin-top: 1rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 1.6rem;
    margin-bottom: auto;
  }
`;
const BodyTopArea = styled.div`
  width: 100%;
`;

const PackageHead = styled.div``;
const PackageBody = styled.div`
  padding: 1.6rem 1.6rem 2.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2.8rem;
    height: calc(100% - 28rem);
    box-sizing: border-box;
  }
`;
const PackageCardContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  /* PC */
  @media screen and (min-width: 769px) {
    border-radius: 16px;
  }
`;

export default RecommendPackageCard;
