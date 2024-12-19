import React, { forwardRef } from "react";
import styled from "styled-components";

const FieldSceneSwiper = React.forwardRef(
  ({ isStep, isPrev, isNext, className = "", children }, ref) => {
    return (
      <SceneSwiper
        ref={ref}
        className={`${className} ${isStep ? "show" : ""} ${
          isPrev ? "prev" : ""
        } ${isNext ? "next" : ""}`.trim()}
      >
        {children}
      </SceneSwiper>
    );
  }
);
const SceneSwiper = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
`;

export default FieldSceneSwiper;
