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
import FieldPopup from "pages/tutorial/component/FieldPopup";
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
import HandleCountingUp from "pages/tutorial/component/HandleCountingUp";

function TutorialOuting() {
  const [isStep, setStep] = useState(0); // 플로우 화면 번호
  const [isPercent, setPercent] = useState(0); // 플로우 진행률 버튼
  const [isTime, setTime] = useState(29); // 타이머 시간

  // 이전/초기화 버튼
  const BtnPrevRef = useRef(null);
  const BtnRefreshRef = useRef(null);

  // scene image , video
  const sceneRef = [
    useRef(null), // 0 #0 : 패키지 체험하기
    useRef(null), // 1 #1-1 : 맞춤 돌봄 경험하기
    useRef(null), // 2 #1-2-1 : 강아지 집 앞(스틸컷)
    // useRef(null), 3 #1-2-2 : 강아지 집 앞(영상1)
    useRef(null), // 4 #1-3-1 , #1-3-2 : 자동 사료 급식기(영상1 재생)
    useRef(null), // 5 #1-4 : 홈 카메라(영상2)
    useRef(null), // 6 #6 : 사용자 휴대폰 하는 모습(영상3)
    useRef(null), // 7 제품 정보
  ];

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 30 },
    3: { text: fieldTitle.text03, percent: 50 },
    4: { text: fieldTitle.text04, percent: 70 },
    5: { text: fieldTitle.text05, percent: 90 },
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
    const videoScene03 = sceneRef[3].current.children[0];

    if (isStep === 4 && videoScene03.tagName === "VIDEO") {
      setTimeout(() => {
        setTime(30); // 6:29 -> 6:30 시간 변경
        videoScene03.play();

        videoScene03.addEventListener("ended", () => {
          handelAction(5);
        });
      }, 1000);
    } else {
      if (videoScene03) {
        setTimeout(() => {
          setTime(29); // 6:29 시간 초기화
          videoScene03.pause();
          videoScene03.currentTime = 0;
        }, 600);
      }
    }

    handleVideoPlay(5, 4, 6);
    handleVideoPlay(6, 5, 7);
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
              title="맞춤 돌봄 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {isStep === 3 && (
            <MotionWithPopup
              children={
                <div className="pet-content">
                  <dl>
                    <dt>급여 시간</dt>
                    <dd>06:30</dd>
                  </dl>
                  <dl>
                    <dt>급여 횟수</dt>
                    <dd>2회</dd>
                  </dl>
                </div>
              }
              button={
                <BtnSetting
                  aesthetic="bgRed"
                  onClick={() => {
                    handelAction(4);
                  }}
                >
                  급식 설정 완료
                </BtnSetting>
              }
            />
          )}

          {isStep === 4 && (
            <ContentTimer>
              <span className="icon-time">
                <span>시간</span>
                <span>06 : {isTime}</span>
              </span>
              <span className="icon-feed">
                <span>급여량 </span>
                <span>
                  <HandleCountingUp
                    isStep={isStep === 4}
                    min={0}
                    max={8}
                    speed={300}
                    delay={3000}
                    unit="g"
                  />
                </span>
              </span>
            </ContentTimer>
          )}

          {isStep === 7 && <TutorialBuyButton />}
        </>
      }
      back={
        <FieldBackground>
          {isStep === 2 && (
            <ClickButton01
              text={"펫 급식기를 눌러주세요."}
              onClick={() => {
                handelAction(3);
              }}
            />
          )}

          {isStep === 7 && (
            <ToolTipBox>
              <ProductTooltip01 toLink={"/"} align="top">
                LG ThinQ ON
              </ProductTooltip01>
              <ProductTooltip02 toLink={"/"} align="bottom">
                헤이홈 홈카메라
              </ProductTooltip02>
              <ProductTooltip03 toLink={"/"} align="right">
                헤이홈 펫급식기
              </ProductTooltip03>
            </ToolTipBox>
          )}

          {/* #0 : 전체 거실 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 1}
            isStep={isStep === 0}
            isNext={isStep === 7}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_0.jpg")}
            alt={""}
          />

          {/* #1-1 : 강아지 집 앞 */}
          <SceneImage
            ref={sceneRef[1]}
            isPrev={isStep === 2}
            isStep={isStep === 1}
            isNext={isStep === 0}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_1.jpg")}
            alt={""}
          />

          {/* #1-2-1 : 강아지 집 앞 */}
          <SceneImage
            ref={sceneRef[2]}
            isPrev={isStep === 3 || isStep === 4}
            isStep={isStep === 2}
            isNext={isStep === 1}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_2.jpg")}
            alt={""}
          />

          {/* #1-3-1 : 자동 사료 급식기 , #1-3-2 : 자동 사료 급식 */}
          <SceneVideo
            ref={sceneRef[3]}
            isPrev={isStep === 5}
            isStep={isStep === 3 || isStep === 4}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_4.mp4")}
          />

          {/* #1-4 : 홈 카메라 */}
          <SceneVideo
            ref={sceneRef[4]}
            isPrev={isStep === 6}
            isStep={isStep === 5}
            isNext={isStep === 3 || isStep === 4}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_5.mp4")}
          />

          {/* #6 : 사용자 휴대폰 하는 모습 */}
          <SceneVideo
            ref={sceneRef[5]}
            isPrev={isStep === 7}
            isStep={isStep === 6}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_6.mp4")}
          />

          {/* #7 : 제품 정보 */}
          <SceneImage
            ref={sceneRef[6]}
            isPrev={false}
            isStep={isStep === 7}
            isNext={isStep === 6}
            src={require("assets/images/tutorial/pet_outing/tutorial_pet_outing_1_0.jpg")}
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

// 펫 급식기
const ProductTooltip03 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 20rem;
    right: 40.1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 26%;
    left: 20%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    bottom: 24.6%;
    left: 34%;
  }
