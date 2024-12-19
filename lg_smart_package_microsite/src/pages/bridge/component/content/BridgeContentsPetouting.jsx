import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

//content
import ContentLayout from "pages/bridge/component/ContentLayout";

function BridgeContentsPetOuting() {
  return (
    <ContentsContainer>
      <ContentLayout data={contents} />
    </ContentsContainer>
  );
}

const ContentsContainer = styled.div``;

const contents = {
  packageName: "반려동물 원격케어팩",
  imageFolder: "pet_outing",
  themeColor: "#726155",
  topTitleArea: {
    titleLabel: <>#펫 보유 가구</>,
    titleMain: (
      <>
        <p>지켜봐요 멀리서도 마이펫, </p>
        <p>반려동물 원격케어팩</p>
      </>
    ),
    titleSub: [
      {
        label: "정해진 시간, 적정량 자동 급여로",
        text: "건강한 식습관 관리",
      },
      {
        label: "항상 연결되어 걱정을 덜어주는",
        text: "실시간 모니터링",
      },
    ],
    titleImage: {
      src: "img_pet_outing_top",
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
        우리집 댕냥이, 혼자서도 <br />잘 지내는지 걱정되나요?
      </>
    ),
    titleSub: (
      <>
        <p>
          혼자 지내는 시간이 많은 반려동물의 <br />
          건강과 안전을 위한 맞춤형 공간 솔루션입니다.
        </p>
        <p>
          펫급식기와 홈 카메라를 통해 <br />
          식습관과 안전을 한 번에 관리하세요.
        </p>
      </>
    ),
    titleImage: {
      src: "img_pet_outing_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "건강한 식습관 관리",
      articleTitle: (
        <>
          <p>정해진 시간, 적정량으로!</p>
          <p>
            이제 자동으로 <br />
            관리하세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>
            펫급식기가 적정량의 사료를 <br />
            설정한 시간에 맞춰 자동으로 급여해줘요.
          </p>
          <p>외출시에도 반려동물의 건강을 편하게 챙길 수 있어요.</p>
        </>
      ),
      articleImage: {
        src: "img_pet_outing_middle_content_01",
        alt: "",
      },
    },
    {
      textFirst: false,
      articleLabel: "실시간 모니터링",
      articleTitle: (
        <>
          <p>항상 연결된 마음, </p>
          <p>당신의 걱정을 덜어드려요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            홈 카메라를 통해 반려동물의 모습을 실시간으로 <br />
            확인할 수 있어요.
          </p>
          <p>
            멀리 떨어져 있어도 걱정을 덜어주는 <br />
            편안함을 경험해 보세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_pet_outing_middle_content_02",
        alt: "",
      },
    },
  ],
  packageList: ["voiceHub", "PetFeeder", "HomeCameraPro"],
};

export default BridgeContentsPetOuting;
