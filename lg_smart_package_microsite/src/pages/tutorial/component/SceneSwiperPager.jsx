import React, { forwardRef } from "react";
import styled from "styled-components";

const SceneSwiperPager = React.forwardRef(({ className = "" }, ref) => {
  return <PagerContainer ref={ref} className={className} />;
});

const PagerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > .swiper-pagination-bullet {
    opacity: 0.2;
    position: relative;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 2px;
    border-radius: 1rem;
    background: #fff;
    cursor: pointer;
    &.swiper-pagination-bullet-active {
      opacity: 1;
      width: 2rem;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 2.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export default SceneSwiperPager;
