import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsVisit() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "세이프티 컨트롤팩",
  imageFolder: "visit",
  themeColor: "#534331",
  topTitleArea: {
    titleLabel: <>#3인이상 맞벌이 가구 #여성 1인 가구</>,
    titleMain: (
      <>
        <p>높여봐요 우리집 안전지수,</p>
        <p>세이프티 컨트롤팩</p>
      </>
    ),
    titleSub: [
      {
        label: "언제 어디서든 안전하게",
        text: "외부 실시간 모니터링",
      },
      {
        label: "단 한순간도 놓치지 않게",
        text: "외부 상황 알림",
      },
    ],
    titleImage: {
      src: "img_visit_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "거실",
      },
      {
        place: "현관",
      },
    ],
    titleMain: (
      <>
        빈 집이 걱정되나요? <br />
        아이만 혼자 있나요?
      </>
    ),
    titleSub: (
      <>
        <p>
          도어벨/차임벨 안전을 강화하여 당신의 집을 24시간 <br />
          빈틈없이 지켜주는 맞춤형 공간 솔루션입니다.
        </p>
        <p>
          언제 어디에 있던 안심할 수 있는 <br />
          안전한 집 환경을 만들어보세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_visit_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "외부 실시간 모니터링",
      articleTitle: (
        <>
          <p>언제든 어디서든,</p>
          <p>우리 집이 안전하도록</p>
        </>
      ),
      articleText: (
        <>
          <p>도어벨이 문 밖의 움직임을 실시간 감지해서 알려주고,</p>
          <p>
            누군가 초인종을 누르면 외부에서도 원격으로 <br />
            확인하고 대화할 수 있어요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_visit_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "외부 상황 알림",
      articleTitle: (
        <>
          <p>반짝! 깜빡!</p>
          <p>단 한순간도 놓치지 않아요.</p>
        </>
      ),
      articleText: (
        <>
          <p>택배 또는 음식 배달 온 것을 놓칠 뻔한 순간에도</p>
          <p>똑똑한 스마트 전구가 실시간으로 알려줘요.</p>
        </>
      ),
      articleImage: {
        src: "img_visit_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: ["voiceHub", "DoorBell", "SmartBulb"],
};

export default BridgeContentsVisit;
