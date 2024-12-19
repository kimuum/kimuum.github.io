import styled from "styled-components";

const DotUlList = ({ className = "", children }) => {
  return <DotUl className={className}>{children}</DotUl>;
};

const DotUl = styled.ul`
  & > li {
    position: relative;
    margin-bottom: 0.4rem;
    padding-left: 1.1rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.4;
    color: #333333;
    &:last-child {
      margin-bottom: 0;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 8px;
      left: 0;
      width: 3px;
      height: 3px;
      background-color: #333333;
      border-radius: 3px;
    }
    .color-gray {
      color: #959595;
    }
    .bold {
      font-weight: bold;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > li {
      font-size: 1.4rem;
    }
  }
`;
export default DotUlList;
