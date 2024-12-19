import React, { useRef, useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

// common
import Button from "components/common/Button";

// tutorial common
import FieldLayout from "pages/tutorial/component/FieldLayout";
import FieldBackground from "pages/tutorial/component/FieldBackground";
import FieldButtonBox from "pages/tutorial/component/FieldButtonBox";
import FieldTitle from "pages/tutorial/component/FieldTitle";
import FieldProgressBar from "pages/tutorial/component/FieldProgressBar";
import FieldClickButton from "pages/tutorial/component/FieldClickButton";
import FieldButtonRefresh from "pages/tutorial/component/FieldButtonRefresh";
import FieldButtonPrev from "pages/tutorial/component/FieldButtonPrev";
import TutorialStartButton from "pages/tutorial/component/TutorialStartButton";
import TutorialBuyButton from "pages/tutorial/component/TutorialBuyButton";
import TutorialWhiteButton from "pages/tutorial/component/TutorialWhiteButton";
import SceneImage from "pages/tutorial/component/SceneImage";
import SceneVideo from "pages/tutorial/component/SceneVideo";
import ToolTipBox from "pages/tutorial/component/ToolTipBox";
import ToolTipProduct from "pages/tutorial/component/ToolTipProduct";
import FieldSceneSwiper from "pages/tutorial/component/FieldSceneSwiper";
import SceneSwiper from "pages/tutorial/component/SceneSwiper";
import SceneSwiperPager from "pages/tutorial/component/SceneSwiperPager";
import SceneSlideBack from "pages/tutorial/component/SceneSlideBack";
import SceneSlideFront from "pages/tutorial/component/SceneSlideFront";
import SceneSlideContent from "pages/tutorial/component/SceneSlideContent";

function TutorialMoodLiving() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  //  제품 정보 1개 이상 : 슬라이드
  const swiperPagerRef = useRef(null);

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [
    useRef(null), // 0 #0 : TV가 보이는 거실
    useRef(null), // 1 #1-1 : TV맞은편 소파
    useRef(null), // 2 #1-2 : TV맞은편 소파
    useRef(null), // 3 #1-3 : 거실 샤시 클로즈업
  ];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 20 },
    3: { text: fieldTitle.text03, percent: 40 },
    4: { text: fieldTitle.text04, percent: 80 },
    5: { text: fieldTitle.text04, percent: 100 },
    6: { text: fieldTitle.text05, percent: 0 },
  };
  const { text: topText, percent: currentPercent } = stepDataMap[isStep];
  const sceneLast = Object.keys(stepDataMap).length - 1; //7개

  // 화면 진행률 퍼센트 UI
  const ActionPercent = (stepValue) => {
    const { percent: previousPercent } = stepDataMap[stepValue];
    setPercent(previousPercent);
  };

  // 이전 버튼 이벤트
  const handleStepDecrement = () => {
    if (isStep > 0) {
      if (isStep === 3 || isStep === 4 || isStep === 5) {
        setStep(2);
        ActionPercent(2);
      } else if (isStep === 6) {
        setStep(3);
        ActionPercent(3);
      } else {
        const prevStep = isStep - 1;
        setStep(prevStep);
        ActionPercent(prevStep);
      }
    }
  };

  // 화면 전환 버튼 클릭 이벤트
  const handelAction = (stepValue) => {
    setStep(stepValue); // 화면 번호 변경
    ActionPercent(stepValue);
  };

  useEffect(() => {
    const videoScene03 = sceneRef[3].current.children[0];
    if (
      (isStep === 3 || isStep === 4 || isStep === 5) &&
      videoScene03.tagName === "VIDEO"
    ) {
      videoScene03.play();

      const handleTimeUpdate = () => {
        var currentTime = videoScene03.currentTime;
        if (Math.floor(currentTime) === 10) {
          handelAction(4);
        }
      };

      // 영상 시간 체크
      videoScene03.addEventListener("timeupdate", handleTimeUpdate);
      videoScene03.addEventListener("ended", () => {
        handelAction(6);
      });

      return () => {
        videoScene03.removeEventListener("timeupdate", handleTimeUpdate);
      };
    } else {
      if (videoScene03) {
        setTimeout(() => {
          videoScene03.pause();
          videoScene03.currentTime = 0;
        }, 600);
      }
    }
  }, [isStep]);

  return (
    <FieldLayout
      isStep={isStep}
      content={
        <>
          {isStep <= sceneLast && (
            <FieldTitleBox
              topTitle={fieldTitle.title}
              topText={topText}
              isStep={isStep}
            />
          )}

          {isStep === 0 && (
            <TutorialStartButton
              onClick={() => {
                handelAction(1);
              }}
            />
          )}

          {isStep === 1 && (
            <TutorialWhiteButton
              title="시네마 모드 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}
        </>
      }
      packages={
        <FieldSceneSwiper
          isPrev={false}
          isStep={isStep === 6}
          isNext={isStep === 3 || isStep === 4 || isStep === 5}
        >
          <PackageContent>
            <FieldTitleBox
              topTitle={fieldTitle.title}
              topText={topText}
              isStep={isStep}
            />
            <SceneSwiperPager
              ref={swiperPagerRef}
              isStep={isStep === sceneLast}
            ></SceneSwiperPager>
          </PackageContent>
          {/* 구매하기 버튼 */}
          <TutorialBuyButton />
          <SceneSwiper ref={sceneRef[sceneLast]} pagerRef={swiperPagerRef}>
            {/* 제품 정보 - 거실 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip01 toLink={"/"} align="left">
                      헤이홈 전동커튼
                    </ProductTooltip01>
                    <ProductTooltip02 toLink={"/"} align="left">
                      에어컨
                    </ProductTooltip02>
                    <ProductTooltip09 toLink={"/"} align="top">
                      헤이홈 싱크라이트
                    </ProductTooltip09>
                    <ProductTooltip03 toLink={"/"} align="left">
                      TV
                    </ProductTooltip03>
                    <ProductTooltip04 toLink={"/"} align="top">
                      LG ThinQ ON
                    </ProductTooltip04>
                    <ProductTooltip05 toLink={"/"} align="left">
                      사운드바
                    </ProductTooltip05>
                    <ProductTooltip06 toLink={"/"} align="bottom">
                      헤이홈 리모컨허브
                    </ProductTooltip06>
                    <ProductTooltip07 toLink={"/"} align="bottom">
                      공기 청정기
                    </ProductTooltip07>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_0.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
            {/* 제품 정보 - 현관 */}
            <SceneSlide>
              <SlideFront>
                <ToolTipBox>
                  <ProductTooltip08 toLink={"/"} align="bottom">
                    LG 스마트 버튼
                  </ProductTooltip08>
                </ToolTipBox>
              </SlideFront>
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_1.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
          </SceneSwiper>
        </FieldSceneSwiper>
      }
      back={
        <FieldBackground>
          {isStep === 2 && (
            <ClickButton01
              text={"스마트 버튼을 눌러주세요"}
              onClick={() => {
                handelAction(3);
              }}
            />
          )}

          {/* #0 : TV가 보이는 거실 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 1}
            isStep={isStep === 0}
            isNext={isStep === 6}
            src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_0.jpg")}
            alt={""}
          />

          {/* #1-1 : TV맞은편 소파 */}
          <SceneImage
            ref={sceneRef[1]}
            isPrev={isStep === 2}
            isStep={isStep === 1}
            isNext={isStep === 0}
            src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_1.jpg")}
            alt={""}
          />

          {/* #1-2 : TV맞은편 소파 */}
          <SceneImage
            ref={sceneRef[2]}
            isPrev={isStep === 3 || isStep === 4 || isStep === 5}
            isStep={isStep === 2}
            isNext={isStep === 1}
            src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_2.jpg")}
            alt={""}
          />

          {/* #1-3 : 거실 샤시 클로즈업, #1-4 : TV가 보이는 거실 */}
          <SceneVideo
            ref={sceneRef[3]}
            isPrev={isStep === 6}
            isStep={isStep === 3 || isStep === 4 || isStep === 5}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/mood_living/tutorial_mood_living_1_3.mp4")}
          />
        </FieldBackground>
      }
      button={
        <FieldButtonBox>
          {/* 이전 버튼 */}
          {isStep > 0 && (
            <FieldButtonPrev ref={BtnPrevRef} onClick={handleStepDecrement} />
          )}

          {/* 처음으로 버튼 */}
          {isStep === sceneLast && (
            <FieldButtonRefresh
              ref={BtnRefreshRef}
              onClick={() => {
                setStep(0);
              }}
            />
          )}
        </FieldButtonBox>
      }
      progress={isPercent !== 0 && <FieldProgressBar percent={isPercent} />}
    />
  );
}

// LG 스마트 버튼
const ProductTooltip08 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 21.8rem;
    right: 21rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 46.5%;
    right: 28%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 46%;
    right: 29.5%;
  }
