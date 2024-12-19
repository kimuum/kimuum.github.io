import { Link } from "react-router-dom";
import styled from "styled-components";

//common
import ImageBox from "components/common/ImageBox";

//images
import ArrowLinkBlack from "assets/images/common/arrow_link_black.svg";
import IconBridgeBulb from "assets/images/bridge/icon_bridge_bulb.jpg";
import IconBridgeSun from "assets/images/bridge/icon_bridge_sun.jpg";

function BridgeContents() {
  return (
    <BridgeContentsContainer>
      <BridgeSectionHead>
        <SectionHeadLabel>편안한 수면 환경</SectionHeadLabel>
        <SectionHeadTitle>
          가장 잠자기 좋은 곳, <br />
          바로 우리 집
        </SectionHeadTitle>
      </BridgeSectionHead>
      <BridgeSectionBody>
        <SectionBody>
          <InnerFullWithImageBox>
            <SectionImageBox
              src={require("assets/images/thumbs/img_bridge_contents_01.jpg")}
            />
            <ArticleContainer>
              <ArticleTitle>빈틈없는 에너지 생산과 전기료 절감</ArticleTitle>
              <ArticleText>
                자동 스마트 스위치 기능을 이용하여 낭비되는 우리집 전기요금을
                낮출 수 있어요.자동 스마트 스위치 기능을 이용하여 낭비되는
                우리집 전기요금을 낮출 수 있어요.자동 스마트 스위치 기능을
                이용하여 낭비되는 우리집 전기요금을 낮출 수 있어요.자동 스마트
                스위치 기능을 이용하여 낭비되는 우리집 전기요금을 낮출 수
                있어요.자동 스마트 스위치 기능을 이용하여 낭비되는 우리집
                전기요금을 낮출 수 있어요.
              </ArticleText>
            </ArticleContainer>
          </InnerFullWithImageBox>
        </SectionBody>
        <SectionBodyImageLeft>
          <InnerLeft>
            <SectionImageBox
              src={require("assets/images/thumbs/img_bridge_contents_02.jpg")}
            />
          </InnerLeft>
          <InnerRight>
            <ArticleContainer>
              <ArticleTitleWidthIconBulb>
                달콤한 숙면을 위해 <br />
                침대 옆에 하나
              </ArticleTitleWidthIconBulb>
              <ArticleText>
                숙면의 첫 번째 비결은 시각의 자극을 줄이는 것, <br />
                일몰에 맞춰 집안의 조명이 어두워지도록 설정하여, <br />
                편안한 수면 환경을 만들어보세요.
              </ArticleText>
            </ArticleContainer>
          </InnerRight>
        </SectionBodyImageLeft>
        <SectionBodyTextLeft>
          <InnerLeft>
            <ArticleContainer>
              <ArticleTitleWidthIconSun>
                상쾌하게 일어날 준비
              </ArticleTitleWidthIconSun>
              <ArticleText>
                잠에서 깰 때, 스마트 모드로 작동되도록 설정하여 <br />
                기분 좋게 기상할 수 있어요.
              </ArticleText>
            </ArticleContainer>
          </InnerLeft>
          <InnerRight>
            <SectionImageBox
              src={require("assets/images/thumbs/img_bridge_contents_03.jpg")}
            />
          </InnerRight>
        </SectionBodyTextLeft>
      </BridgeSectionBody>
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;

  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 138rem;
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

const BridgeSectionHead = styled.div`
  margin-bottom: 3.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 5rem;
  }
`;

const SectionHeadLabel = styled.span`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  color: #ea1917;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
  }
`;

const SectionHeadTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 4.8rem;
  }
`;

const BridgeSectionBody = styled.div``;

const SectionBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 8rem;
  }
`;

const ArticleContainer = styled.div``;

const ArticleTitle = styled.h3`
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 2.4rem;
    font-size: 3.2rem;
    line-height: 1.3;
  }
`;

const ArticleTitleWidthIconBulb = styled(ArticleTitle)`
  /* PC */
  @media screen and (min-width: 769px) {
    &:before {
      content: "";
      display: block;
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1rem;
      background: url(${IconBridgeBulb}) no-repeat center;
    }
  }
`;
const ArticleTitleWidthIconSun = styled(ArticleTitle)`
  /* PC */
  @media screen and (min-width: 769px) {
    &:before {
      content: "";
      display: block;
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1rem;
      background: url(${IconBridgeSun}) no-repeat center;
    }
  }
`;

const ArticleText = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  color: #0f0f0f;

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    line-height: 1.3;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

const SectionImageBox = styled(ImageBox)`
  overflow: hidden;
  border-radius: 4.2px;
  /* PC */
  @media screen and (min-width: 769px) {
    border-radius: 18.4px;
  }
`;

const InnerFull = styled.div`
  flex: 1;
`;

const InnerFullWithImageBox = styled(InnerFull)`
  ${SectionImageBox} {
    margin-bottom: 1.6rem;
    /* PC */
    @media screen and (min-width: 769px) {
      margin-bottom: 3rem;
    }
  }
`;

const InnerLeft = styled.div`
  flex: 1;
  margin-right: 1.2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-right: 8.116%;
  }
`;

const InnerRight = styled.div`
  flex: 1;
`;

const SectionBodyImageLeft = styled(SectionBody)`
  ${InnerLeft} {
    max-width: 65.3rem;
  }
  ${InnerRight} {
    max-width: 61.5rem;
  }
`;

const SectionBodyTextLeft = styled(SectionBody)`
  /* PC */
  @media screen and (min-width: 769px) {
    ${InnerLeft} {
      max-width: 61.5rem;
    }
    ${InnerRight} {
      max-width: 65.3rem;
    }
  }
`;

export default BridgeContents;
