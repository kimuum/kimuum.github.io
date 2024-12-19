import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsAirStudy() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "학습환경 조성팩",
  imageFolder: "air_study",
  themeColor: "#754232",
  topTitleArea: {
    titleLabel: <>#학령기 자녀 가구</>,
    titleMain: (
      <>
        <p>느껴봐요 달라진 집중력,</p>
        <p>학습환경 조성팩</p>
      </>
    ),
    titleSub: [
      {
        label: "공부가 하고 싶어지도록",
        text: "학습 환경 조성",
      },
      {
        label: "시간이 가는지 모르게",
        text: "집중력 강화 환경 유지",
      },
    ],
    titleImage: {
      src: "img_air_study_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "아이방",
      },
      {
        place: "공부방",
      },
    ],
    titleMain: (
      <>
        아이에게 최고의 학습 환경
        <br />을 제공하고 싶으신가요?
      </>
    ),
    titleSub: (
      <>
        <p>
          학습 전 공간을 미리 최적화하고, <br />
          학습 중에도 쾌적함을 유지해주는 스마트 솔루션입니다.
        </p>
        <p>
          아이의 집중력과 몰입감을 위한 <br />
          완벽한 학습 환경을 조성하세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_air_study_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "학습 환경 조성",
      articleTitle: (
        <>
          <p>완벽한 학습 환경</p>
          <p>
            아이를 위해 <br />
            미리 준비하세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            학습 시간에 맞춰 가전 제품이 온도와 습도를 조절하고, <br />
            조명의 색온도를{" "}
          </p>
          <p className="mo-inline">
            집중에 적합하게 맞추어 <br />
            쾌적한 환경에서 학습할 수 있게 환경을 미리 조성해요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_air_study_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "집중력 강화 환경 유지",
      articleTitle: (
        <>
          <p>시간 가는줄 모르는 아이!</p>
          <p>
            최적의 몰입 환경을 <br />
            유지해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>
            ThinQ 온도센서는 방 안의 공기질과 미세먼지 상태를 <br />
            실시간으로 모니터링하고,
          </p>
          <p>
            공기청정기를 작동시키거나 자동 환기를 설정해 <br />
            최적의 몰입 환경을 유지해 줘요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_air_study_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "ThinQSmartButton2",
    "AirSensor",
    "DoorSensor",
    "SmartBulb",
  ],
};

export default BridgeContentsAirStudy;
