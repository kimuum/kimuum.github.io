import styled from "styled-components";
// image
import IconCheck from "assets/images/common/icon_check_indicators.svg";

function RecommendStep({ className, stepper, children }) {
  return (
    <StepContainer className={className} type={"step"}>
      <StepTopArea>
        <StepNumber
          className={
            stepper === 1
              ? "current"
              : (stepper === 2 || stepper === 3) && "active"
          }
        >
          {stepper === 1 && <span className="ir">현재단계</span>}
          <span>1</span>
          <span className="ir">관심사 선택</span>
        </StepNumber>
        <StepNumber
          className={stepper === 2 ? "current" : stepper === 3 && "active"}
        >
          {stepper === 2 && <span className="ir">현재단계</span>}
          <span>2</span>
          <span className="ir">니즈 선택</span>
        </StepNumber>
        <StepNumber className={stepper === 3 && "current"}>
          {stepper === 3 && <span className="ir">현재단계</span>}
          <span>3</span>
          <span className="ir">추천 결과</span>
        </StepNumber>
      </StepTopArea>
      <StepMiddleArea>{children}</StepMiddleArea>
    </StepContainer>
  );
}

const StepNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.8rem;
  background-color: #ffffff;
  border: 1px solid #959595;
  box-sizing: border-box;
  border-radius: 3rem;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  &.current {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }
  &.active {
    background: url(${IconCheck}) no-repeat center #959595;
    color: transparent;
  }
  & > .ir {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    font-size: 1px;
    opacity: 0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 1rem;
    border-width: 1.5px;
    font-size: 1.2rem;
  }
`;
const StepTopArea = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
  &:after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    left: 1rem;
    right: 1rem;
    bottom: 0;
    height: 0.75rem;
    border-top: 1px solid #959595;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 1.4rem;
    &:after {
      height: 1.1rem;
    }
  }
`;
const StepMiddleArea = styled.div``;
const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 1.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 4rem 0 5.6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin: 1.6rem 0 2.8rem;
  }
`;

export default RecommendStep;
