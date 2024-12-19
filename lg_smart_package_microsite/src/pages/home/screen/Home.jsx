import React, { useState } from "react";
import styled from "styled-components";

// common
import TabButton from "components/common/TabButton";
import MainTitleBox from "components/layout/MainTitleBox";

// home/component
import HomeHero from "pages/home/component/HomeHero";
import HomeRecommend from "pages/home/component/HomeRecommend";
import HomeTip from "pages/home/component/HomeTip";
import HomePackage from "pages/home/component/HomePackage";
import HomeSubMore from "pages/home/component/HomeSubMore";
import HomeBanner from "pages/home/component/HomeBanner";

// data

function Home() {
  const [isRecommend, setRecommend] = useState(0);
  const [isPackage, setPackage] = useState(0);

  const sectionRecommend = {
    title: <>나를 위한 AI Home 추천 받기</>,
    text: <>요즘 가장 관심있는 공간을 선택해 보세요.</>,
  };
  const sectionTip = {
    title: (
      <>
        LG가 제안하는 맞춤형 공간 솔루션, <br />
        ThinQ AI Home을 만나보세요.
      </>
    ),
  };
  const sectionPackage = {
    title: (
      <>
        테마별 다양한 패키지를 <br />
        확인해 보세요.
      </>
    ),
  };

  return (
    <HomeMainContainer>
      {/* 메인 슬라이드 */}
      <HomeHero />

      {/* 새로운 시작을 위한 최고의 선택 */}
      <TipTitleBox title={sectionTip.title} />
      <MainTabArea>
        <MainTabInner>
          <MainTabButton
            isTab={isRecommend}
            tabButtonData={tabRecommendData}
            seTabCurrent={setRecommend}
          />
        </MainTabInner>
      </MainTabArea>
      <HomeTip index={isRecommend} />

      {/* 나를 위한 AI Home 추천 받기 */}
      <RecommendTitleBox
        title={sectionRecommend.title}
        text={sectionRecommend.text}
      />
      <HomeRecommend />

      {/* 다양한 패키지를 확인해 보세요 */}
      <PackageTitleBox title={sectionPackage.title} />
      <MainTabArea>
        <MainTabInner>
          <MainTabButton
            isTab={isPackage}
            tabButtonData={tabPackageData}
            seTabCurrent={setPackage}
          />
        </MainTabInner>
      </MainTabArea>
      <HomePackage />

      {/* 구독 */}
      <HomeSubMore />

      {/* 이벤트 배너 */}
      <HomeBanner />
    </HomeMainContainer>
  );
}

const TipTitleBox = styled(MainTitleBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 10rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 3.2rem;
  }
`;
const RecommendTitleBox = styled(MainTitleBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 12rem;
    margin-bottom: 5.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 2.2rem;
  }
`;
const PackageTitleBox = styled(MainTitleBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 13.7rem;
    margin-bottom: 0;
  }
`;

const HomeMainContainer = styled.main`
  margin-bottom: 5rem;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 12rem;
  }
`;
const MainTabButton = styled(TabButton)``;

const MainTabArea = styled.div`
  width: 100%;
  text-align: center;
`;

const MainTabInner = styled.div`
  overflow: auto hidden;
  max-width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin: 1.6rem auto 1.4rem;
  padding: 0 1.6rem;
  box-sizing: border-box;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.2rem;
    padding: 0 1.2rem;
    margin: 0 0.2rem;
    border-radius: 999px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0f0f0f;
    white-space: nowrap;
    &.active {
      background-color: #0f0f0f;
      font-weight: 700;
      color: #ffffff;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 3.2rem;
    margin-bottom: 2.3rem;
    button {
      height: 4rem;
      padding: 0 2.4rem;
      margin: 0 0.6rem;
      font-size: 1.6rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const tabRecommendData = [
  {
    title: "ThinQ AI Home",
  },
  // {
  //   title: "쾌적하고 산뜻하게",
  // },
  {
    title: "나만의 방식으로",
  },
  {
    title: "LG ThinQ ON",
  },
];

const tabPackageData = [
  {
    title: "전체",
  },
  {
    title: "실내 환경",
  },
  {
    title: "보안/안전",
  },
  {
    title: "에너지 관리",
  },
  {
    title: "가족 맞춤",
  },
  {
    title: "집안일 해결",
  },
  {
    title: "분위기 업",
  },
];

export default Home;
