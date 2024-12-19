// import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// common
import Button from "components/common/Button";
import MainTitleBox from "components/layout/MainTitleBox";

// recommend/component
import RecommendStep from "pages/recommend/component/RecommendStep";
import RecommendNeedCard from "pages/recommend/component/RecommendNeedCard";

// data
import { needCardData } from "assets/data/recommendNeedsCard";

function RecommendNeeds() {
  const sectionNeed = {
    title: <>나를 위한 AI Home 추천 받기</>,
    text: (
      <>
        선택한 공간에서 어떤 경험을 하고싶나요? <br />
        여러 개 선택도 가능해요.
      </>
    ),
  };

  const needLength = needCardData.length;

  const needCardRow = needCardData.map((card, index) => (
    <NeedCard
      className={"need-card"}
      key={index.toString()}
      icon={card.iconName}
      label={card.label}
      title={card.title}
      id={card.id}
    />
  ));

  return (
    <RecNeedContainer>
      <RecommendStep stepper={2}>
        <RecTitleBox title={sectionNeed.title} text={sectionNeed.text} />
      </RecommendStep>
      <NeedInnerArea>
        <NeedBodyArea
          className={
            (needLength - 4) % 3 === 0 && needLength >= 4 ? "flex-align" : ""
          }
        >
          {needCardRow}
        </NeedBodyArea>
        <NeedFootArea>
          <NeedButtonPrev aesthetic={"bgWhite"}>이전</NeedButtonPrev>
          <NeedButtonNext aesthetic={"bgRed"}>다음</NeedButtonNext>
        </NeedFootArea>
      </NeedInnerArea>
    </RecNeedContainer>
  );
}

const NeedCard = styled(RecommendNeedCard)`
  flex-shrink: 0;
  width: calc(100% - 1.6rem);
  max-width: 444px;
  margin: 0.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    width: calc(33.333% - 2.4rem);
    height: 18rem;
    margin: 1.2rem;
  }
  /* Mobile */
  @media screen and (min-width: 520px) and (max-width: 769px) {
    width: calc(50% - 1.6rem);
  }
`;
const NeedButtonPrev = styled(Button)`
  flex: 1;
  max-width: 22rem;
  height: 4.6rem;
  margin: 0 0.8rem;
  border-radius: 6px;
  font-size: 1.3rem;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    font-size: 1.4rem;
  }
`;
const NeedButtonNext = styled(Button)`
  flex: 1;
  max-width: 22rem;
  height: 4.6rem;
  margin: 0 0.8rem;
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
    br {
      display: none;
    }
  }
`;

const NeedBodyArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: -0.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    min-height: 34rem;
    margin: -1.2rem;
    &.flex-align {
      & > .need-card:nth-child(1) {
        margin-left: 1.25rem;
      }
      & > .need-card:nth-child(2) {
        margin-right: 1.25rem;
      }
    }
  }
`;
const NeedFootArea = styled.div`
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

const NeedInnerArea = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
const RecNeedContainer = styled.main`
  /* PC */
  @media screen and (min-width: 769px) {
    border-top: 1px solid #dddddd;
  }
`;

export default RecommendNeeds;
