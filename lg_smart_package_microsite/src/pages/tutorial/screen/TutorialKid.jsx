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
import FieldBlackDimBox from "pages/tutorial/component/FieldBlackDimBox";

// Action
import HandleCountingDown from "pages/tutorial/component/HandleCountingDown";
import HandleCountingUp from "pages/tutorial/component/HandleCountingUp";

function TutorialKid() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  //  제품 정보 1개 이상 : 슬라이드
  const swiperPagerRef = useRef(null);

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [
    useRef(null), // 0 #0 :아이방
    useRef(null), // 1 #1 : 아이방
    useRef(null), // 2 #2 : 아이방
    useRef(null), // 3 #3 : 아이방
    useRef(null), // 4 #4: 아이방 - 안방
    useRef(null), // 5 #5 : 아이방, #6: 휴대폰 확대샷
    useRef(null), // 6 #7: 안방
    useRef(null), // 7 제품 정보
  ];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 30 },
    3: { text: fieldTitle.text03, percent: 100 },
    4: { text: fieldTitle.text04, percent: 0 },
    5: { text: fieldTitle.text05, percent: 40 },
    6: { text: fieldTitle.text06, percent: 100 },
    7: { text: fieldTitle.text07, percent: 0 },
  };
  const { text: topText, percent: currentPercent } = stepDataMap[isStep];
  const sceneLast = Object.keys(stepDataMap).length - 1; //8개

  // 화면 진행률 퍼센트 UI
  const ActionPercent = (stepValue) => {
    const { percent: previousPercent } = stepDataMap[stepValue];
    setPercent(previousPercent);
  };

  // 이전 버튼 이벤트
  const handleStepDecrement = () => {
    if (isStep > 0) {
      const prevStep = isStep - 1;
      setStep(prevStep);
      ActionPercent(prevStep);
    }
  };

  // 화면 전환 버튼 클릭 이벤트
  const handelAction = (stepValue) => {
    setStep(stepValue); // 화면 번호 변경
    ActionPercent(stepValue);
  };

  // 영상 재생 이벤트
  const handleVideoPlay = (state, nextState) => {
    const video = sceneRef[state].current.children[0];
    if (isStep === state && video.tagName === "VIDEO") {
      video.play();
      video.addEventListener("ended", () => {
        handelAction(nextState);
      });
    } else {
      if (video) {
        setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, 600);
      }
    }
  };

  useEffect(() => {
    handleVideoPlay(3, 4);
    handleVideoPlay(5, 6);
    handleVideoPlay(6, 7);
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
              title="아이방 통잠 모드 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {(isStep === 2 || isStep === 3) && (
            <TemperatureBox>
              <span className="icon-temperature">
                {isStep === 2 && <>28℃</>}
                {isStep === 3 && (
                  <HandleCountingDown
                    isStep={isStep === 3}
                    min={22}
                    max={28}
                    speed={100}
                    delay={5000}
                    unit="℃"
                  />
                )}
              </span>
              <span className="icon-humidity">
                {isStep === 2 && <>36%</>}
                {isStep === 3 && (
                  <HandleCountingUp
                    isStep={isStep === 3}
                    min={36}
                    max={50}
                    speed={50}
                    delay={5000}
                    unit="%"
                  />
                )}
              </span>
            </TemperatureBox>
          )}

          {isStep === 4 && (
            <TutorialWhiteButton
              title="분리수면 케어 경험하기"
              onClick={() => {
                handelAction(5);
              }}
            />
          )}
        </>
      }
      packages={
        <FieldSceneSwiper
          isPrev={false}
          isStep={isStep === 7}
          isNext={isStep === 6}
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
            {/* 제품 정보 - 아이방 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip01 toLink={"/"} align="bottom">
                      에어컨
                    </ProductTooltip01>
                    <ProductTooltip02 toLink={"/"} align="top">
                      헤이홈 홈카메라
                    </ProductTooltip02>
                    <ProductTooltip03 toLink={"/"} align="bottom">
                      LG 스마트 버튼
                    </ProductTooltip03>
                    <ProductTooltip04 toLink={"/"} align="left">
                      공기 청정기
                    </ProductTooltip04>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/kid/tutorial_kid_1_0.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
            {/* 제품 정보 - 안방 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip05 toLink={"/"} align="bottom">
                      헤이홈 무드등
                    </ProductTooltip05>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/kid/tutorial_kid_2_4.jpg")}
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

          {/* #1 시작, #1 : 아이방 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 2}
            isStep={isStep === 0 || isStep === 1}
            isNext={isStep === 7}
            src={require("assets/images/tutorial/kid/tutorial_kid_1_0.jpg")}
            alt={""}
          />

          {/*#2 : 아이방 */}
          <SceneImage
            ref={sceneRef[2]}
            isPrev={isStep === 3}
            isStep={isStep === 2}
            isNext={isStep === 0 || isStep === 1}
            src={require("assets/images/tutorial/kid/tutorial_kid_1_1.jpg")}
            alt={""}
          />

          {/* #3 : 아이방 */}
          <SceneVideo
            ref={sceneRef[3]}
            isPrev={isStep === 4}
            isStep={isStep === 3}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/kid/tutorial_kid_1_2.mp4")}
          />

          {/* #4: 아이방 - 안방 */}
          <SceneImage
            ref={sceneRef[4]}
            isPrev={isStep === 5}
            isStep={isStep === 4}
            isNext={isStep === 3}
            src={require("assets/images/tutorial/kid/tutorial_kid_2_1.jpg")}
            alt={""}
          />

          {/* #5 : 아이방, #6: 휴대폰 확대샷 */}
          <SceneVideo
            ref={sceneRef[5]}
            isPrev={isStep === 6}
            isStep={isStep === 5}
            isNext={isStep === 4}
            src={require("assets/images/tutorial/kid/tutorial_kid_2_2.mp4")}
          />

          {/* #7: 안방 */}
          <SceneVideo
            ref={sceneRef[6]}
            isPrev={isStep === 7}
            isStep={isStep === 6}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/kid/tutorial_kid_2_3.mp4")}
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

// 헤이홈 무드등
const ProductTooltip05 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 24.5rem;
    right: 39.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 50%;
    left: 23%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 49%;
    left: 29%;
  }
