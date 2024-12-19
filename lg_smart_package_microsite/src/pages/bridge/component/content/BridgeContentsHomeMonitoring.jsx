import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsHomeMonitoring() {
  return (
    <BridgeContentsContainer>
      <ContentLayout data={contents} />
    </BridgeContentsContainer>
  );
}

const BridgeContentsContainer = styled.div``;

const contents = {
  packageName: "마이홈 모니터링팩",
  imageFolder: "home_monitoring",
  themeColor: "#77603E",
  topTitleArea: {
    titleLabel: (
      <>
        #반려동물 가구 #3~4인 맞벌이 가구 <br />
        #신생아 육아 가구 #자녀 학령기 가구
      </>
    ),
    titleMain: (
      <>
        <p>살펴봐요 속속들이 우리집,</p>
        <p>마이홈 모니터링팩</p>
      </>
    ),
    titleSub: [
      {
        label: "우리 집을 안전하게",
        text: "가족 안전 모니터링",
      },
      {
        label: "어디서나 안심할 수 있도록",
        text: "외부 움직임 감지",
      },
    ],
    titleImage: {
      src: "img_monitoring_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleLabel: [
      {
        place: "집안 전체",
      },
    ],
    titleMain: (
      <>
        당신이 외출할 때 가족의 <br />
        안전이 걱정되시나요?
      </>
    ),
    titleSub: (
      <>
        <p>
          집안 상황을 실시간으로 체크하고, 예상치 못한 움직임에 실시간 알림으로
          대처할 수 있는 스마트 솔루션입니다.
        </p>
        <p>외출 시에도, 한밤중에도 집의 안전을 지켜보세요.</p>
      </>
    ),
    titleImage: {
      src: "img_monitoring_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "가족 안전 모니터링",
      articleTitle: (
        <>
          <p>우리 집을 안전하게!</p>
          <p>
            어디서든 <br /> 케어할 수 있어요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p className="mo-inline">
            ThinQ 도어센서가 가족의 귀가/외출을 감지하며, <br />홈 카메라를 통해{" "}
          </p>
          <p className="mo-inline">
            집안을 상황을 확인할 수 있어요. <br />
            ThinQ AI Home으로 가족의 안전을 강화 하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_monitoring_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "외부 움직임 감지",
      articleTitle: (
        <>
          <p>
            어디서나 안심할 수 <br />
            있도록!
          </p>
          <p>
            실시간 알림으로 <br />
            확인하세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>
            도어 센서가 현관에서 이상 움직임을 감지하면 <br />
            즉시 알림을 받고 확인할 수 있어요.
          </p>
          <p>어디서든 가족과 집의 안전을 모니터링하세요.</p>
        </>
      ),
      articleImage: {
        src: "img_monitoring_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: ["voiceHub", "DoorSensor", "HomeCameraPro"],
};

export default BridgeContentsHomeMonitoring;
