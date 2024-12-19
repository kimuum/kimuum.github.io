import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsAirWindow() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "집안공기 마스터팩",
  imageFolder: "air_window",
  themeColor: "#3D4658",
  topTitleArea: {
    titleLabel: <>#3~4인 가구 #호흡기 관리에 예민한 고객</>,
    titleMain: (
      <>
        <p>마셔봐요 언제나 청정공기,</p>
        <p>집안공기 마스터팩</p>
      </>
    ),
    titleSub: [
      {
        label: "빈틈없이 깨끗하게",
        text: "공기질 모니터링 및 관리",
      },
      {
        label: "미세먼지로부터 자유롭게",
        text: "외부 연동 실내 공기 케어",
      },
      {
        label: "상황에 맞춰 스마트하게",
        text: "환기&필터 관리 솔루션",
      },
    ],
    titleImage: {
      src: "img_air_window_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "거실",
      },
    ],
    titleMain: (
      <>
        집안 공기를 <br />
        언제나 쾌적하게 <br />
        유지하고 싶으신가요?
      </>
    ),
    titleSub: (
      <>
        <p>
          다양한 집안 상황에 맞는 공기질을 케어하고 <br />
          최고의 내부 환경을 제공하는 스마트 솔루션입니다.
        </p>
        <p>
          자동 환기, 온도/습도 자동 조절, 에너지 절약을 위한 공간 <br />
          케어로 언제나 상쾌한 공기질을 경험하세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_air_window_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "공기질 모니터링 및 관리",
      articleTitle: (
        <>
          <p>빈틈없이 쾌적하게,</p>
          <p>집안을 상쾌하게 유지해요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            ThinQ 공기질 센서가 온도, 습도, 미세먼지를 <br />
            지속적으로 모니터링하며
          </p>
          <p>항상 깨끗하고 건강한 실내 환경을 유지해줘요.</p>
        </>
      ),
      articleImage: {
        src: "img_air_window_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "외부 연동 실내 공기 케어",
      articleTitle: (
        <>
          <p>미세먼지로부터 자유롭게,</p>
          <p>상쾌한 환경을 유지해요.</p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            ThinQ 공기질 센서가 외부 미세먼지 수치에 따라 귀가 시 <br />에
            자동으로{" "}
          </p>
          <p className="mo-inline">
            집안 공기를 개선해줘요. 항상 상쾌한 집에서 <br />
            맞이하는 일상을 경험하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_air_window_middle_content_02",
        alt: "",
      },
    },
    {
      textFirst: true,
      articleLabel: "환기&필터 관리 솔루션",
      articleTitle: (
        <>
          <p>상황에 맞춰 스마트하게,</p>
          <p>
            에너지도 효율적으로 <br />
            관리해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            공기질 변화에 반응하여 자동으로 공기청정기 컨트롤 하여 <br />
            필터의 수명을 관리하고,{" "}
          </p>
          <p className="mo-inline">
            적절한 환기 타이밍을 알려줘요.
            <br /> 간편하게 스마트한 케어를 경험하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_air_window_middle_content_03",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "AirSensor",
    "DoorSensor",
    "TemperatureHumiditySensor",
  ],
};

export default BridgeContentsAirWindow;
