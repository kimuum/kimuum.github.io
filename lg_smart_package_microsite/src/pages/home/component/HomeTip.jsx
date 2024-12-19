import styled from "styled-components";

// pages/home/component
import HomeTipArticle from "pages/home/component/HomeTipArticle";

function HomeTip({ index }) {
  return (
    <HomeTipContainer>
      {/* 나만의 공간, AI Home */}
      <HomeTipArticleArea
        className={index === 0 ? "show" : ""}
        src={require("assets/images/home/img_home_tip_ai_home.jpg")}
        title={tipTitle[0].title}
        toLink={"/"}
      >
        {tipTitle[0].text}
      </HomeTipArticleArea>

      {/* 8월 오픈 */}
      {/* 쾌적하고 산뜻하게 */}
      {/* <HomeTipArticleArea
        className={index === 1 ? "show" : ""}
        src={require("assets/images/home/img_home_tip_air_pto.jpg")}
        title={tipTitle[1].title}
        toLink={"/"}
      >
        {tipTitle[1].text}
      </HomeTipArticleArea> */}

      {/* As-you-wish */}
      <HomeTipArticleArea
        className={index === 1 ? "show" : ""}
        src={require("assets/images/home/img_home_tip_as_you_wish.jpg")}
        title={tipTitle[1].title}
        toLink={"/"}
      >
        {tipTitle[1].text}
      </HomeTipArticleArea>

      {/* 7/11 업데이트 예정 */}
      {/* ThinQ ON */}
      <HomeTipArticleArea
        className={index === 2 ? "show" : ""}
        src={require("assets/images/home/img_home_tip_01.jpg")}
        title={tipTitle[2].title}
        toLink={"/"}
      >
        {tipTitle[2].text}
      </HomeTipArticleArea>
    </HomeTipContainer>
  );
}

const HomeTipArticleArea = styled(HomeTipArticle)`
  display: none;
  max-width: 127.5rem;
  margin: 0 auto;
  &.show {
    display: block;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &.show {
      display: flex;
    }
  }
`;
const HomeTipContainer = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    min-height: 38.8rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    min-height: 27.2rem;
  }
`;

const tipTitle = [
  {
    title: (
      <>
        당신을 공감하는 공간, <br />
        ThinQ AI Home과 함께하세요.
      </>
    ),
    text: (
      <>
        공간이 먼저 당신을 이해하고 케어하는 새로운 일상의 변화, <br />
        다양한 제품과 서비스로 맞춤형 공간을 경험해보세요.
      </>
    ),
  },
  // {
  //   title: (
  //     <>
  //       스마트한 에너지 절약과 <br />
  //       쾌적한 환경을 선사합니다.
  //     </>
  //   ),
  //   text: (
  //     <>
  //       AI 기술을 활용하여 에어컨과 공기청정기의 에너지 효율을 높이고, <br />
  //       자동으로 실내 환경을 최적화하여 편리하게 제어할 수 있습니다.
  //     </>
  //   ),
  // },
  {
    title: (
      <>
        나만의 방식으로 <br />
        일상을 바꿉니다.
      </>
    ),
    text: (
      <>
        맞춤형 패키지 추천과 체험 서비스로, <br />
        불편했었던 라이프스타일을 빈틈없이 개선하세요.
      </>
    ),
  },
  {
    title: (
      <>
        IoT 가전으로 <br />
        에너지를 절약하는 Tip
      </>
    ),
    text: (
      <>
        에너지 절약 모드를 사용해 에너지 소모를 줄일 수 있어요.
        <br />
        원격 제어 기능으로 외출 시에도 제어가 가능해요.
        <br />
        미리 설정한 시간에 자동으로 on/off 가 돼요.
        <br />
        에너지 사용량을 실시간 모니터링 할 수 있어요.
      </>
    ),
  },
];

export default HomeTip;
