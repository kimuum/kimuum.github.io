import React, { useRef, useState, useEffect } from "react";
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

// function
import ResizeMobile from "components/common/ResizeMobile";

function Home() {
  const [isRecommend, setRecommend] = useState(0);
  const [isPackage, setPackage] = useState(0);

  const sectionRecommend = {
    title: (
      <>
        나를 위한 <br />
        ThinQ Life 추천 받기
      </>
    ),
    text: <>요즘 관심있는 공간을 선택해 보세요.</>,
  };
  const sectionTip = {
    title: (
      <>
        LG가 제안하는 스마트홈 솔루션, <br />
        ThinQ Life을 만나보세요.
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

  const isHomeMobile = ResizeMobile(false); // 디바이스 체크
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [currentArea, setCurrentArea] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (currentArea !== 0 && currentArea !== sectionRefs.length - 1) {
        event.preventDefault();
        // 스크롤 위치 이동
        const targetSection = sectionRefs[currentArea].current;
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      }
      if (event.deltaY > 0) {
        // down
        setCurrentArea((prev) => Math.min(prev + 1, sectionRefs.length - 1));
      } else {
        // up
        setCurrentArea((prev) => Math.max(prev - 1, 0));
      }
    };

    // PC 일 때 wheel 이벤트 동작
    if (isHomeMobile === false) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, [isHomeMobile, currentArea]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "106px",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        테스트 헤더
      </div>
      <HomeMainContainer>
        {/* 메인 슬라이드 */}
        <div
          ref={sectionRefs[0]}
          style={{ position: "absolute", top: "0", left: "0" }}
        ></div>

        <div ref={sectionRefs[1]}>
          <HomeHero />
        </div>

        <div ref={sectionRefs[2]}>
          {/* 나에게 맞는 스마트홈 솔루션 추천받기 */}
          <RecommendTitleBox
            title={sectionRecommend.title}
            text={sectionRecommend.text}
          />
          <HomeRecommend />
        </div>

        <div ref={sectionRefs[3]}>
          {/* 새로운 시작을 위한 최고의 선택 */}
          <HomeTextBox title={sectionTip.title} />
          <MainTabArea>
            <MainTabInner>
              <MainTabButton
                isTab={isRecommend}
                tabButtonData={tabRecommendData}
                seTabCurrent={setRecommend}
              />
            </MainTabInner>
          </MainTabArea>
          <HomeTip />
        </div>

        <div ref={sectionRefs[4]}>
          {/* 다양한 패키지를 확인해 보세요 */}
          <HomeTextBox title={sectionPackage.title} />
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
        </div>

        <div ref={sectionRefs[5]}>
          {/* 구독 */}
          <HomeSubMore />
        </div>
        <div ref={sectionRefs[6]}>
          {/* 이벤트 배너 */}
          <HomeBanner />
        </div>
      </HomeMainContainer>
      <div
        style={{
          width: "100%",
          height: "800px",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        테스트 푸터
      </div>
    </div>
  );
}
const RecommendTitleBox = styled(MainTitleBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 0;
    padding-top: 10rem;
    margin-bottom: 5.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 2.2rem;
    .top-main-text {
      display: none;
    }
  }
`;
const HomeTextBox = styled(MainTitleBox)`
  margin-bottom: 0;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 0;
    padding-top: 12rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 4.8rem;
  }
`;

const HomeMainContainer = styled.main`
  margin-bottom: 5rem;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 8rem;
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

  /* 가로 스크롤 */
  /* &::-webkit-scrollbar {
    height: 16px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 1);
    border-top: 4px solid rgba(255, 255, 255, 1);
    border-bottom: 4px solid rgba(255, 255, 255, 1);
  }
  &::-webkit-scrollbar-track {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 4px solid rgba(255, 255, 255, 1);
    border-bottom: 4px solid rgba(255, 255, 255, 1);
  } */
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
      &:hover {
        background-color: #0f0f0f;
        color: #ffffff;
        transition: all 0.5s;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

// 임시 data
const tabRecommendData = [
  {
    title: "ThinQ Life란?",
  },
  {
    title: "ThinQ ON 보이스",
  },
  {
    title: "배송 설치 서비스",
  },
  {
    title: "스마트루틴",
  },
];

const tabPackageData = [
  {
    title: "전체",
  },
  {
    title: "실내 환경 케어",
  },
  {
    title: "에너지 케어",
  },
  {
    title: "패밀리/펫 케어",
  },
  {
    title: "집안일 케어",
  },
  {
    title: "분위기 UP",
  },
  {
    title: "보안/안전",
  },
];

export default Home;
