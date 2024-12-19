import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

//common
import ImageBox from "components/common/ImageBox";
import SwiperNormal from "components/common/SwiperNormal";
import ContentProductThumbnail from "pages/bridge/component/ContentProductThumbnail";

// images
import IconDelivery from "assets/images/bridge/contents/icon_delivery.png";
import ArrowDown from "assets/images/common/arrow_more_down.svg";
import ArrowUp from "assets/images/common/arrow_more_up.svg";

// function
import ResizeMobile from "components/common/ResizeMobile";

//제품 data
import { productData } from "assets/data/bridgeProducts";

function ContentLayout({ data }) {
  const isImageTypeMobile = ResizeMobile(); // 디바이스 모바일/PC 상태 : true 일 때 모바일
  const [isAccordion, setAccordion] = useState(false); // 닫기 버튼 유무
  const packageListLength = data.packageList.length; // 패키지 제품 수

  // 제품 src 찾기
  const getSrcDataByName = (name) => {
    const product = productData.find((item) => item.name === name);
    return product ? product.src : null;
  };
  // 제품 alt 찾기
  const getAltDataByName = (name) => {
    const product = productData.find((item) => item.name === name);
    return product ? product.alt : null;
  };
  // 제품 url 찾기
  const getUrlDataByName = (name) => {
    const product = productData.find((item) => item.name === name);
    return product ? product.url : null;
  };

  // 슬라이드 slice
  const slideSliceArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  const slides = slideSliceArray(data.packageList, 5);
  return (
    <ContentsContainer>
      {/* 타이틀 */}
      <TopTitleArea>
        <TitleInnerBox themeColor={data.themeColor}>
          {isImageTypeMobile ? (
            <TopTitleImageBox
              src={require(`assets/images/bridge/contents/${data.imageFolder}/${data.topTitleArea.titleImage.src}_mo.jpg`)}
              alt={data.topTitleArea.titleImage.alt}
            />
          ) : (
            <TopTitleImageBox
              src={require(`assets/images/bridge/contents/${data.imageFolder}/${data.topTitleArea.titleImage.src}_pc.jpg`)}
              alt={data.topTitleArea.titleImage.alt}
            />
          )}

          <TopTitleBox>
            <div className="top-main-box">
              <span className="top-title-label">
                {data.topTitleArea.titleLabel}
              </span>
              <h2 className="top-title-main">{data.topTitleArea.titleMain}</h2>
            </div>
            <div className="top-sub-box">
              {data.topTitleArea.titleSub.map((sub, index) => (
                <div key={`top-${index.toString()}`} className="top-title-subs">
                  <span className="sub-label">{sub.label}</span>
                  <div className="sub-text">{sub.text}</div>
                </div>
              ))}
            </div>
          </TopTitleBox>
        </TitleInnerBox>
        <NoticeBox>{noticeText}</NoticeBox>
      </TopTitleArea>

      {/* 내용 */}
      <ContentInner>
        <MiddleTitleArea>
          <MiddleTitleBox>
            <div className="middle-place-area">
              <strong className="place-title">추천 설치 공간</strong>
              <div className="place-labels">
                {data.middleTitleArea.titleLabel.map((label, index) => (
                  <span key={`label-${index.toString()}`}>{label.place}</span>
                ))}
              </div>
            </div>
            <div className="middle-title-main">
              {data.middleTitleArea.titleMain}
            </div>
            <div className="middle-title-sub">
              {data.middleTitleArea.titleSub}
            </div>
          </MiddleTitleBox>
          {isImageTypeMobile ? (
            <MiddleTitleImageBox
              src={require(`assets/images/bridge/contents/${data.imageFolder}/${data.middleTitleArea.titleImage.src}_mo.jpg`)}
              alt={data.middleTitleArea.titleImage.alt}
            />
          ) : (
            <MiddleTitleImageBox
              src={require(`assets/images/bridge/contents/${data.imageFolder}/${data.middleTitleArea.titleImage.src}_pc.jpg`)}
              alt={data.middleTitleArea.titleImage.alt}
            />
          )}

          <NoticeBox>{noticeText}</NoticeBox>
        </MiddleTitleArea>

        {data.middleFlexArea.map((row, index) => (
          <MiddleFlexArea
            key={index.toString()}
            className={row.textFirst === true ? "text-first" : "img-first"}
          >
            {row.textFirst === true ? (
              <>
                <div className="row-left">
                  <ArticleTextBox>
                    <span className="article-label">{row.articleLabel}</span>
                    <div className="article-title">{row.articleTitle}</div>
                    <div className="article-text">{row.articleText}</div>
                  </ArticleTextBox>
                </div>
                <div className="row-right">
                  {isImageTypeMobile ? (
                    <ArticleImageBox
                      src={require(`assets/images/bridge/contents/${data.imageFolder}/${row.articleImage.src}_mo.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  ) : (
                    <ArticleImageBox
                      src={require(`assets/images/bridge/contents/${data.imageFolder}/${row.articleImage.src}_pc.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="row-right">
                  <ArticleTextBox>
                    <span className="article-label">{row.articleLabel}</span>
                    <div className="article-title">{row.articleTitle}</div>
                    <div className="article-text">{row.articleText}</div>
                  </ArticleTextBox>
                </div>
                <div className="row-left">
                  {isImageTypeMobile ? (
                    <ArticleImageBox
                      src={require(`assets/images/bridge/contents/${data.imageFolder}/${row.articleImage.src}_mo.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  ) : (
                    <ArticleImageBox
                      src={require(`assets/images/bridge/contents/${data.imageFolder}/${row.articleImage.src}_pc.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  )}
                </div>
              </>
            )}
          </MiddleFlexArea>
        ))}

        {/* 구성 제품 */}
        <BottomProductArea>
          <ProductTitleBox>
            <strong className="product-title">
              {data.packageName}
              <br /> 구성제품
            </strong>
            <div className="product-text">
              구성 제품에 대한 상세 정보는 각 제품을 <br />
              클릭하시면 확인하실 수 있습니다.
            </div>
          </ProductTitleBox>

          {isImageTypeMobile ? (
            <ProductAccordion className={!isAccordion ? "" : "active"}>
              <div className="accordion-box">
                {data.packageList.map((item, index) => (
                  <ContentProductThumbnail
                    key={`item-${index.toString()}`}
                    src={getSrcDataByName(item)}
                    alt={getAltDataByName(item)}
                    name={getAltDataByName(item)}
                    toLink={getUrlDataByName(item)}
                  />
                ))}
              </div>
              {packageListLength > 6 && (
                <div className="accordion-btn">
                  <button
                    type="button"
                    onClick={() => {
                      setAccordion((prev) => !prev);
                    }}
                  >
                    더보기{!isAccordion ? "" : "닫기"}
                  </button>
                </div>
              )}
            </ProductAccordion>
          ) : (
            <ProductSwiper loop={false} pagination={false}>
              {packageListLength < 6 ? (
                <SwiperSlide>
                  <div className="product-inner flex-center">
                    {data.packageList.map((item, index) => (
                      <ContentProductThumbnail
                        key={`item-${index.toString()}`}
                        src={getSrcDataByName(item)}
                        alt={getAltDataByName(item)}
                        name={getAltDataByName(item)}
                        toLink={getUrlDataByName(item)}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ) : (
                slides.map((slideItems, slideIndex) => (
                  <SwiperSlide key={`slide-${slideIndex}`}>
                    <div className="product-inner">
                      {slideItems.map((item, itemIndex) => (
                        <ContentProductThumbnail
                          key={`item-${slideIndex}-${itemIndex}`}
                          src={getSrcDataByName(item)}
                          alt={getAltDataByName(item)}
                          name={getAltDataByName(item)}
                          toLink={getUrlDataByName(item)}
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                ))
              )}
            </ProductSwiper>
          )}
        </BottomProductArea>

        {/* 프리미엄 배송/설치 서비스 */}
        <NoticeInstallArea>
          <strong className="notice-title">프리미엄 배송/설치 서비스</strong>
          <div className="notice-text">
            복잡하고 번거로운 제품 설치로 힘드셨나요? ThinQ AI Home이 제공하는
            배송/설치 서비스를 이용해 보세요. <br />
            패키지 구성 제품 전체를 구매하시면 숙련된 전문 설치 기사님이 직접
            방문하여 배송 및 설치를 해드려요.
          </div>
        </NoticeInstallArea>
      </ContentInner>
    </ContentsContainer>
  );
}

// 구성제품
const ProductAccordion = styled.div`
  &.active {
    & > .accordion-box {
      max-height: initial;
    }
    & > .accordion-btn {
      & > button {
        &:after {
          background-image: url(${ArrowUp});
        }
      }
    }
  }
  & > .accordion-box {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    max-height: 33.2rem;
    margin: -0.4rem;
  }
  & > .accordion-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5;
      color: #666666;
      text-align: center;
      &:after {
        content: "";
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.8rem;
        background: url(${ArrowDown}) no-repeat center;
      }
    }
  }
`;
const ProductSwiper = styled(SwiperNormal)`
  & > .swiper-wrapper {
    & > .swiper-slide {
      & > .product-inner {
        display: flex;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &.swiper {
      padding: 0 2.4rem;
      margin: 0 -2.4rem;
    }
    &:before,
    &:after {
      width: 2.4rem;
    }
    & > .swiper-wrapper {
      & > .swiper-slide {
        & > .product-inner {
          justify-content: flex-start;
          align-items: stretch;
          &.flex-center {
            justify-content: center;
          }
          margin: -0.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1480px) {
    &.swiper {
      margin: 0;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &.swiper {
      padding: 0;
    }
    & > .swiper-wrapper {
      & > .swiper-slide {
        & > .product-inner {
          flex-wrap: wrap;
          margin: -0.4rem;
        }
      }
    }
  }
`;
const ProductTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > .product-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.3;
    color: #0f0f0f;
    text-align: center;
  }
  & > .product-text {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2;
    color: #666666;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 25rem;
    margin-bottom: 6.4rem;
    p {
      display: inline;
    }
    br {
      display: none;
    }
    & > .product-title {
      font-size: 4.8rem;
    }
    & > .product-text {
      margin-top: 1.6rem;
      font-size: 2rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 8.9rem;
    margin-bottom: 5rem;
    & > .product-text {
      text-align: center;
    }
  }
`;
const BottomProductArea = styled.div``;

// 배송/설치 서비스 안내
const NoticeInstallArea = styled.div`
  box-sizing: border-box;
  background: url(${IconDelivery}) no-repeat right bottom / 342px auto #f0f4f9;
  word-break: keep-all;
  & > .notice-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.6px;
    color: #0f0f0f;
  }
  & > .notice-text {
    max-width: 88.9rem;
    margin-top: 1.2rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
    color: #666666;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 5.3rem 7rem;
    padding-right: 25rem;
    margin-top: 17rem;
    min-height: 22.6rem;
    border-radius: 10px;
    & > .notice-title {
      font-size: 3rem;
    }
    & > .notice-text {
      margin-top: 2rem;
      font-size: 2rem;
    }
    br {
      display: none;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 3.8rem 1rem 22.5rem;
    margin-top: 8.9rem;
    background-position: center bottom;
    text-align: center;
  }
`;

const ArticleTextBox = styled.div`
  & > .article-label {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;
    color: #666666;
  }
  & > .article-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.3;
    color: #0f0f0f;
  }
  & > .article-text {
    margin-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #333333;
    letter-spacing: -0.01rem;
  }
  .mo-inline {
    display: block;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 100%;
    max-width: 62.7rem;
    br {
      display: none;
    }
    & > .article-label {
      font-size: 2.4rem;
    }
    & > .article-title {
      font-size: 4.8rem;
    }
    & > .article-text {
      margin-top: 2rem;
      font-size: 1.8rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    text-align: center;
    .mo-inline {
      display: inline;
    }
    & > .article-label {
      margin-bottom: 1rem;
    }
  }
`;
const ArticleImageBox = styled(ImageBox)`
  overflow: hidden;
  border-radius: 25px;

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
  }
`;
const MiddleFlexArea = styled.div`
  margin-bottom: 8.9rem;
  & > .row-left {
    order: 0;
  }
  & > .row-right {
    order: 1;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12.2rem;
    &.img-first {
      & > .row-right {
        margin-left: 9.6rem;
        margin-right: auto;
      }
    }
    &.text-first {
      & > .row-left {
        margin-right: 6.3rem;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
  }
`;

const MiddleTitleImageBox = styled(ImageBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    overflow: hidden;
    border-radius: 18px;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: auto;
    margin-left: -1.6rem;
    margin-right: -1.6rem;
  }
`;
const MiddleTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6rem;
  word-break: keep-all;
  & > .middle-place-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.3;
    color: #666666;
    & > .place-title {
      display: flex;
      justify-content: center;
      align-items: center;
      &:after {
        content: "|";
        padding: 0 1.3rem;
        font-size: 1.2rem;
      }
    }
    & > .place-labels {
      span {
        &:last-child {
          &:after {
            display: none;
          }
        }
        &:after {
          content: ",";
        }
      }
    }
  }
  & > .middle-title-main {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.4;
    color: #0f0f0f;
    text-align: center;
  }
  & > .middle-title-sub {
    margin-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #000000;
    text-align: center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 6.1rem;
    br {
      display: none;
    }
    & > .middle-place-area {
      margin-bottom: 1.4rem;
      font-size: 2.4rem;
      & > .place-title {
        &:after {
          font-size: 2.2rem;
        }
      }
    }
    & > .middle-title-main {
      font-size: 4.8rem;
    }
    & > .middle-title-sub {
      font-size: 1.8rem;
    }
  }
`;
const MiddleTitleArea = styled.div`
  margin-bottom: 4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 14.3rem;
  }
`;

const NoticeBox = styled.div`
  margin-top: 1rem;
  padding-left: 7px;
  text-indent: -7px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  color: #aaaaaa;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 1.2rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const TopTitleImageBox = styled(ImageBox)`
  min-height: 35rem;
  /* PC */
  @media screen and (min-width: 980px) {
    min-height: 40rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
const TopTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  color: #ffffff;
  word-break: keep-all;
  & > .top-main-box {
    & > .top-title-label {
      display: block;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.3;
      color: inherit;
    }
    & > .top-title-main {
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.3;
      color: inherit;
    }
  }
  & > .top-sub-box {
    box-sizing: border-box;
    & > .top-title-subs {
      margin-top: 1.2rem;
      &:first-child {
        margin-top: 0;
      }
      & > .sub-label {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.3;
        color: inherit;
      }
      & > .sub-text {
        margin-top: 0.4rem;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.3;
        color: inherit;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 21%;
    & > .top-main-box {
      margin-bottom: 3.1rem;
      br {
        display: none;
      }
      & > .top-title-label {
        font-size: 1.8rem;
      }
      & > .top-title-main {
        font-size: 3.8rem;
      }
    }
    & > .top-sub-box {
      & > .top-title-subs {
        margin-top: 2.7rem;
        & > .sub-label {
          font-size: 1.4rem;
        }
        & > .sub-text {
          font-size: 2.4rem;
        }
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    /* background-color: ${(props) => props.themeColor}; */

    & > .top-main-box {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 6rem 0 0;
      box-sizing: border-box;
    }
    & > .top-sub-box {
      width: 100%;
      align-self: flex-start;
      padding: 6rem 1.6rem;
      text-align: left;
    }
  }
`;
const TopTitleArea = styled.div`
  position: relative;
  max-width: 161.4rem;
  margin: 0 auto;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 12.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-left: -1.6rem;
    margin-right: -1.6rem;
    margin-bottom: 9rem;
    ${NoticeBox} {
      margin: 1rem 1.6rem 0;
    }
  }
`;
const TitleInnerBox = styled.div`
  background-color: ${(props) => props.themeColor};
`;

const ContentInner = styled.div`
  max-width: 138rem;
  margin: 0 auto;
`;
const ContentsContainer = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    padding-top: 10rem;
  }
`;

const noticeText =
  "* 소비자의 이해를 돕기 위해 연출된 이미지이며, 제품별 색상 및 스펙은 상이합니다.";

export default ContentLayout;
