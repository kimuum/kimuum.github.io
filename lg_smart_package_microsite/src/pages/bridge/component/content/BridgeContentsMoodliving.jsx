import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsMoodliving() {
  return (
    <ContentsContainer>
      <ContentLayout data={contents} />
    </ContentsContainer>
  );
}

const ContentsContainer = styled.div``;

const contents = {
  packageName: "리빙 무드업팩",
  imageFolder: "moodliving",
  themeColor: "#2C2621",
  topTitleArea: {
    titleLabel: <>#영화 매니아 #예비 신혼 부부</>,
    titleMain: (
      <>
        <p>즐겨봐요 홈 엔터테이닝,</p>
        <p>리빙 무드업팩</p>
      </>
    ),
    titleSub: [
      {
        label: "영화관처럼 몰입감 있게",
        text: "최적의 시청 환경 조성",
      },
      {
        label: "화면은 선명하게, 눈은 편안하게",
        text: "조명 자동 제어",
      },
    ],
    titleImage: {
      src: "img_moodliving_top",
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
        집에서 영화나 게임을 <br />더 생생하게 <br />
        즐기고 싶으신가요?
      </>
    ),
    titleSub: (
      <>
        <p>
          몰입 환경을 조성하여 최적의 시청 환경을 <br />
          제공하는 맞춤형 공간 솔루션입니다.{" "}
        </p>
        <p>
          자동 조명, 커튼 제어, 그리고 가전의 소음 감소 설정으로 <br />
          영화관 같은 분위기로 생생한 시청 경험을 누리세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_moodliving_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "최적의 시청 환경 조성",
      articleTitle: (
        <>
          <p>영화관에 온것처럼</p>
          <p>깊은 몰입감을 느껴보세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>TV 시청 시, 싱크라이트가 켜져 더 큰 몰입감을 제공하고, </p>
          <p>
            다양한 가전제품으로 쾌적한 환경을 조성해 <br />
            최고의 시청 경험을 선사해요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_moodliving_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "조명 자동 제어",
      articleTitle: (
        <>
          <p>눈이 편안한 시간,</p>
          <p>편안함 속에서 즐기세요.</p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            커튼이 자동으로 펼쳐지고 조명이 조정되어 눈부심을 <br />
            최소화하고{" "}
          </p>
          <p className="mo-inline">
            눈의 피로를 줄어든 공간에서 <br />
            시청 경험을 한층 더 업그레이드하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_moodliving_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "ThinQSmartButton2",
    "SyncLight",
    "SmartElectricCurtain",
    "RemoteControlHub",
  ],
};

export default BridgeContentsMoodliving;
