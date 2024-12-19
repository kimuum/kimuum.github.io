import styled from "styled-components";

function MainTitleBox({ className, title, text }) {
  return (
    <MainTitleContainer className={className}>
      <MainTitle className="top-main-title">{title}</MainTitle>
      {text && <MainText className="top-main-text">{text}</MainText>}
    </MainTitleContainer>
  );
}

const MainTitleContainer = styled.div`
  padding: 0 1.6rem;
  margin-top: 4.8rem;
  margin-bottom: 1.6rem;
  text-align: center;
`;
const MainTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  word-break: keep-all;
  br {
    display: none;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    br {
      display: block;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 3.2rem;
  }
`;
const MainText = styled.div`
  margin-top: 0.4rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  color: #333333;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 0.8rem;
    font-size: 2.4rem;
  }
`;

export default MainTitleBox;
