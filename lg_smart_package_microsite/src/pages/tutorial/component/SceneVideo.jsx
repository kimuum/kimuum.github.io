import React, { forwardRef } from "react";
import styled from "styled-components";

const SceneVideo = React.forwardRef(
  ({ isStep, isPrev, isNext, className = "", src, poster }, ref) => {
    return (
      <VideoBox
        ref={ref}
        className={`${className} ${isStep ? "show" : ""} ${
          isPrev ? "prev" : ""
        } ${isNext ? "next" : ""}`.trim()}
      >
        <video
          width="auto"
          height="100%"
          muted="muted"
          poster={poster}
          playsInline={true}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoBox>
    );
  }
);

const VideoBox = styled.div`
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

export default SceneVideo;