`;
// 공기 청정기
const ProductTooltip07 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 25rem;
    right: 40.9rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 29%;
    left: 22%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 27%;
    right: auto;
    & > .tooltip-box {
      & > .tooltip-content {
        left: -1rem;
        transform: translateX(0);
      }
    }
  }
`;
// 헤이홈 리모컨허브
const ProductTooltip06 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 25rem;
    right: 17.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 32.5%;
    right: 21%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 22.5%;
    & > .tooltip-box {
      & > .tooltip-content {
        left: -40%;
      }
    }
  }
`;
// 사운드바
const ProductTooltip05 = styled(ToolTipProduct)`
  & > .tooltip-content {
    left: auto;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 25.9rem;
    right: 21.3rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 34%;
    right: 30%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 32.3%;
    right: 30%;
  }
`;
// LG ThinQ ON
const ProductTooltip04 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 29.8rem;
    right: 17.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 38%;
    right: 21%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 38%;
    right: 22.5%;
    & > .tooltip-box {
      & > .tooltip-content {
        left: -40%;
      }
    }
  }
`;
// 헤이홈 싱크라이트
const ProductTooltip09 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 21.4rem;
    right: 29.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 46%;
    left: 43%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 44%;
  }
`;
// TV
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 21.3rem;
    right: 38.9rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 46%;
    left: 24%;
    right: auto;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 29%;
  }
`;
// 에어컨
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 17.3rem;
    right: 15.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 41%;
    right: 7%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 10%;
  }