`;
// 홈 카메라
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 31rem;
    right: 32rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 56%;
    left: 38%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 55%;
    left: 50%;
  }
`;
// 보이스 허브
const ProductTooltip01 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 35.3rem;
    right: 23.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 50.6%;
    right: 36%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    right: 26%;
  }
`;

const ContentTimer = styled(FieldBlackDimBox)`
  max-width: 24.4rem;
`;
const BtnSetting = styled(Button)`
  height: 4.6rem;
  font-size: 1.3rem;
`;
const MotionWithPopup = styled(FieldPopup)`
  max-width: 31.6rem;
  margin-top: 4.4rem;
  & > .field-body {
    & > .pet-content {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      & > dl {
        position: relative;
        margin: 0 2.6rem;
        &:after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 50%;
          right: -2.5rem;
          width: 1px;
          height: 3.9rem;
          margin-top: -1.85rem;
          background-color: #eeeeee;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
        & > dt {
          margin-bottom: 2px;
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 1.4;
          color: #000000;
        }
        & > dd {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.4;
          color: #000000;
        }
      }
    }
  }
`;

// buttons
// 펫 급식기를 눌러주세요.
const ClickButton01 = styled(FieldClickButton)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > .field-label {
    background-color: #ff0017;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 11.3rem;
    right: 17rem;
    & > .field-label {
      margin-bottom: 1.4rem;
    }
    & > .field-button {
      width: 26rem;
      height: 26rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    bottom: 15%;
    right: 7.6rem;
    & > .field-label {
      margin-bottom: 1.1rem;
    }
    & > .field-button {
      width: 20.7rem;
      height: 20.7rem;
    }
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) and (max-height: 658px) {
    bottom: 15.5%;
    right: 24.5%;
    & > .field-button {
      width: 15.5rem;
      height: 15rem;
    }
  }
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
  title: "반려동물 원격케어팩",
  text00: "외출이나 여행할 때, 반려동물 식단과 \n건강 관리 걱정되시죠?",
  text01:
    "펫이 혼자 있을 때도 배고프지 않도록, \n자동 급여 시스템이 밥을 줄 수 있어요.",
  text02: "ThinQ 앱에서 펫 급식기의 \n급식 타이밍을 설정해보세요.",
  text03: "ThinQ 앱에서 펫 급식기의 \n급식 타이밍을 설정해보세요.",
  text04: "원하는 시간에 정확한 양의 \n사료를 줄 수 있어요.",
  text05: "홈카메라를 함께 사용하면 \n더욱 안심이에요.",
  text06: "실시간으로 집안을 보고, \n반려동물과 대화도 가능해요.",
  text07: "반려동물 원격케어팩으로 \n펫은 건강하게, 집사는 편안하게!",
};
export default TutorialOuting;
