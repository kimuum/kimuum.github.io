import styled from "styled-components";

// common
import Button from "components/common/Button";
import MainTitleBox from "components/layout/MainTitleBox";

// recommend/component
import RecommendStep from "pages/recommend/component/RecommendStep";
import RecommendPackageCard from "pages/recommend/component/RecommendPackageCard";

// data
import { packageCardData } from "assets/data/recommendPackageCard";

function RecommendPackageList() {
  const sectionPackage = {
    title: <>나를 위한 AI Home 추천 받기</>,
    text: <>딱 맞는 솔루션을 찾았어요.</>,
  };

  const packageLength = packageCardData.length;

  const packageCardRow = packageCardData.map((card, index) => (
    <PackageCard
      key={index.toString()}
      src={require(`assets/images/bridge/${card.src}`)}
      title={card.title}
      description={card.description}
      group={card.group}
      products={card.products}
      buttonTitle={"패키지 상세보기"}
    />
  ));

  return (
    <RecPackageListContainer>
      <RecommendStep stepper={3}>
        <RecTitleBox title={sectionPackage.title} text={sectionPackage.text} />
      </RecommendStep>
      <PackageInnerArea>
        <PackageBodyArea className={packageLength > 2 ? "" : "flex-center"}>
          {packageCardRow}
        </PackageBodyArea>
        <PackageFootArea>
          <PackageButtonPrev aesthetic={"bgWhite"}>
            다시 추천받기
          </PackageButtonPrev>
          <PackageButtonNext aesthetic={"bgRed"}>
            모든 패키지 보기
          </PackageButtonNext>
        </PackageFootArea>
      </PackageInnerArea>
    </RecPackageListContainer>
  );
}

const PackageCard = styled(RecommendPackageCard)`
  flex-shrink: 0;
  width: 100%;
  max-width: calc(100% - 1.2rem);
  margin: 0.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: calc(50% - 2.4rem);
    margin: 1.2rem;
    &:only-child {
      max-width: 67.8rem;
    }
  }
`;
const PackageButtonPrev = styled(Button)`
  flex: 1;
  max-width: 22rem;
  height: 4.6rem;
  margin: 0 0.8rem;
  padding: 0 1rem;
  border-radius: 6px;
  font-size: 1.3rem;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 1.4rem;
  }
`;
const PackageButtonNext = styled(Button)`
  flex: 1;
  max-width: 22rem;
  height: 4.6rem;
  margin: 0 0.8rem;
  padding: 0 1rem;
  font-size: 1.3rem;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 1.4rem;
  }
`;
const RecTitleBox = styled(MainTitleBox)`
  margin: 0;
  padding: 0;
  .top-main-text {
    margin-bottom: 0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    .top-main-text {
      margin-top: 1.6rem;
      font-size: 2rem;
    }
  }
`;

const PackageBodyArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin: -0.6rem;
  &.flex-center {
    justify-content: center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin: -1.2rem;
  }
`;
const PackageFootArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.8rem;
  margin-bottom: 4.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 5.6rem;
    margin-bottom: 12rem;
  }
`;

const PackageInnerArea = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
const RecPackageListContainer = styled.main`
  /* PC */
  @media screen and (min-width: 769px) {
    border-top: 1px solid #dddddd;
  }
`;

export default RecommendPackageList;
