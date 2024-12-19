import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsPetEnvironment() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "반려동물 맞춤케어팩",
  imageFolder: "pet_environment",
  themeColor: "#635D54",
  topTitleArea: {
    titleLabel: <>#1인 가구 #맞벌이 직장인</>,
    titleMain: (
      <>
        <p>모셔봐요 우리집 멍냥이,</p>
        <p>반려동물 맞춤케어팩</p>
      </>
    ),
    titleSub: [
      {
        label: "쾌적하고 시원하게",
        text: "펫 맞춤 온습도 케어",
      },
      {
        label: "혼자서도 무섭지 않도록",
        text: "펫 맞춤 조명 제어",
      },
      {
        label: "알아서 깨끗하게",
        text: "털날림 집중케어",
      },
    ],
    titleImage: {
      src: "img_pet_environment_top",
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
        우리집 댕냥이에게 <br />
        쾌적한 환경을 만들어주고 <br />
        싶으신가요?
      </>
    ),
    titleSub: (
      <>
        <p>
          반려동물과 함께 생활하는 공간을 쾌적하게 <br />
          만들어주는 맞춤형 공간 솔루션입니다.
        </p>
        <p>
          내가 옆에 있는 것처럼 반려동물이 편안함을 느끼며 <br />
          행복하게 지낼 수 있는 공간을 만들어보세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_pet_environment_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "펫 맞춤 온습도 케어",
      articleTitle: (
        <>
          <p>쾌적하고 시원하게!</p>
          <p>
            최적의 온습도로 <br />
            관리해줘요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>온습도 센서가 실시간으로 환경을 모니터링하여 </p>
          <p>
            반려동물에게 적합한 최적의 온습도 환경을 <br />
            만들 수 있도록 해요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_pet_environment_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "펫 맞춤 조명 제어",
      articleTitle: (
        <>
          <p>혼자서도 무섭지 않도록!</p>
          <p>안정감 있게 밝아져요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            어두워지는 시간에 맞춰 <br />
            ThinQ 스마트 전구가 자동으로 켜지며,
          </p>
          <p>반려동물에게 안정감을 주는 편안한 조도로 변경돼요.</p>
        </>
      ),
      articleImage: {
        src: "img_pet_environment_middle_content_02",
        alt: "",
      },
    },
    {
      textFirst: true,
      articleLabel: "털날림 집중케어",
      articleTitle: (
        <>
          <p>언제나 깨끗하게!</p>
          <p>
            날리는 털을 <br />
            깨끗하게 청소해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            ThinQ ON에 간단한 음성 명령으로 가전 기기를 <br />
            한번에 제어하여{" "}
          </p>
          <p className="mo-inline">
            털날림에서 해방된 쾌적한 <br />
            실내환경을 유지할 수 있어요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_pet_environment_middle_content_03",
        alt: "",
      },
    },
  ],
  packageList: ["voiceHub", "TemperatureHumiditySensor", "SmartBulb"],
};

export default BridgeContentsPetEnvironment;
