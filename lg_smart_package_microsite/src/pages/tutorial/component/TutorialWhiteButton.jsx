import styled from "styled-components";

// common
import Button from "components/common/Button";

const TutorialWhiteButton = ({ className = "", onClick, title }) => {
  return (
    <WhiteButton
      aesthetic="bgWhRedArrow"
      className={className}
      onClick={onClick}
    >
      {title}
    </WhiteButton>
  );
};

const WhiteButton = styled(Button)`
  width: auto;
  height: 5rem;
  font-size: 1.4rem;
  border-radius: 5rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 4.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 3;
    right: 1.6rem;
    bottom: 1.6rem;
  }
`;

export default TutorialWhiteButton;
