import styled from "styled-components";

const CardFrame = ({ className, aesthetic = null, children }) => {
  return (
    <CardContainer className={className} aesthetic={aesthetic}>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 2.4rem 1.6rem;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #ffffff;

  /* PC */
  @media screen and (min-width: 769px) {
    padding: 2.4rem 2rem;
    border-radius: 16px;
  }
  ${(props) =>
    props.aesthetic === "bgWhite" &&
    `
    padding: 1.4rem 1.6rem;
    /* PC */
    @media screen and (min-width: 769px) {
      padding: 1.9rem 3.2rem;
    }
  `};
`;
export default CardFrame;
