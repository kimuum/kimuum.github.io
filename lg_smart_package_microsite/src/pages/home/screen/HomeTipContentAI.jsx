import HomeTipContentLayout from "pages/home/component/HomeTipContentLayout";

function HomeTipContentAI() {
  return <HomeTipContentLayout data={HomeContents} />;
}

const HomeContents = {
  imageFolder: "ai",
  topTitleArea: {
    titleMain: (
      <>
        당신을 공감하는 공간, <br />
        ThinQ AI Home
      </>
    ),
    titleSub: (
      <>
        당신이 만들고 싶은 집의 모습, <br />
        일상의 실질적인 문제를 해결해주는 공간 경험을 제공합니다.
      </>
    ),
    titleImage: {
      src: "img_tip_ai_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleMain: (
      <>
        <p>당신이 원하는 모든 것,</p>
        <p>
          맞춤형 공간 솔루션을 <br />
          만나보세요!
        </p>
      </>
    ),
    titleSub: (
      <>
        <p>당신에게 필요한, 당신에게 맞는, 당신이 만들고 싶은 </p>
        <p>맞춤형 공간의 무한한 가능성을 경험해 보세요.</p>
      </>
    ),
    titleImage: {
      src: "img_tip_air_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "LG ThinQ ON 중심의 ThinQ AI Homee",
      articleTitle: (
        <>
          <p>풍요로운 경험의 확대, </p>
          <p>LG ThinQ ON과 시작해보세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>
            다양한 브랜드의 제품과 서비스가 <br />
            LG ThinQ ON과 연동되어{" "}
          </p>
          <p>당신의 일상을 더욱 풍요롭고 편리하게 만들어줘요.</p>
        </>
      ),
      articleImage: {
        src: "img_tip_ai_middle_content_01",
        alt: "",
      },
      articleLinkTit: "LG ThinQ ON 알아보기",
      articleLinkUrl: "",
    },
    {
      textFirst: false,
      articleLabel: "ThinQ AI Home 추천받기",
      articleTitle: (
        <>
          <p>새로운 일상의 변화,</p>
          <p>당신을 위한</p>
          <p>맞춤 제안을 경험하세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>홈 공간에서의 불편한 경험을 해결할 수 있는, </p>
          <p>오직 당신만을 위한 맞춤형 공간 솔루션을 추천해드려요.</p>
        </>
      ),
      articleImage: {
        src: "img_tip_ai_middle_content_02",
        alt: "",
      },
      articleLinkTit: "ThinQ AI Home 추천받기",
      articleLinkUrl: "",
    },
    {
      textFirst: true,
      articleLabel: "ThinQ AI Home 체험하기",
      articleTitle: (
        <>
          <p>
            당신을 위한 <br />
            공간의 첫걸음,
          </p>
          <p>미리 체험해보세요.</p>
        </>
      ),
      articleText: (
        <>
          <p>최신 기술과 맞춤형 기능이 결합된 다양한 패키지,</p>
          <p>
            체험하기 서비스로 공간에 대한 <br />
            활용법을 미리 확인하세요.
          </p>
        </>
      ),
      articleImage: {
        src: "img_tip_ai_middle_content_03",
        alt: "",
      },
      articleLinkTit: "ThinQ AI Home 체험하기",
      articleLinkUrl: "",
    },
  ],
};

export default HomeTipContentAI;
