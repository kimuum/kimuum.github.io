import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const BridgeThumbHero = ({ className, floatingText, data, packageName }) => {
  // 이미지 매칭
  const getImageDataByName = (name) => {
    const packageName = data.find((item) => item.name === name);
    return packageName && packageName.heroImages;
  };

  // thmbnail 이미지 배치
  const heroImageRef = useRef(null);
  const bridgeThumbnail = getImageDataByName(packageName).map((card, index) => (
    <BridgeThumbnailButton
      key={index.toString()}
      id={`${index}`}
      className={`btn-thumbnail ${index === 0 ? "active" : ""}`}
      aria-selected={index === 0 ? true : false}
      onClick={(e) => {
        if (heroImageRef.current) {
          const targetImage = heroImageRef.current.querySelector("img");
          targetImage.src = require("assets/images/bridge/" + card.src);
          targetImage.alt = card.alt;

          const allButtons =
            e.target.parentNode.querySelectorAll(".btn-thumbnail");

          allButtons.forEach((button) => {
            button.classList.remove("active");
            button.setAttribute("aria-selected", false);
          });

          e.target.setAttribute("aria-selected", true);
          e.target.classList.add("active");
        }
      }}
    >
      <img src={require("assets/images/bridge/" + card.src)} alt={card.alt} />
    </BridgeThumbnailButton>
  ));

  return (
    <ThumbHeroContainer className={className}>
      <ThumbHeroTopArea>
        {floatingText && (
          <FloatingText>
            ※소비자의 이해를 돕기 위해 연출된 이미지입니다.
          </FloatingText>
        )}
        <BridgeImageBox ref={heroImageRef}>
          <img
            src={require("assets/images/bridge/" +
              getImageDataByName(packageName)[0].src)}
            alt={getImageDataByName(packageName)[0].alt}
          />
        </BridgeImageBox>
      </ThumbHeroTopArea>
      <ThumbHeroBottomArea>{bridgeThumbnail}</ThumbHeroBottomArea>
    </ThumbHeroContainer>
  );
};

const BridgeThumbnailButton = styled.button`
  position: relative;
  width: 9rem;
  height: 9rem;
  margin-right: 2.4rem;
  border: 1px solid #dddddd;
  border-radius: 8px;
  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    z-index: 1;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    border: 2px solid black;
    border-radius: 8px;
    box-sizing: border-box;
  }
  &.active {
    &:after {
      opacity: 1;
    }
  }
  & > img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    &:focus-visible {
      outline: 2px solid blue;
    }
  }
`;
const BridgeImageBox = styled.div`
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const FloatingText = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 2.3rem;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: #333333;
  text-align: center;
`;

const ThumbHeroBottomArea = styled.div`
  margin-top: 2.4rem;
`;
const ThumbHeroTopArea = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 8rem;
    background-image: linear-gradient(
      180deg,
      rgba(244, 244, 244, 0) 0%,
      rgba(244, 244, 244, 0.9) 100%
    );
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const ThumbHeroContainer = styled.div``;

export default BridgeThumbHero;
