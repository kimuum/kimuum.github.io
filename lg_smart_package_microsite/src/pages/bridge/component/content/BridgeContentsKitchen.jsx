import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsKitchen() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "키친 무드업팩",
  imageFolder: "kitchen",
  themeColor: "#212435",
  topTitleArea: {
    titleLabel: <>#신혼가구 #인테리어 관심 고객</>,
    titleMain: (
      <>
        <p>살려봐요 주방 분위기,</p>
        <p>키친 무드업팩</p>
      </>
    ),
    titleSub: [
      {
        label: "특별한 나만의 공간으로",
        text: "라인 LED&조명 분위기 조성",
      },
      {
        label: "오늘의 날씨와 분위기에 맞게",
        text: "날씨 연동 무드 설정",
      },
    ],
    titleImage: {
      src: "img_kitchen_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "주방",
      },
      {
        place: "펜트리",
      },
    ],
    titleMain: "주방을 당신만을 위한 공간으로 만들고 싶으신가요?",
    titleSub: (
      <>
        <p>
          무드업 냉장고와 스마트 조명으로 당신의 취향에 맞춰 주방의 분위기를
          자유롭게 변경하는 맞춤형 공간 솔루션입니다.
        </p>
        <p>
          단조로운 일상을 벗어나 색다른 주방 분위기로 나만의 특별한 주방을
          경험해 보세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_kitchen_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "라인 LED&조명 분위기 조성",
      articleTitle: (
        <>
          <p>재즈 바에 온 것 처럼!</p>
          <p>나만의 주방을 스타일링하세요!</p>
        </>
      ),
      articleText: (
        <>
          <p>
            음악에 따라 변화하는 무드업 냉장고의 1600가지 컬러의 라인 LED와
            스마트 전구로 당신만의 홈 바 또는 재즈 바로 만들어보세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_kitchen_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "날씨 연동 무드 설정",
      articleTitle: (
        <>
          <p>오늘의 무드를 공간으로!</p>
          <p>날씨에 맞는 공간을 제공해요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            LG ThinQ ON이 외부 날씨를 감지하여, 자동으로 어울리는 분위기를
            만들어줘요.
          </p>
          <p>이제 밖에 나가지 말고, 주방에서 야외의 분위기를 느껴보세요.</p>
        </>
      ),
      articleImage: {
        src: "img_kitchen_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: ["voiceHub", "ThinQSmartButton2", "DoorbellChime", "SmartBulb"],
};

export default BridgeContentsKitchen;
