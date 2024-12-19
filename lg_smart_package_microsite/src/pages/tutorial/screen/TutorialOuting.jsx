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

function TutorialOuting() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  //  제품 정보 1개 이상 : 슬라이드
  const swiperPagerRef = useRef(null);

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 23 },
    3: { text: fieldTitle.text03, percent: 100 },
    4: { text: fieldTitle.text04, percent: 0 },
    5: { text: fieldTitle.text05, percent: 70 },
    6: { text: fieldTitle.text06, percent: 100 },
    7: { text: fieldTitle.text07, percent: 0 },
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
    handleVideoPlay(3, 4); // #1-3 : 거실
    handleVideoPlay(5, 6); // #2-2 : 현관
    handleVideoPlay(6, 7); // #2-3 : 거실
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
              title="외출모드 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {isStep === 4 && (
            <TutorialWhiteButton
              title="귀가모드 경험하기"
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
          isStep={isStep === sceneLast}
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
            {/* 제품 정보 - 거실 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip01 toLink={"/"} align="bottom">
                      에어컨
                    </ProductTooltip01>
                    <ProductTooltip02 toLink={"/"} align="bottom">
                      헤이홈 전동커튼
                    </ProductTooltip02>
                    <ProductTooltip03 toLink={"/"} align="bottom">
                      에어로타워
                    </ProductTooltip03>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/outing/tutorial_outing_3_1.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
            {/* 제품 정보 - 현관 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip04 toLink={"/"} align="bottom">
                      LG ThinQ ON
                    </ProductTooltip04>
                    <ProductTooltip05 toLink={"/"} align="top">
                      LG 스마트 버튼
                    </ProductTooltip05>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/outing/tutorial_outing_1_1.jpg")}
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

          {/* #1 시작 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 1}
            isStep={isStep === 0}
            isNext={isStep === 7}
            src={require("assets/images/tutorial/outing/tutorial_outing_1_0.jpg")}
            alt={""}
          />

          {/* #1-1 : 현관 */}
          <SceneImage
            ref={sceneRef[1]}
            isPrev={isStep === 2}
            isStep={isStep === 1}
            isNext={isStep === 0}
            src={require("assets/images/tutorial/outing/tutorial_outing_1_1.jpg")}
            alt={""}
          />

          {/* #1-2 : 현관 */}
          <SceneImage
            ref={sceneRef[2]}
            isPrev={isStep === 3}
            isStep={isStep === 2}
            isNext={isStep === 1}
            src={require("assets/images/tutorial/outing/tutorial_outing_1_2.jpg")}
            alt={""}
          />

          {/* #1-3 : 거실 */}
          <SceneVideo
            ref={sceneRef[3]}
            isPrev={isStep === 4}
            isStep={isStep === 3}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/outing/tutorial_outing_1_3.mp4")}
          />

          {/* #2-1 : 거실 */}
          <SceneImage
            ref={sceneRef[4]}
            isPrev={isStep === 5}
            isStep={isStep === 4}
            isNext={isStep === 3}
            src={require("assets/images/tutorial/outing/tutorial_outing_2_1.jpg")}
            alt={""}
          />

          {/* #2-2 : 현관 */}
          <SceneVideo
            ref={sceneRef[5]}
            isPrev={isStep === 6}
            isStep={isStep === 5}
            isNext={isStep === 4}
            src={require("assets/images/tutorial/outing/tutorial_outing_2_2.mp4")}
          />

          {/* #2-3 : 거실 */}
          <SceneVideo
            ref={sceneRef[6]}
            isPrev={isStep === 7}
            isStep={isStep === 6}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/outing/tutorial_outing_2_3.mp4")}
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

// 스마트 버튼
const ProductTooltip05 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 22.6rem;
    right: 14.9rem;
    & > .tooltip-box {
      & > .tooltip-content {
        left: 0;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 47%;
    right: 17%;
    & > .tooltip-box {
      & > .tooltip-content {
        top: 3rem;
        left: auto;
        right: -8rem;
        bottom: auto;
      }
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 10%;
  }
`;
// LG ThinQ ON
const ProductTooltip04 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 22.6rem;
    right: 22.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 47%;
    right: 31%;
    & > .tooltip-box {
      & > .tooltip-content {
        top: auto;
        bottom: 3rem;
      }
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 22%;
  }
`;
// 에어로타워
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 34.6rem;
    right: 45rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 71%;
    right: 82.5%;
    & > .tooltip-box {
      & > .tooltip-content {
        left: -2.2rem;
        transform: translateX(0);
      }
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 17%;
  }
`;
// 전동커튼
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 7.2rem;
    right: 16.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 28%;
    right: 9%;
    & > .tooltip-box {
      & > .tooltip-content {
        left: auto;
        right: -1.5rem;
        transform: translateX(0);
      }
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 26%;
    right: 18%;
  }
`;
// 에어컨
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 7.6rem;
    right: 31.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 28%;
    right: 57%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 45%;
  }
`;

// buttons
const ClickButton01 = styled(FieldClickButton)`
  display: flex;
  flex-direction: column;
  & > .field-label {
    margin-bottom: 1.8rem;
    background-color: #2ea98b;
  }
  & > .field-button {
    margin-left: auto;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    top: 17.7rem;
    right: 14rem;
    & > .field-button {
      width: 9.3rem;
      height: 5.7rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 40.5%;
    right: 14%;
    & > .field-button {
      width: 7.5rem;
      height: 4.6rem;
    }
  }

  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 37.5%;
    right: 15%;
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
        props.isStep === 0 &&
        `
        white-space: inherit;
        `}
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "외출귀가 맞춤팩",
  text00: "외출할 때 조명과 가전 기기 전원을 껐는지 \n매번 불안하셨나요?",
  text01: "외출 전, 스마트 버튼으로 \n조명과 가전기기를 제어해보세요.",
  text02: "스마트 버튼을 눌러 집안 조명과 \n가전기기를 한번에 제어해보세요.",
  text03: "이제 조명과 가전 전원 걱정 없이 \n마음 편하게 외출할 수 있어요.",
  text04: "귀가할 때도, 어둡고 꿉꿉하지 않게 \n자동으로 케어해드릴게요.",
  text05: "LG ThinQ ON에 음성을 통해 \n귀가 모드 실행도 가능해요.",
  text06: "집에 들어서자마자, 따뜻한 조명과 \n쾌적한 공기가 나를 반겨줍니다.",
  text07: "가전과 조명을 한번에 케어하는 \n외출귀가 맞춤팩을 경험해보세요.",
};
export default TutorialOuting;
