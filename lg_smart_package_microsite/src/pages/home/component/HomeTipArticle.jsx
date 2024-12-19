import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";
import LinkButtonWhite from "components/common/LinkButtonWhite";

function HomeTip({ className, src, children, title, toLink }) {
  return (
    <HomeTipContainer className={className}>
      <HomeTipImageBox src={src} alt="" />
      <HomeTipContent>
        <HomeTipTitle>{title}</HomeTipTitle>
        <HomeTipText>{children}</HomeTipText>
        <HomeTipLink aesthetic={"arrowBlack"} to={toLink}>
          자세히 보기
        </HomeTipLink>
      </HomeTipContent>
    </HomeTipContainer>
  );
}
const HomeTipLink = styled(LinkButtonWhite)`
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 16rem;
    margin-top: 5rem;
    height: 4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: auto;
    max-width: initial;
    height: 3.2rem;
    margin-top: 1.8rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    font-size: 1.2rem;
  }
`;
const HomeTipImageBox = styled(ImageBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 63.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const HomeTipContent = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 51.1em;
    margin-left: 3rem;
    padding-bottom: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const HomeTipTitle = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #0f0f0f;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 3rem;
    font-size: 3.2rem;
  }
`;
const HomeTipText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #0f0f0f;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.9rem;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
  }
`;
const HomeTipContainer = styled.div`
  padding: 0 1.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    display: none;
  }
`;

export default HomeTip;
