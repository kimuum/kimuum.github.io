import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsSummer() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "여름 온습도 관리팩",
  imageFolder: "summer",
  themeColor: "#7A7958",
  topTitleArea: {
    titleLabel: <>#온/습도 케어 필요 고객 #구옥에 거주하는 고객</>,
    titleMain: (
      <>
        <p>맞춰봐요 최적의 온습도,</p>
        <p>온습도 관리팩</p>
      </>
    ),
    titleSub: [
      {
        label: "매일 상쾌하도록",
        text: "온/습도 자동 관리",
      },
      {
        label: "뽀송뽀송하게 입을 수 있게",
        text: "옷방 습도 관리",
      },
    ],
    titleImage: {
      src: "img_summer_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "침실",
      },
      {
        place: "주방",
      },
      {
        place: "팬트리",
      },
    ],
    titleMain: "집안 공기를 언제나 뽀송하게 유지하고 싶으신가요?",
    titleSub: (
      <>
        <p>
          갑작스러운 날씨 변화에도 온도와 습도를 제어하여 쾌적한 환경을 유지하는
          맞춤형 공간 솔루션입니다.
        </p>
        <p>꿉꿉한 바깥 날씨에도 상쾌한 공간을 경험하세요.</p>
      </>
    ),
    titleImage: {
      src: "img_summer_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "온/습도 자동 조절",
      articleTitle: (
        <>
          <p>매일이 상쾌하도록!</p>
          <p>스마트 관리로 유지하세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            온습도 센서가 설정된 온/습도 범위를 벗어나면 실시간으로 알려줘요.
          </p>
          <p>
            LG ThinQ ON에 간단한 요청으로 항상 쾌적한 실내 환경을 유지하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_summer_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "옷방 습도 관리",
      articleTitle: (
        <>
          <p>습기 걱정 없는 옷장,</p>
          <p>이제 뽀송한 옷만 입으세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>스타일러와 공기청정기가 자동으로 온습도를 관리해요.</p>
          <p>
            옷방 또는 옷장 속 결로와 곰팡이 걱정 없이 매일 옷을 상쾌하게
            유지하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_summer_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "TemperatureHumiditySensor",
    "ThinQSmartPlug",
    "RemoteControlHub",
  ],
};

export default BridgeContentsSummer;
