import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonSingle({ className, aesthetic, toLink, children }) {
  return (
    <ButtonBlack className={className} aesthetic={aesthetic} to={toLink}>
      {children}
    </ButtonBlack>
  );
}

const ButtonBlack = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  max-width: 16rem;
  height: 4rem;
  padding: 0 2.4rem;
  border-radius: 100px;
  background-color: #0f0f0f;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  box-sizing: border-box;
  transition: background-color 0.5s;

  &:disabled {
    background-color: #aaaaaa;
    color: #dddddd;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    &:hover {
      background-color: #333333;
      color: #ffffff;
    }
  }
`;

export default ButtonSingle;
