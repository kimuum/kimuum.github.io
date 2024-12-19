import { Link } from "react-router-dom";
import styled from "styled-components";

// images
import ArrowLinkWhite from "assets/images/common/arrow_link_white.svg";

function HomeRecommendThumbnail({ toLink, bgSrc, children, btnText, label }) {
  return (
    <RecommendCardWithButton to={toLink} aria-label={`${label} ${btnText}`}>
      <RecommendCardTitle aria-hidden="true">{children}</RecommendCardTitle>
      {btnText && (
        <RecommendButton aria-hidden="true">{btnText}</RecommendButton>
      )}
      <RecommendBgImageBox
        style={{
          backgroundImage: `url(${bgSrc})`,
        }}
      ></RecommendBgImageBox>
    </RecommendCardWithButton>
  );
}

const RecommendCardTitle = styled.div`
  position: relative;
  z-index: 2;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;

  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 2rem;
    line-height: 1.3;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    height: 4rem;
  }
`;
const RecommendButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  white-space: nowrap;

  &:after {
    content: "";
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 2px;
    background: url(${ArrowLinkWhite}) no-repeat center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 1.8rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
  }
`;
const RecommendBgImageBox = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 16.3rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const RecommendCardContainer = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding: 2rem 1.6rem;
  box-sizing: border-box;
  border-radius: 6px;
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 2.8rem 2.4rem;
    border-radius: 10px;
  }
`;
const RecommendCardWithButton = styled(RecommendCardContainer)`
  &:focus {
    ${RecommendButton} {
      color: #ffffff;
    }
  }
`;

export default HomeRecommendThumbnail;
