import { Link } from "react-router-dom";
import styled from "styled-components";

import ArrowMoreCircle from "assets/images/home/arrow_more_circle.svg";
import ImageMoreElectronics from "assets/images/home/img_more_electronics.png";
import ImageMoreThinq from "assets/images/home/img_more_thinq.png";

function HomeSubMore() {
  return (
    <HomeSubMoreContainer>
      <MoreContentFlex>
        <MoreContentWithElectronics>
          <MoreContentLabel>스마트홈 구독 가이드</MoreContentLabel>
          <MoreContentTitle>
            가전과 함께 <br />
            구독하세요
          </MoreContentTitle>
          <MoreIcon></MoreIcon>
        </MoreContentWithElectronics>
        <MoreContentWithThinq>
          <MoreContentLabel>더 알아보기</MoreContentLabel>
          <MoreContentTitle>LG ThinQ</MoreContentTitle>
          <MoreIcon></MoreIcon>
        </MoreContentWithThinq>
      </MoreContentFlex>
    </HomeSubMoreContainer>
  );
}

const MoreIcon = styled.span`
  display: block;
  width: 2rem;
  height: 2rem;
  margin-top: 0.6rem;
  background: url(${ArrowMoreCircle}) no-repeat center / cover;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 4rem;
    height: 4rem;
    margin-top: 1rem;
  }
`;
const MoreContentTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2.4rem;
    br {
      display: none;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: auto;
  }
`;
const MoreContentLabel = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  color: #666666;
  margin-bottom: 0.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;

const MoreContentBox = styled(Link)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 0.4rem);
  min-height: 11rem;
  margin: 0 0.8rem;
  padding: 1.4rem 1.8rem 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    width: calc(100% - 2.4rem);
    height: 28rem;
    margin: 0 1.2rem;
    padding: 5rem 3.2rem 0;
    border-radius: 16px;
  }
`;
// 구독 가이드
const MoreContentWithElectronics = styled(MoreContentBox)`
  background: url(${ImageMoreElectronics}) no-repeat #e5eaf0;
  background-position: bottom right;
  &:focus {
    background-color: #e5eaf0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &:hover {
      background-color: #e5eaf0;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    background-size: 6.4rem auto;
  }
`;
// 더 알아보기
const MoreContentWithThinq = styled(MoreContentBox)`
  background: url(${ImageMoreThinq}) no-repeat #ebebe8;
  background-position: bottom right;
  &:focus {
    background-color: #ebebe8;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &:hover {
      background-color: #ebebe8;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    background-size: 6.4rem auto;
  }
`;

const MoreContentFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: -1.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin: 0 -0.4rem;
  }
`;

const HomeSubMoreContainer = styled.div`
  width: 100%;
  max-width: 140.4rem;
  margin: 4.8rem auto;
  padding: 0 1.6rem;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 12rem auto 8rem;
  }
`;

export default HomeSubMore;
