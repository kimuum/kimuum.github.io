import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsOuting() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "외출귀가 맞춤팩",
  imageFolder: "outing",
  themeColor: "#4F463C",
  topTitleArea: {
    titleLabel: <>#원격 가전 제어 관심 고객 #에너지 절약 관심 고객</>,
    titleMain: (
      <>
        <p>누려봐요 맞춤 일상,</p>
        <p>외출귀가 맞춤팩</p>
      </>
    ),
    titleSub: [
      {
        label: "한번의 요청으로 걱정 없이",
        text: "외출 전, 간편 공간 제어",
      },
      {
        label: "집 근처에 오면 알아서",
        text: "귀가 전, 자동 환경 조성",
      },
      {
        label: "한번의 요청으로 원하는대로",
        text: "귀가 후, 간편 환경 설정",
      },
    ],
    titleImage: {
      src: "img_outing_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "현관",
      },
    ],
    titleMain: (
      <>
        외출/귀가 시, <br />
        가전과 조명 매번 끄고 <br />
        켜기 번거로우시나요?
      </>
    ),
    titleSub: (
      <>
        <p>
          ThinQ ON 또는 스마트 버튼으로 집안 환경으로 <br />
          한번에 제어할수 있는 맞춤형 공간 솔루션입니다.{" "}
        </p>
        <p>
          에너지도 효율적으로 활용하면서, <br />
          편안하고 쾌적한 외출, 귀가 환경을 즐겨보세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_outing_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "외출 전, 간편 공간 제어",
      articleTitle: (
        <>
          <p>걱정은 집에 두고,</p>
          <p>
            한 번의 요청이면 <br />
            충분해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>ThinQ ON에 간단한 음성 명령 또는 스마트 버튼으로 </p>
          <p>사용하지 않는 가전 기기와 조명을 한 번에 끌 수 있어요. </p>
          <p>외출 시간을 절약하고, 에너지를 효율적으로 관리하세요.</p>
        </>
      ),
      articleImage: {
        src: "img_outing_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "귀가 전, 집안 환경 자동 조성",
      articleTitle: (
        <>
          <p>집 근처에 오셨나요?</p>
          <p>편안함이 당신을 기다려요.</p>
        </>
      ),
      articleText: (
        <>
          <p>ThinQ가 당신이 집 근처에 오면 자동으로 감지하고,</p>
          <p>
            집안의 가전 기기를 자동으로 켜서 <br />
            최적의 환경으로 조성해줘요.
          </p>
          <p>매일 당신을 기다리는 안락한 공간을 경험하세요.</p>
        </>
      ),
      articleImage: {
        src: "img_outing_middle_content_02",
        alt: "",
      },
    },
    {
      textFirst: true,
      articleLabel: "귀가 후, 간편 환경 설정",
      articleTitle: (
        <>
          <p>당신이 원하는대로,</p>
          <p>
            한 번의 요청이면 <br />
            완벽해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>ThinQ ON에 간단한 음성 명령 또는 스마트 버튼으로</p>
          <p>가전 기기와 조명, 커튼 등을 한번에 제어할 수 있어요.</p>
          <p>번거로웠던 과정을 손쉽게 제어 및 설정하세요.</p>
        </>
      ),
      articleImage: {
        src: "img_outing_middle_content_03",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "ThinQSmartButton2",
    "SmartBulb",
    "SmartElectricCurtain",
    "RemoteControlHub",
  ],
};

export default BridgeContentsOuting;
