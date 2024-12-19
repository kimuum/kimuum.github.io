import React, { useRef, useState, useEffect } from "react";
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
import FieldBlackDimBox from "pages/tutorial/component/FieldBlackDimBox";

// Action
import HandleChangeText from "pages/tutorial/component/HandleChangeText";

function TutorialAirWindow() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [
    useRef(null), // 0 #1 : 거실
    useRef(null), // 1 #2 : 거실
    useRef(null), // 2 #3 : 거실 확대(영상)
    useRef(null), // 3 #4 : 거실 확대
    useRef(null), // 4 #5 : 거실 확대(영상)
    useRef(null), // 5 #6 : 거실 확대(영상)
    useRef(null), // 6 제품 정보
  ];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 30 },
    3: { text: fieldTitle.text03, percent: 30 },
    4: { text: fieldTitle.text04, percent: 50 },
    5: { text: fieldTitle.text05, percent: 100 },
    6: { text: fieldTitle.text06, percent: 0 },
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
    handleVideoPlay(2, 3);
    handleVideoPlay(4, 5);
    handleVideoPlay(5, 6);
  }, [isStep]);

  return (
    <FieldLayout
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
              title="맞춤 공기질 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {isStep > 1 && isStep < 6 && (
            <DustBox>
              <span className="icon-dust">
                <span>미세먼지</span>
                {(isStep === 2 || isStep === 3 || isStep === 4) && (
                  <span className="color-red">나쁨</span>
                )}
                {isStep === 5 && (
                  <HandleChangeText
                    beforeClass="color-red"
                    afterClass="color-blue"
                    isStep={5}
                    before="나쁨"
                    after="좋음"
                    speed={100}
                    delay={2000}
                  />
                )}
              </span>
              <span className="icon-CO2">
                <span>이산화탄소</span>
                {(isStep === 2 || isStep === 3 || isStep === 4) && (
                  <span className="color-yellow">보통</span>
                )}
                {isStep === 5 && (
                  <HandleChangeText
                    beforeClass="color-yellow"
                    afterClass="color-blue"
                    isStep={5}
                    before="보통"
                    after="좋음"
                    speed={100}
                    delay={2500}
                  />
                )}
              </span>
            </DustBox>
          )}

          {isStep === sceneLast && <TutorialBuyButton />}
        </>
      }
      back={
        <FieldBackground>
          {isStep === 3 && (
            <ClickButton01
              text={"문을 열어 환기해주세요."}
              onClick={() => {
                handelAction(4);
              }}
            />
          )}

          {isStep === sceneLast && (
            <ToolTipBox>
              <ProductTooltip01 toLink={"/"} align="top">
                LG 도어 센서
              </ProductTooltip01>
              <ProductTooltip02 toLink={"/"} align="bottom">
                LG 공기질 센서
              </ProductTooltip02>
              <ProductTooltip03 toLink={"/"} align="right">
                LG ThinQ ON
              </ProductTooltip03>
              <ProductTooltip04 toLink={"/"} align="right">
                공기 청정기
              </ProductTooltip04>
            </ToolTipBox>
          )}

          {/* #1 : 거실 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 2}
            isStep={isStep === 0 || isStep === 1}
            isNext={isStep === sceneLast}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_0.jpg")}
            alt={""}
          />

          {/* #3 : 거실 확대(영상) */}
          <SceneVideo
            ref={sceneRef[2]}
            isPrev={isStep === 3}
            isStep={isStep === 2}
            isNext={isStep === 0 || isStep === 1}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_2.mp4")}
          />

          {/* #4 : 거실 확대 */}
          <SceneImage
            ref={sceneRef[3]}
            isPrev={isStep === 4}
            isStep={isStep === 3}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_3.jpg")}
            alt={""}
          />

          {/* #5 : 거실 확대(영상) */}
          <SceneVideo
            ref={sceneRef[4]}
            isPrev={isStep === 5}
            isStep={isStep === 4}
            isNext={isStep === 3}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_4.mp4")}
          />

          {/* #6 : 거실 확대(영상) */}
          <SceneVideo
            ref={sceneRef[5]}
            isPrev={isStep === 6}
            isStep={isStep === 5}
            isNext={isStep === 4}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_5.mp4")}
          />

          {/* #7 : 제품 정보 */}
          <SceneImage
            ref={sceneRef[6]}
            isPrev={false}
            isStep={isStep === sceneLast}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/air_window/tutorial_air_window_1_6.jpg")}
            alt={""}
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

// 공기 청정기
const ProductTooltip04 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 15.2rem;
    right: 41.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 20%;
    left: 16%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 20%;
    left: 22%;
  }
`;
// LG ThinQ ON
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 25.7rem;
    right: 30rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 34%;
    right: 49%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 33%;
    right: 47%;
  }
`;
// LG 공기질 센서
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 23.5rem;
    right: 14.9rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 49%;
    right: 14.5%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 48.4%;
    right: 17%;
  }
`;
// LG 도어 센서
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 23.5rem;
    right: 23rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 49%;
    right: 35%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 48.4%;
  }
`;

const DustBox = styled(FieldBlackDimBox)`
  max-width: 28.7rem;
`;

// buttons
// 문을 열어 환기해주세요.
const ClickButton01 = styled(FieldClickButton)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > .field-label {
    order: 1;
    margin-top: 2rem;
    background-color: #2ea98b;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 10.4rem;
    right: 15.3rem;
    & > .field-button {
      width: 30.3rem;
      height: 39.4rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 12.5%;
    right: 6rem;
    & > .field-button {
      width: 24.6rem;
      height: 32rem;
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 344px) and (max-height: 713px) {
    bottom: 11%;
    right: 20%;
    & > .field-button {
      width: 19rem;
      height: 24rem;
    }
  }
`;

/* 타이틀 별 가로 사이즈 */
const FieldTitleBox = styled(FieldTitle)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .field-top-text {
      ${(props) =>
        props.isStep === 1 &&
        `
        max-width: 70%;
      `}
      ${(props) =>
        props.isStep === 2 &&
        `
        max-width: 85%;
      `}
      ${(props) =>
        props.isStep === 3 &&
        `
        max-width: 65%;
      `}
      ${(props) =>
        props.isStep === 6 &&
        `
        white-space: pre-line;
      `}
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "집안공기 마스터팩",
  text00: "까다로운 환기 타이밍과 환기할 때마다 \n낭비되는 에너지, 고민되셨죠?",
  text01: "공기질 센서로 효율적인 \n환기 환경을 만들어드릴게요.",
  text02: "공기질 센서가 현재 실내 미세먼지 \n수치가 나쁨을 감지했어요.",
  text03: "창문을 열어 실내 공기를 \n환기시켜보세요.",
  text04: "문이 열리면 공기청정기가 \n알아서 멈춰 에너지를 절약합니다.",
  text05: "문이 열리면 공기청정기가 \n알아서 멈춰 에너지를 절약합니다.",
  text06: "에너지 낭비 없이 상쾌한 \n집안공기 마스터팩을 경험해보세요",
};
export default TutorialAirWindow;
