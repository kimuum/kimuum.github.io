import React, { useState } from "react";
import styled from "styled-components";

// common
import Button from "components/common/Button";
import TabButton from "components/common/TabButton";
import MainTitleBox from "components/layout/MainTitleBox";

// recommend/component
import RecommendPackageCard from "pages/recommend/component/RecommendPackageCard";

// images
import BgSearchPC from "assets/images/recommend/bg_recommend_search_pc.jpg";
import BgSearchMo from "assets/images/recommend/bg_recommend_search_mo.jpg";

// data
import { packageCardData } from "assets/data/recommendPackageCard";

function RecommendPackageSearch() {
  const [isSearchTab, setSearchTab] = useState(0);
  const sectionSearch = {
    title: <>다양한 패키지를 알아보세요.</>,
    text: <>관심있는 제품을 체험해 볼 수 있어요.</>,
  };
  const packageCardRow = packageCardData.map((card, index) => (
    <SearchCard
      key={index.toString()}
      src={require(`assets/images/bridge/${card.src}`)}
      title={card.title}
      description={card.description}
      group={card.group}
      products={card.products}
      labelData={card.labels}
      buttonTitle={"패키지 상세보기"}
    />
  ));

  return (
    <RecPackageSearchContainer>
      <SearchTopArea>
        <SearchTopInner>
          {/* 타이틀 */}
          <RecTitleBox title={sectionSearch.title} text={sectionSearch.text} />
        </SearchTopInner>
      </SearchTopArea>
      <SearchMiddleArea>
        {/* Tab */}
        <SearchTabArea>
          <SearchTabInner>
            <SearchTabButton
              isTab={isSearchTab}
              tabButtonData={tabRecommendData}
              seTabCurrent={setSearchTab}
            />
          </SearchTabInner>
        </SearchTabArea>
        <SearchBodyArea>{packageCardRow}</SearchBodyArea>
        <SearchFootArea>
          <PackageButtonNext aesthetic={"bgRed"}>
            전체 제품 보기
          </PackageButtonNext>
        </SearchFootArea>
      </SearchMiddleArea>
    </RecPackageSearchContainer>
  );
}

const SearchTabButton = styled(TabButton)``;
const SearchTabInner = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4;
    color: #666666;
    white-space: nowrap;
    box-sizing: border-box;
    &.active {
      border-color: #0f0f0f;
      font-weight: 700;
      color: #0f0f0f;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    button {
      height: 4.8rem;
      margin: 0 2.4rem;
      font-size: 1.8rem;
      &:hover {
        font-weight: 700;
        color: #0f0f0f;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    button {
      margin: 0 1rem;
      padding-bottom: 0.8rem;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 420px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const SearchTabArea = styled.div`
  position: relative;
  overflow: auto hidden;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 3.2rem;
    text-align: center;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: auto;
    margin-left: -1.6rem;
    margin-right: -1.6rem;
    margin-bottom: 1.6rem;
    &::-webkit-scrollbar {
      display: none;
    }
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
    margin: 0;
    .top-main-text {
      margin-top: 1.6rem;
      font-size: 2rem;
    }
  }
`;

const SearchCard = styled(RecommendPackageCard)`
  flex-shrink: 0;
  width: 100%;
  max-width: calc(100% - 1.2rem);
  margin: 0.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: calc(50% - 2.4rem);
    margin: 1.2rem;
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

const SearchBodyArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin: -0.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: -1.2rem;
  }
`;
const SearchFootArea = styled.div`
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

const SearchTopInner = styled.div`
  margin: 0 auto;
  /* padding-top: 3.2rem; */
  /* PC */
  @media screen and (min-width: 769px) {
    padding-top: 0;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SearchTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 1.6rem;
  background: url(${BgSearchMo}) no-repeat center / cover;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 28rem;
    background: url(${BgSearchPC}) no-repeat center / cover;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    min-height: 11.5rem;
  }
`;
const SearchMiddleArea = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
const RecPackageSearchContainer = styled.main`
  /* PC */
  @media screen and (min-width: 769px) {
    border-top: 1px solid #dddddd;
  }
`;

// 임시 data
const tabRecommendData = [
  {
    title: "전체",
  },
  {
    title: "실내 환경 케어",
  },
  {
    title: "에너지",
  },
  {
    title: "패밀리/펫 케어",
  },
  {
    title: "집안일 케어",
  },
  {
    title: "분위기 업",
  },
  {
    title: "보안/안전",
  },
];

export default RecommendPackageSearch;