`;
// 공기 청정기
const ProductTooltip04 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 19.6rem;
    right: 14.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 26%;
    right: 14%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 17.5%;
  }
`;
// LG 스마트 버튼
const ProductTooltip03 = styled(ToolTipProduct)`
  & > .tooltip-box {
    & > .tooltip-content {
      left: auto;
      right: -2.2rem;
      transform: translateX(0);
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    top: 26.8rem;
    right: 21.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 53%;
    right: 30%;
  }
`;
// 헤이홈 홈카메라
const ProductTooltip02 = styled(ToolTipProduct)`
  & > .tooltip-box {
    & > .tooltip-content {
      left: auto;
      left: -2.8rem;
      transform: translateX(0);
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    top: 27.4rem;
    right: 43.7rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 53%;
    left: 13%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 15%;
  }
`;
// 에어컨
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 9.1rem;
    right: 20.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 30.5%;
    right: 28%;
  }
`;

// buttons
const ClickButton01 = styled(FieldClickButton)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  & > .field-label {
    margin-bottom: 1.3rem;
    background-color: #2ea98b;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    top: 22rem;
    right: 17.8rem;
    & > .field-button {
      width: 5.7rem;
      height: 2.8rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 46.5%;
    right: 22.5%;
    & > .field-button {
      width: 4.6rem;
      height: 2.3rem;
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 44%;
    right: 23%;
  }
`;

// 시작 - 결과 슽라이드
const PackageContent = styled(SceneSlideContent)``;
const SlideFront = styled(SceneSlideFront)``;
const SlideBack = styled(SceneSlideBack)``;
const SceneSlide = styled(SwiperSlide)``;
// 끝 - 결과 슽라이드

const TemperatureBox = styled(FieldBlackDimBox)`
  max-width: 16.7rem;
`;

/* 타이틀 별 가로 사이즈 */
const FieldTitleBox = styled(FieldTitle)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .field-top-text {
      white-space: pre-line;
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "분리수면 안심팩",
  text00: "호흡기관이 민감한 우리 아기 \n분리수면 훈련 걱정 많으시죠?",
  text01: "먼저 공기질을 개선하여 \n최적의 수면환경을 만들어 드릴게요.",
  text02: "스마트 버튼을 눌러 \n‘아이방 통잠 모드'를 실행해보세요.",
  text03: "아기가 깨지 않고 통잠 잘 수 있는 \n최적의 수면환경을 만들어줍니다.",
  text04: "잠든 우리 아기, 깨지 않게 \n조용히 잘 자는지 확인하고 싶으셨죠?",
  text05: "홈 카메라로 언제든 아이 방을 \n모니터링 할 수 있고",
  text06:
    "아이가 깨서 움직임이 감지되면 \n스마트 조명으로 빠르게 알 수 있어요.",
  text07: "엄마 아빠는 휴식! 아이는 꿀잠! \n분리수면 안심팩을 경험해보세요.",
};
export default TutorialKid;