`;
// 헤이홈 전동커튼
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 10.9rem;
    right: 10.3rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 33%;
    right: 5%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 8%;
  }
`;

// buttons
const ClickButton01 = styled(FieldClickButton)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  & > .field-label {
    background-color: #2ea98b;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    top: 16.4rem;
    right: 13.2rem;
    & > .field-label {
      margin-bottom: 1.9rem;
    }
    & > .field-button {
      width: 9.6rem;
      height: 4.5rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 38.5%;
    right: 2.5%;
    align-items: center;
    & > .field-label {
      margin-bottom: 2.4rem;
    }
    & > .field-button {
      width: 7.8rem;
      height: 3.7rem;
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 37.5%;
    right: 1.6rem;
    & > .field-label {
      margin-bottom: 1.2rem;
    }
  }
`;

// 시작 - 결과 슽라이드
const PackageContent = styled(SceneSlideContent)``;
const SlideFront = styled(SceneSlideFront)``;
const SlideBack = styled(SceneSlideBack)``;
const SceneSlide = styled(SwiperSlide)``;
// 끝 - 결과 슽라이드

/* 타이틀 별 가로 사이즈 */
const FieldTitleBox = styled(FieldTitle)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .field-top-text {
      white-space: pre-line;
      ${(props) =>
        props.isStep === 2 &&
        `
        max-width: 75%;
        white-space: inherit;
        `}
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "리빙 무드업팩",
  text00: "압도적인 몰입감으로 \n홈 엔터테인먼트를 경험해보세요.",
  text01: "좋아하는 영화나 게임을 \n더욱 실감나게 즐겨볼까요?",
  text02: "스마트 버튼을 눌러 \n조명과 환경을 한번에 세팅해보세요.",
  text03: "먼저, 전동 커튼과 싱크라이트로 \n영화관 분위기를 조성해요.",
  text04: "그리고, 조용하면서 쾌적한 \n온습도를 유지해드릴게요.",
  text05: "영화관 같은 몰입감으로, \n영화관 보다 쾌적하게 즐기세요.",
};
export default TutorialMoodLiving;
