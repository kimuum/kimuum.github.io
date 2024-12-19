import styled from "styled-components";

// common
import Button from "components/common/Button";

const TutorialBuyButton = ({ className = "", onClick }) => {
  return (
    <BuyButton aesthetic="bgRedWhArrow" className={className} onClick={onClick}>
      패키지 구매하기
    </BuyButton>
  );
};

const BuyButton = styled(Button)`
  position: absolute;
  z-index: 3;
  max-width: 17.3rem;
  height: 5rem;
  font-size: 1.4rem;
  border-radius: 5rem;
  /* PC */
  @media screen and (min-width: 769px) {
    left: 6rem;
    top: 27.6rem;
    max-width: 16rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    right: 1.6rem;
    bottom: 1.6rem;
    max-width: 21.2rem;
  }
  @media screen and (max-width: 360px) {
    max-width: calc(100% - 148px);
  }
`;

export default TutorialBuyButton;
