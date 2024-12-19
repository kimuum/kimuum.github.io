import styled from "styled-components";

function FieldLayout({ className, content, back, packages, button, progress }) {
  return (
    <FieldContainer className={className}>
      <FieldInner>
        <FieldFront>
          <div className="tutorial-contents">{content}</div>
          {button}
          {packages && <div className="tutorial-packages">{packages}</div>}
        </FieldFront>
        <FieldBack>
          {back}
          {progress}
        </FieldBack>
      </FieldInner>
    </FieldContainer>
  );
}

const FieldBack = styled.div`
  height: 62.4rem;
  /* Mobile */
  @media screen and (max-width: 359px) {
    height: 76vh;
    max-height: 62.4rem;
  }
`;
const FieldFront = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & > .tutorial-contents {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  & > .tutorial-packages {
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .tutorial-contents {
      padding: 8rem 6rem 6rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    align-items: center;
    & > .tutorial-contents {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 2rem 1.6rem 1.6rem;
    }
  }
`;
const FieldInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 138rem;
  color: #ffffff;
  /* PC */
  @media screen and (min-width: 769px) {
    overflow: hidden;
    margin: 10rem auto 12rem;
    border-radius: 1.6rem;
  }
`;
const FieldContainer = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    width: calc(100% - 3.2rem);
    min-height: 62rem;
    margin-left: 1.6rem;
    margin-right: 1.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-top: 4.6rem; //모바일 header 만큼 배경색 채움
  }
`;

export default FieldLayout;
