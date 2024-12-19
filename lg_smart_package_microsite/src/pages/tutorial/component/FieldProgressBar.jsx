import styled from "styled-components";

function FieldProgressBar({ className, percent }) {
  return (
    <ProgressBarArea className={className}>
      <BarBox style={{ width: `${percent}%` }}></BarBox>
      {percent && <span className="ir">체험하기 진행 상태 {percent}%</span>}
    </ProgressBarArea>
  );
}

const BarBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #ea1917;
  transition: width 0.5s;
`;
const ProgressBarArea = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  & > .ir {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    font-size: 1px;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    height: 6px;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: 4px;
  }
`;

export default FieldProgressBar;
