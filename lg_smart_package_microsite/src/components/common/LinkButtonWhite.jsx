import { Link } from "react-router-dom";
import styled from "styled-components";

// images
import ArrowLinkBlack from "assets/images/common/arrow_link_black.svg";
import ArrowLinkWhite from "assets/images/common/arrow_link_white.svg";
import IconPlusOff from "assets/images/common/icon_plus_off.svg";
import IconPlusOn from "assets/images/common/icon_plus_on.svg";

const LinkButtonWhite = ({ className, aesthetic, toLink, children }) => {
  return (
    <ButtonWhite className={className} aesthetic={aesthetic} to={toLink}>
      {children}
    </ButtonWhite>
  );
};

const ButtonWhite = styled(Link)`
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
  border: 1px solid #0f0f0f;
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f0f0f;
  box-sizing: border-box;
  transition: background-color 0.5s;

  ${(props) =>
    props.aesthetic &&
    `
      &:after {
        content: "";
        display: block;
        flex-shrink: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 2px;
      }
  `};

  &:after {
    background: url(${(props) => {
        switch (props.aesthetic) {
          case "arrowBlack":
            return ArrowLinkBlack;
          case "iconPlus":
            return IconPlusOff;
          default:
            return "";
        }
      }})
      no-repeat center / cover;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
    &:hover {
      background-color: #222222;
      font-size: 1.4rem;
      color: #ffffff;
      &:after {
        background: url(${(props) => {
            switch (props.aesthetic) {
              case "arrowBlack":
                return ArrowLinkWhite;
              case "iconPlus":
                return IconPlusOn;
              default:
                return "";
            }
          }})
          no-repeat center / cover;
      }
    }
  }
`;
export default LinkButtonWhite;
