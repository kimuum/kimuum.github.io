import React, { useState, useEffect } from "react";
import styled from "styled-components";

//common
import { SwiperSlide } from "swiper/react";
import SwiperPager from "components/common/SwiperPager";
import ImageBox from "components/common/ImageBox";

//data
import { slideCardData } from "assets/data/bridgeSwiperImages";

function BridgeHero({ className = "" }) {
  // 디바이스 리사이징
  const [isHeroMobile, setHeroMobile] = useState(false);
  function handleResize() {
    const mobileCheck = window.innerWidth <= 768;
    setHeroMobile(mobileCheck);
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const slideCard = slideCardData.map((card, index) => (
    <SwiperSlide key={index.toString()} id={`${index}`} className="card-box">
      <ImageBox
        src={require("assets/images/thumbs/" + card.mainImage)}
        alt={card.alt}
      />
    </SwiperSlide>
  ));
  const slideThumb = slideCardData.map((card, index) => (
    <li key={index.toString()} id={`${index}`} className="thumb-box">
      <ImageBox
        src={require("assets/images/thumbs/" + card.thumbImage)}
        alt={card.alt}
      />
    </li>
  ));

  return (
    <div className={className}>
      {isHeroMobile ? (
        <SwiperPager slideCard={slideCard} />
      ) : (
        <BridgeThumbsContainer>
          <div className="visual-container">
            <ImageBox
              src={require("assets/images/thumbs/" +
                slideCardData[0].mainImage)}
              alt={slideCardData[0].alt}
            />
          </div>
          <div className="thumbnail-navigation">
            <ul className="thumbnail-list-box">
              {slideThumb}
              <li className="thumb-box">
                <button type="button" className="thumb-more">
                  8+
                </button>
                <img
                  src={require("assets/images/thumbs/" +
                    slideCardData[0].thumbImage)}
                  alt={slideCardData[0].alt}
                />
              </li>
            </ul>
          </div>
        </BridgeThumbsContainer>
      )}
    </div>
  );
}

const BridgeThumbsContainer = styled.div`
  width: 100%;
  .visual-container {
  }
  .thumbnail-list-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 -1.2rem;
    & > li {
      position: relative;
      margin: 0 1.2rem;
    }
    .thumb {
      &-box {
        width: 9rem;
        line-height: 0;
        cursor: pointer;
      }
      &-more {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 2rem;
        color: #ffffff;
      }
    }
  }
`;

export default BridgeHero;
