import styled from "styled-components";

// common
import Button from "components/common/Button";

const TutorialStartButton = ({ className = "", onClick }) => {
  return (
    <StartButton
      aesthetic="bgRedWhArrow"
      className={className}
      onClick={onClick}
    >
      패키지 체험하기
    </StartButton>
  );
};

const StartButton = styled(Button)`
  height: 5rem;
  font-size: 1.4rem;
  border-radius: 5rem;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 16rem;
    margin-top: 4.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: auto;
  }
`;

export default TutorialStartButton;
