import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsKid() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "분리수면 안심팩",
  imageFolder: "kid",
  themeColor: "#7C5F3D",
  topTitleArea: {
    titleLabel: <>#신생아 가족 #3~4인 가구</>,
    titleMain: (
      <>
        <p>재워봐요 마음 놓고,</p>
        <p>분리수면 안심팩</p>
      </>
    ),
    titleSub: [
      {
        label: "한번에 간편하게",
        text: "수면 공간 케어",
      },
      {
        label: "따로 있어도 언제든지",
        text: "수면 상태 모니터링",
      },
      {
        label: "따로 있어도 안심되도록",
        text: "아이 움직임 알림",
      },
    ],
    titleImage: {
      src: "img_kid_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "아이방",
      },
    ],
    titleMain: <>분리수면 시작한 우리 아이, 잘 자는지 걱정되나요?</>,
    titleSub: (
      <>
        <p>
          아이의 수면 상태를 실시간 확인하고, 통잠 잘 수 있는 환경을 조성하는
          맞춤형 공간 솔루션입니다.
        </p>
        <p>
          부모는 안심하고, 아이는 꿀잠 자는 최적의 수면 환경을 만들어보세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_kid_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "수면 공간 케어",
      articleTitle: (
        <>
          <p>
            아이가 더 큰 꿈을 <br />꿀 수 있도록!
          </p>
          <p>
            간편하게 수면 환경을 <br />
            조성해요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            아이방 공기질상태를 모니터링하고, <br />
            ThinQ ON 또는 스마트 버튼으로{" "}
          </p>
          <p className="mo-inline">
            가전 기기와 조명을 <br />
            한번에 제어하여 최적의 수면 환경을 만들어요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_kid_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "수면 상태 모니터링",
      articleTitle: (
        <>
          <p>따로 있어도 언제든지, </p>
          <p>
            아이 모습을 <br />
            바로 확인하세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>아이가 방에서 혼자 잘 자고 있는지 걱정되고 궁금하면 </p>
          <p>홈카메라를 통해 실시간으로 확인할 수 있어요.</p>
        </>
      ),
      articleImage: {
        src: "img_kid_middle_content_02",
        alt: "",
      },
    },
    {
      textFirst: true,
      articleLabel: "아이 움직임 알림",
      articleTitle: (
        <>
          <p>따로 있어도 안심되도록, </p>
          <p>
            잠에서 깨면 <br />
            바로 알려줘요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>혼자 자는 아이가 잠에서 깨어나는 순간, </p>
          <p>홈카메라가 움직임을 감지해서 무드등으로 즉시 알려줘요.</p>
        </>
      ),
      articleImage: {
        src: "img_kid_middle_content_03",
        alt: "",
      },
    },
  ],
  packageList: [
    "voiceHub",
    "ThinQSmartButton2",
    "HomeCameraPro",
    "SmartBulb",
    "MoodLight",
    "AirSensor",
  ],
};

export default BridgeContentsKid;
