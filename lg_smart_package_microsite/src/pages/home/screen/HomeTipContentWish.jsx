import HomeTipContentLayout from "pages/home/component/HomeTipContentLayout";

function HomeTipContentWish() {
  return <HomeTipContentLayout data={HomeContents} />;
}

const HomeContents = {
  imageFolder: "wish",
  topTitleArea: {
    titleMain: (
      <>
        나만의 공간이니까, <br />
        나를 위한 공간으로
      </>
    ),
    titleSub: (
      <>
        <p>지금까지 해결하지 못했던 불편한 경험, </p>
        <p>당신이 원하는 솔루션으로 간편하게 해결하세요.</p>
      </>
    ),
    titleImage: {
      src: "img_tip_wish_top",
      alt: "",
    },
  },
  middleTitleArea: {
    titleMain: (
      <>
        <p className="mo-inline">
          고객 중심의 <br />
          맞춤 서비스로{" "}
        </p>
        <p className="mo-inline">
          더욱 <br />
          편리한 혜택을 누리세요!
        </p>
      </>
    ),
    titleImage: {
      src: "img_tip_wish_middle_title",
      alt: "",
    },
  },
  middleFlexArea: [
    {
      textFirst: true,
      articleLabel: "먼저 만나보는 ‘체험하기’",
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
          <p>
            직접 매장에 방문하지 않아도 체험하기 기능을 통해 <br />
            공간의 변화를 확인할 수 있어요.{" "}
          </p>
          <p>다양한 패키지를 먼저 체험해보세요.</p>
        </>
      ),
      articleImage: {
        src: "img_tip_wish_middle_content_01",
        alt: "",
      },
      articleLinkTit: "패키지 체험해보기",
      articleLinkUrl: "",
    },
    {
      textFirst: false,
      articleLabel: "ThinQ AI Home 구독 서비스",
      articleTitle: (
        <>
          <p>더 많은 혜택을 </p>
          <p>
            더 적은 비용으로 <br />
            누리세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>
            구독형 서비스로 LG가전과 다양한 IoT 기기를 <br />
            구매할 수 있어요.{" "}
          </p>
          <p>풍성한 혜택의 구독 서비스를 경험해보세요.</p>
        </>
      ),
      articleImage: {
        src: "img_tip_wish_middle_content_02",
        alt: "",
      },
      articleLinkTit: "구독 서비스 알아보기",
      articleLinkUrl: "",
    },
    {
      textFirst: true,
      articleLabel: "배송/설치 서비스",
      articleTitle: (
        <>
          <p>배송부터 설치까지!</p>
          <p>
            빠르게 편리함을 <br />
            느껴보세요.
          </p>
        </>
      ),
      articleText: (
        <>
          <p>
            다양한 제품으로 구성된 패키지를 전문 설치 기사님이 <br />
            방문하여 설치해드려요.{" "}
          </p>
          <p>간편하고 편리한 배송/설치 서비스를 이용해보세요.</p>
        </>
      ),
      articleImage: {
        src: "img_tip_wish_middle_content_03",
        alt: "",
      },
    },
  ],
};

export default HomeTipContentWish;
