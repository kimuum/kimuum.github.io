import styled from "styled-components";

// component
import ImageBox from "components/common/ImageBox";

// images
import IconQuotationMarks from "assets/images/home/icon_quotation_marks.svg";

function HomeRecommendMore() {
  return (
    <RecommendMoreContainer
      tabIndex={0}
      aria-label="ThinQ Life 추천으로 쉽고 편하게 스마트홈을 시작해보세요"
    >
      <RecommendMoreText aria-hidden="true">
        ThinQ Life 추천으로 <br />
        쉽고 편하게 스마트홈을 <br />
        시작해보세요
      </RecommendMoreText>
      <RecommendMoreImage
        src={require("assets/images/home/home_recommend_card.png")}
      />
    </RecommendMoreContainer>
  );
}

const RecommendMoreContainer = styled.div`
  overflow: hidden;
  height: 100%;
  padding-bottom: 2rem;
  border-radius: 6px;
  background-color: #8781aa;
  box-sizing: border-box;
`;
const RecommendMoreImage = styled(ImageBox)`
  margin-top: 1.9rem;
`;
const RecommendMoreText = styled.div`
  padding-top: 3.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: #ffffff;
  background: url(${IconQuotationMarks}) no-repeat top 1.8rem center;
`;

export default HomeRecommendMore;
