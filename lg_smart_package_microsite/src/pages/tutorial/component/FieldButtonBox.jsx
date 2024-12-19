import styled from "styled-components";

const FieldButtonBox = ({ className = "", children }) => {
  return (
    <FieldBtnContainer className={className}>{children}</FieldBtnContainer>
  );
};

const FieldBtnContainer = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > button {
    flex-shrink: 0;
    margin-right: 1.6rem;
    &:last-child {
      margin-right: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    left: 6rem;
    bottom: 6rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    position: absolute;
    z-index: 1000;
    left: 1.6rem;
    bottom: 1.6rem;
    & > button {
      margin-right: 1rem;
    }
  }
`;

export default FieldButtonBox;
