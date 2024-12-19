// import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// common
import MainTitleBox from "components/layout/MainTitleBox";

// home/component
import RecommendStep from "pages/recommend/component/RecommendStep";
import HomeRecommend from "pages/home/component/HomeRecommend";

function RecommendListGnb() {
  const sectionRecommend = {
    title: <>나를 위한 AI Home 추천 받기</>,
    text: <>요즘 가장 관심있는 공간을 선택해 보세요.</>,
  };

  return (
    <RecListContainer>
      <RecommendListStep stepper={1}>
        <RecTitleBox
          title={sectionRecommend.title}
          text={sectionRecommend.text}
        />
      </RecommendListStep>

      <HomeRecommend />
    </RecListContainer>
  );
}

const RecommendListStep = styled(RecommendStep)``;
const RecTitleBox = styled(MainTitleBox)`
  padding: 0;
  margin: 0;
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
  /* Mobile */
  @media screen and (max-width: 768px) {
    .top-main-text {
      display: none;
    }
  }
`;
const RecListContainer = styled.main`
  margin-bottom: 4.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 12rem;
    border-top: 1px solid #dddddd;
  }
`;

export default RecommendListGnb;
