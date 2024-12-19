import React, { forwardRef } from "react";
import styled from "styled-components";

const SceneImage = React.forwardRef(
  ({ isStep, isPrev, isNext, className = "", src, alt }, ref) => {
    return (
      <ImageBox
        ref={ref}
        className={`${className} ${isStep ? "show" : ""} ${
          isPrev ? "prev" : ""
        } ${isNext ? "next" : ""}`.trim()}
      >
        <img src={src} alt={alt} />
      </ImageBox>
    );
  }
);
const ImageBox = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 0;
  bottom: 0;
  transition: opacity 0.5s;
  &.prev {
    z-index: 2;
  }
  &.next {
    z-index: 1;
  }
  &.show {
    z-index: 3;
    opacity: 1;
  }
  & > img {
    display: block;
    width: auto;
    height: 100%;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    right: 0;
    height: 76.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    right: -6.4rem;
    height: 100%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: -3rem;
  }
`;

export default SceneImage;
