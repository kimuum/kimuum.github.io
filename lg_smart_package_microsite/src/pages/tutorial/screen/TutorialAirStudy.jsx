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

function TutorialAirStudy() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [useRef(null), useRef(null), useRef(null)];

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
    if (isStep === 2 || isStep === 3) {
      handelAction(1);
    } else if (isStep === 4 || isStep === 5) {
      handelAction(3);
    } else if (isStep === 6) {
      handelAction(4);
    } else {
      const prevStep = isStep - 1;
      handelAction(prevStep);
    }
  };

  // 화면 전환 버튼 클릭 이벤트
  const handelAction = (stepValue) => {
    setStep(stepValue); // 화면 번호 변경
    ActionPercent(stepValue);
  };

  useEffect(() => {
    const videoScene01 = sceneRef[1].current.children[0];
    const videoScene02 = sceneRef[2].current.children[0];

    if ((isStep === 2 || isStep === 3) && videoScene01.tagName === "VIDEO") {
      videoScene01.play();

      const handleTimeUpdate = () => {
        var currentTime = videoScene01.currentTime;
        if (Math.floor(currentTime) === 4) {
          handelAction(3);
        }
      };

      // 영상 시간 체크
      videoScene01.addEventListener("timeupdate", handleTimeUpdate);
      videoScene01.addEventListener("ended", () => {
        handelAction(4);
      });
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

    if ((isStep === 4 || isStep === 5) && videoScene02.tagName === "VIDEO") {
      videoScene02.play();

      const handleTimeUpdate = () => {
        var currentTime = videoScene02.currentTime;
        if (Math.floor(currentTime) === 4) {
          handelAction(5);
        }
      };

      // 영상 시간 체크
      videoScene02.addEventListener("timeupdate", handleTimeUpdate);
      videoScene02.addEventListener("ended", () => {
        handelAction(6);
      });

      return () => {
        videoScene02.removeEventListener("timeupdate", handleTimeUpdate);
      };
    } else {
      if (videoScene02) {
        setTimeout(() => {
          videoScene02.pause();
          videoScene02.currentTime = 0;
        }, 600);
      }
    }
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
          {(isStep === 4 || isStep === 5) && (
            <TemperatureBox>
              <span className="icon-temperature">
                <HandleCountingDown
                  isStep={isStep === 5}
                  min={21}
                  max={29}
                  speed={100}
                  delay={2500}
                  unit="℃"
                />
              </span>
              <span className="icon-humidity">
                <HandleCountingDown
                  isStep={isStep === 5}
                  min={50}
                  max={80}
                  speed={100}
                  delay={2500}
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
              title="최적의 몰입 경험하기"
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
              <ProductTooltip01 toLink={"/"} align="right">
                에어컨
              </ProductTooltip01>
              <ProductTooltip02 toLink={"/"} align="right">
                LG 공기질 센서
              </ProductTooltip02>
              <ProductTooltip03 toLink={"/"} align="bottom">
                LG ThinQ ON
              </ProductTooltip03>
              <ProductTooltip04 toLink={"/"} align="left">
                공기 청정기
              </ProductTooltip04>
            </ToolTipBox>
          )}

          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 2}
            isStep={isStep === 0 || isStep === 1}
            isNext={false}
            src={require("assets/images/tutorial/air_study/tutorial_air_study_1_0.jpg")}
            alt={""}
          />

          <SceneVideo
            ref={sceneRef[1]}
            isPrev={isStep === 4 || isStep === 5}
            isStep={isStep === 2 || isStep === 3}
            isNext={isStep === 0 || isStep === 1}
            src={require("assets/images/tutorial/air_study/tutorial_air_study_1_1.mp4")}
          />

          <SceneVideo
            ref={sceneRef[2]}
            isPrev={isStep === 6}
            isStep={isStep === 4 || isStep === 5}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/air_study/tutorial_air_study_1_2.mp4")}
          />

          <SceneImage
            ref={sceneRef[3]}
            isPrev={false}
            isStep={isStep === 6}
            isNext={isStep === 4}
            src={require("assets/images/tutorial/air_study/tutorial_air_study_1_3.jpg")}
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

// 공기 청정기
const ProductTooltip04 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 24.3rem;
    right: 18.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 18%;
    right: 22%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 23%;
  }
`;
// LG ThinQ ON
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 23.6rem;
    right: 42.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 30%;
    left: 15%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 21%;
  }
`;
// LG 공기질 센서
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 30.7rem;
    right: 36.9rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 38%;
    left: 28%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 38%;
    left: 33%;
  }
`;
// 에어컨
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 11.2rem;
    right: 21.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 33%;
    right: 30%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 32%;
  }
`;

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
  title: "학습환경 조성팩",
  text00: "우리 아이 학습 능률을 올려주는 \n최적의 몰입환경을 만들어 볼끼요?",
  text01: "ThinQ ON로 \n학습 모드를 실행합니다.",
  text02:
    "먼저, 오래 집중해도 눈이 편안한 \n조명 밝기와 색 온도를 맞춰드릴께요.",
  text03:
    "스마트 전구가 방 전체를 은은하게, \n책상 주변은 집중적으로 밝혀줍니다.",
  text04: "이어서, 두뇌 활동성을 높여주는 \n최적의 환경으로 개선해드릴께요.",
  text05: "호흡기가 민감한 아이에게 \n최적의 온 습도를 만들어드립니다.",
  text06:
    "우리 아이 건강하게 공부할 수 있도록, \n학습환경 조성팩을 경험해보세요.",
};
export default TutorialAirStudy;
