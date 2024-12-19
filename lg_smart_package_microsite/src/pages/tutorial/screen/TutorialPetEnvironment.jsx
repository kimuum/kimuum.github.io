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
import HandleCountingDown from "pages/tutorial/component/HandleCountingDown";
import HandleCountingUp from "pages/tutorial/component/HandleCountingUp";

function TutorialPetEnvironment() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 50 },
    3: { text: fieldTitle.text03, percent: 80 },
    4: { text: fieldTitle.text03, percent: 100 },
    5: { text: fieldTitle.text04, percent: 0 },
  };
  const { text: topText, percent: currentPercent } = stepDataMap[isStep];
  const sceneLast = Object.keys(stepDataMap).length - 1; //6개

  // 화면 진행률 퍼센트 UI
  const ActionPercent = (stepValue) => {
    const { percent: previousPercent } = stepDataMap[stepValue];
    setPercent(previousPercent);
  };

  // 이전 버튼 이벤트
  const handleStepDecrement = () => {
    if (isStep > 0) {
      if (isStep === 2 || isStep === 3 || isStep === 4) {
        handelAction(1);
      } else if (isStep === 5) {
        handelAction(2);
      } else {
        const prevStep = isStep - 1;
        handelAction(prevStep);
      }
    }
  };

  // 화면 전환 버튼 클릭 이벤트
  const handelAction = (stepValue) => {
    setStep(stepValue); // 화면 번호 변경
    ActionPercent(stepValue);
  };

  // 영상 재생 이벤트
  const handleVideoPlay = (step, state, nextState) => {
    const video = sceneRef[state].current.children[0];

    if (isStep === step && video.tagName === "VIDEO") {
      video.play();
      video.addEventListener("ended", () => {
        setStep(nextState);
        ActionPercent(nextState);
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
    const videoScene01 = sceneRef[1].current.children[0];
    if ((isStep === 2 || isStep === 3) && videoScene01.tagName === "VIDEO") {
      videoScene01.play();

      const handleTimeUpdate = () => {
        var currentTime = videoScene01.currentTime;
        if (Math.floor(currentTime) === 2) {
          handelAction(3);
        }
      };
      videoScene01.addEventListener("ended", () => {
        handelAction(4);
      });
      // 영상 시간 체크
      videoScene01.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        videoScene01.removeEventListener("timeupdate", handleTimeUpdate);
      };
    } else {
      if (videoScene01) {
        setTimeout(() => {
          videoScene01.pause();
          videoScene01.currentTime = 0;
        }, 600);
      }
    }

    // step, state, nextState;
    handleVideoPlay(4, 2, 5);
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

          {(isStep === 2 || isStep === 3 || isStep === 4) && (
            <TemperatureBox>
              <span className="icon-temperature">
                <HandleCountingDown
                  isStep={isStep === 2}
                  min={25}
                  max={29}
                  speed={100}
                  delay={3000}
                  unit="℃"
                />
              </span>
              <span className="icon-humidity">
                <HandleCountingDown
                  isStep={isStep === 2}
                  min={50}
                  max={70}
                  speed={100}
                  delay={3000}
                  unit="%"
                />
              </span>
              <span className="icon-light">
                <HandleCountingUp
                  isStep={isStep === 2}
                  min={0}
                  max={25}
                  speed={100}
                  delay={1000}
                  unit="%"
                />
              </span>
            </TemperatureBox>
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
              title="펫 케어 모드 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {isStep === sceneLast && <TutorialBuyButton />}
        </>
      }
      back={
        <FieldBackground>
          {isStep === sceneLast && (
            <ToolTipBox>
              <ProductTooltip01 toLink={"/"} align="bottom">
                에어컨
              </ProductTooltip01>
              <ProductTooltip02 toLink={"/"} align="right">
                LG ThinQ ON
              </ProductTooltip02>
              <ProductTooltip03 toLink={"/"} align="bottom">
                에어로타워
              </ProductTooltip03>
            </ToolTipBox>
          )}

          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 1 || isStep === 2 || isStep === 3}
            isStep={isStep === 0}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/pet_environment/tutorial_pet_environment_1_0.jpg")}
            alt={""}
          />
          <SceneVideo
            ref={sceneRef[1]}
            isPrev={isStep === 4}
            isStep={isStep === 1 || isStep === 2 || isStep === 3}
            isNext={isStep === 0}
            src={require("assets/images/tutorial/pet_environment/tutorial_pet_environment_1_1.mp4")}
          />
          <SceneVideo
            ref={sceneRef[2]}
            isPrev={isStep === 5}
            isStep={isStep === 4}
            isNext={isStep === 1 || isStep === 2 || isStep === 3}
            src={require("assets/images/tutorial/pet_environment/tutorial_pet_environment_1_2.mp4")}
          />

          <SceneImage
            ref={sceneRef[3]}
            isPrev={false}
            isStep={isStep === 5}
            isNext={isStep === 4}
            src={require("assets/images/tutorial/pet_environment/tutorial_pet_environment_1_3.jpg")}
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
              aesthetic="bgWhRedArrow"
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

// 에어로타워
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 24.3rem;
    right: 18.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 31%;
    right: 22.5%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 24%;
  }
`;
// LG ThinQ ON
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 26.1rem;
    right: 40.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 43.8%;
    left: 21%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 43.3%;
    left: 28%;
  }
`;
// 에어컨
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 10.6rem;
    right: 26.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 32%;
    right: 40%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 42%;
  }
`;

const TemperatureBox = styled(FieldBlackDimBox)`
  max-width: 25.4rem;
  & > [class*="icon-"] {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

/* 타이틀 별 가로 사이즈 */
const FieldTitleBox = styled(FieldTitle)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .field-top-text {
      ${(props) =>
        (props.isStep === 0 || props.isStep === 2 || props.isStep === 5) &&
        `
        white-space: pre-line;
        `}
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "반려동물 맞춤케어팩",
  text00: "사람보다 환경에 민감한 \n반려 동물 케어, 어려우셨죠?",
  text01: "반려동물이 안정감을 느끼는 온습도와 \n조도를 자동으로 조절해드려요.",
  text02:
    "외출 전, 스마트버튼을 누르거나 \n음성으로 펫케어 모드를 실행해주세요",
  text03: "반려동물이 안정감을 느끼는 온습도와 \n조도를 자동으로 조절해드려요.",
  text04: "사랑하는 내 펫을 위한, \n반려동물 맞춤케어팩을 경험해보세요.",
};
export default TutorialPetEnvironment;
