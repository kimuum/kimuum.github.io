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
import FieldProgress from "pages/tutorial/component/FieldProgressBar";
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
import FieldSceneSwiper from "pages/tutorial/component/FieldSceneSwiper";
import SceneSwiper from "pages/tutorial/component/SceneSwiper";
import SceneSwiperPager from "pages/tutorial/component/SceneSwiperPager";
import SceneSlideBack from "pages/tutorial/component/SceneSlideBack";
import SceneSlideFront from "pages/tutorial/component/SceneSlideFront";
import SceneSlideContent from "pages/tutorial/component/SceneSlideContent";

//image
import IconCamera from "assets/images/tutorial/tutorial_camera.svg";

function TutorialVisit() {
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
  const popupRef = useRef(null);

  // 타이틀, 각 화면 진행률
  const stepDataMap = {
    0: { text: fieldTitle.text00, percent: 0 },
    1: { text: fieldTitle.text01, percent: 0 },
    2: { text: fieldTitle.text02, percent: 20 },
    3: { text: fieldTitle.text03, percent: 40 },
    4: { text: fieldTitle.text04, percent: 50 },
    5: { text: fieldTitle.text05, percent: 100 },
    6: { text: fieldTitle.text06, percent: 0 },
    7: { text: fieldTitle.text07, percent: 30 },
    8: { text: fieldTitle.text08, percent: 70 },
    9: { text: fieldTitle.text09, percent: 100 },
    10: { text: fieldTitle.text10, percent: 0 },
  };
  const { text: topText, percent: currentPercent } = stepDataMap[isStep];
  const sceneLast = Object.keys(stepDataMap).length - 1; //11개

  // 화면 진행률 퍼센트 UI
  const ActionPercent = (stepValue) => {
    const { percent: previousPercent } = stepDataMap[stepValue];
    setPercent(previousPercent);
  };

  // 이전 버튼 이벤트
  const handleStepDecrement = () => {
    if (isStep > 0) {
      if (isStep === 8 || isStep === 9) {
        handelAction(7);
      } else if (isStep === 10) {
        handelAction(8);
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
    // step, state, nextState
    handleVideoPlay(2, 2, 3);

    const videoScene03 = sceneRef[3].current.children[0];

    if (isStep === 3 && videoScene03.tagName === "VIDEO") {
      videoScene03.play();
      videoScene03.addEventListener("ended", () => {
        handelAction(4);
      });
    } else {
      if (videoScene03) {
        setTimeout(() => {
          videoScene03.pause();
          videoScene03.currentTime = 0;
        }, 600);
      }
    }
    if (popupRef.current) {
      setTimeout(() => {
        popupRef.current.style.opacity = 1;
      }, 1000);
    }

    handleVideoPlay(5, 4, 6);
    handleVideoPlay(7, 6, 8);

    const videoScene07 = sceneRef[7].current.children[0];

    if ((isStep === 8 || isStep === 9) && videoScene07.tagName === "VIDEO") {
      videoScene07.play();

      const handleTimeUpdate = () => {
        var currentTime = videoScene07.currentTime;
        if (Math.floor(currentTime) === 7) {
          handelAction(9);
        }
      };
      videoScene07.addEventListener("ended", () => {
        handelAction(10);
      });
      // 영상 시간 체크
      videoScene07.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        videoScene07.removeEventListener("timeupdate", handleTimeUpdate);
      };
    } else {
      if (videoScene07) {
        setTimeout(() => {
          videoScene07.pause();
          videoScene07.currentTime = 0;
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
              title="방문자 감지 경험하기"
              onClick={() => {
                handelAction(2);
              }}
            />
          )}

          {isStep === 6 && (
            <TutorialWhiteButton
              title="스마트 알림 경험하기"
              onClick={() => {
                handelAction(7);
              }}
            />
          )}
        </>
      }
      packages={
        <FieldSceneSwiper
          isPrev={false}
          isStep={isStep === sceneLast}
          isNext={isStep === 8 || isStep === 9}
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
            {/* 제품 정보 - 현관 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip01 toLink={"/"} align="bottom">
                      헤이홈 <br />
                      도어벨+차임벨
                    </ProductTooltip01>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/visit/tutorial_visit_1_1.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
            {/* 제품 정보 - 주방 */}
            <SceneSlide>
              {isStep === sceneLast && (
                <SlideFront>
                  <ToolTipBox>
                    <ProductTooltip02 toLink={"/"} align="top">
                      헤이홈 스마트 전구
                    </ProductTooltip02>
                  </ToolTipBox>
                </SlideFront>
              )}
              <SlideBack>
                <SceneImage
                  isStep={isStep === sceneLast}
                  src={require("assets/images/tutorial/visit/tutorial_visit_2_1.jpg")}
                  alt={""}
                />
              </SlideBack>
            </SceneSlide>
          </SceneSwiper>
        </FieldSceneSwiper>
      }
      back={
        <FieldBackground>
          {/* #0 : 현관 */}
          <SceneImage
            ref={sceneRef[0]}
            isPrev={isStep === 1}
            isStep={isStep === 0}
            isNext={false}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_0.jpg")}
            alt={""}
          />

          {/* #1-1 : 현관문 */}
          <SceneImage
            ref={sceneRef[1]}
            isPrev={isStep === 2}
            isStep={isStep === 1}
            isNext={isStep === 0}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_1.jpg")}
            alt={""}
          />

          {/* #1-2 : 현관문 */}
          <SceneVideo
            ref={sceneRef[2]}
            isPrev={isStep === 3 || isStep === 4}
            isStep={isStep === 2}
            isNext={isStep === 1}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_2.mp4")}
          />

          {/* #1-3 : 휴대폰 */}
          <SceneVideo
            ref={sceneRef[3]}
            isPrev={isStep === 5}
            isStep={isStep === 3 || isStep === 4}
            isNext={isStep === 2}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_3.mp4")}
          />

          {/* #1-3-2: 알림 팝업 */}
          {isStep === 4 && (
            <MotionWithPopup
              ref={popupRef}
              children={
                <div className="visit-content">
                  <div className="visit-top">
                    <div className="visit-icon">
                      <img src={IconCamera} />
                    </div>
                    <dl className="visit-dl">
                      <dt>동작 감지 캡쳐</dt>
                      <dd>현관문앞 움직임이 감지되었습니다.</dd>
                    </dl>
                  </div>
                  <div className="visit-image">
                    <img
                      src={require("assets/images/tutorial/visit/tutorial_visit_1_3_img_popup.jpg")}
                    />
                  </div>
                </div>
              }
              button={
                <BtnSetting
                  aesthetic="bgRed"
                  onClick={() => {
                    handelAction(5);
                  }}
                >
                  대화하기
                </BtnSetting>
              }
            />
          )}

          {/* #1-5 : 현관문, #1-6: 현관문 확대 */}
          <SceneVideo
            ref={sceneRef[4]}
            isPrev={isStep === 6}
            isStep={isStep === 5}
            isNext={isStep === 3 || isStep === 4}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_5.mp4")}
          />

          {/* #2-1 : 주방 */}
          <SceneImage
            ref={sceneRef[5]}
            isPrev={isStep === 7}
            isStep={isStep === 6}
            isNext={isStep === 5}
            src={require("assets/images/tutorial/visit/tutorial_visit_2_1.jpg")}
            alt={""}
          />

          {/* #2-2 : 현관문 */}
          <SceneVideo
            ref={sceneRef[6]}
            isPrev={isStep === 8 || isStep === 9}
            isStep={isStep === 7}
            isNext={isStep === 6}
            src={require("assets/images/tutorial/visit/tutorial_visit_1_2.mp4")}
          />

          {/* #2-3 : 주방, #2-4 : 주방 확대 */}
          <SceneVideo
            ref={sceneRef[7]}
            isPrev={isStep === 10}
            isStep={isStep === 8 || isStep === 9}
            isNext={isStep === 7}
            src={require("assets/images/tutorial/visit/tutorial_visit_2_3.mp4")}
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
      progress={
        isStep > 1 &&
        isStep !== 6 &&
        isStep < sceneLast && <FieldProgress percent={isPercent} />
      }
    />
  );
}

// 스마트 전구
const ProductTooltip02 = styled(ToolTipProduct)`
  /* PC */
  @media screen and (min-width: 769px) {
    top: 17.9rem;
    right: 34.8rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 41.5%;
    left: 33%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    left: 37%;
  }
`;
// 도어벨+차임벨
const ProductTooltip01 = styled(ToolTipProduct)`
  text-align: center;
  /* PC */
  @media screen and (min-width: 769px) {
    top: 24.4rem;
    right: 15.5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 50%;
    right: 17%;
  }
  /* ios 큰 텍스트 */
  @media screen and (max-width: 359px) {
    top: 49%;
    right: 19%;
  }
`;

const BtnSetting = styled(Button)`
  height: 4.6rem;
  font-size: 1.3rem;
`;
const MotionWithPopup = styled(FieldPopup)`
  position: absolute;
  opacity: 0;
  z-index: 4;
  transition: opacity 0.5s;
  & > .field-body {
    & > .visit-content {
      .visit-top {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      .visit-dl {
        & > dt {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.4;
          color: #0f0f0f;
        }
        & > dd {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 1.4;
          color: #333333;
        }
      }
      .visit-image {
        overflow: hidden;
        border-radius: 8px;
      }
      .visit-icon {
        flex-shrink: 0;
        width: 4.2rem;
        height: 4.2rem;
        margin-right: 1.2rem;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 31.6rem;
    right: 14.3rem;
    bottom: 12.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    left: 2.2rem;
    right: 2.2rem;
    bottom: 8rem;
    max-width: calc(100% - 4.4rem);
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
    }
  }
`;

// 튜토리얼 문구
const fieldTitle = {
  title: "세이프티 컨트롤팩",
  text00: "외출 중이거나 아이 혼자 있을 때 \n외부인의 방문이 걱정될 때가 있죠.",
  text01: "우리집 방문자를 모니터링하고, \n안전하게 대응해보세요.",
  text02: "문 밖 움직임이 감지되면, \n도어벨 동작 감지 센서가 캡처해줘요.",
  text03: "도어벨 센서가 캡처한 이미지는 \n알림을 통해 확인할 수 있어요.",
  text04: "외출 시에도 문 밖 상황을 \n실시간 모니터링 가능하며",
  text05: "집 밖에서도 집에 있는 것처럼 \n방문자와 대화할 수 있어요.",
  text06:
    "도어벨 소리를 놓치거나, 비대면을 \n원할 때에는 이렇게 활용 가능해요.",
  text07: "도어벨 동작 감지 센서가 \n문 밖 움직임을 감지하면",
  text08: "어디서든 모니터링이 가능하며 \n스마트 전구가 알림을 줍니다.",
  text09: "문 밖 움직임이 사라지면 \n불빛도 원래대로 돌아옵니다.",
  text10:
    "언제 어디서나 안전하고 편리하게, \n세이프티 컨트롤팩을 경험해보세요.",
};
export default TutorialVisit;
