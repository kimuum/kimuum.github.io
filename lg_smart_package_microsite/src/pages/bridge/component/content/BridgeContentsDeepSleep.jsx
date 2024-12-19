import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsDeepSleep() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "숙면 솔루션팩",
  imageFolder: "deep_sleep",
  themeColor: "#716955",
  topTitleArea: {
    titleLabel: (
      <>#숙면이 필요한 현대인 #개인 맞춤형 취침/기상 환경을 원하는 고객</>
    ),
    titleMain: (
      <>
        <p>꿈꿔봐요 역대급 수면환경,</p>
        <p>숙면 솔루션팩</p>
      </>
    ),
    titleSub: [
      {
        label: "나만의 취침 환경을 한 번에",
        text: "취침 환경 조성",
      },
      {
        label: "상쾌한 아침을 맞이하도록",
        text: "기상 환경 조성",
      },
    ],
    titleImage: {
      src: "img_deep_sleep_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "침실",
      },
    ],
    titleMain: <>취침&amp;기상 시간이 항상 번거로우신가요?</>,
    titleSub: (
      <>
        <p>
          취침과 기상 설정을 자동화하여 매일 반복된 번거로움을 덜어주는 맞춤형
          공간 솔루션입니다.
        </p>
        <p>완벽한 하루의 시작과 마무리를 경험해 보세요.</p>
      </>
    ),
    titleImage: {
      src: "img_deep_sleep_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "취침 환경 조성",
      articleTitle: (
        <>
          <p>더 깊은 수면을 위해,</p>
          <p>이제 눈만 감으세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            LG ThinQ ON의 간단한 음성 명령 또는 스마트 버튼으로 간편하게 조명을
            조절하세요.
          </p>
          <p>
            당신이 자는 동안 온습도 센서가 더 깊은 잠을 위해 온도와 습도를
            최적화해줘요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_deep_sleep_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "기상 환경 조성",
      articleTitle: (
        <>
          <p>매일 아침을 상쾌하게,</p>
          <p>완벽한 하루를 시작해보세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            LG ThinQ ON이 기상 시간에 맞춰 커튼이 열리고 조명이 자동으로 켜져요.
          </p>
          <p>매일 활기차고 상쾌한 아침을 맞이하세요.</p>
        </>
      ),
      articleImage: {
        src: "img_deep_sleep_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "ThinQSmartButton2",
    "ThinQSmartPlug",
    "SmartBulb",
    "SmartElectricCurtain",
    "MoodLight",
    "ThinQLightingSwitchLED",
    "TemperatureHumiditySensor",
  ],
};

export default BridgeContentsDeepSleep;
