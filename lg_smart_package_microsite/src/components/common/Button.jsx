import React, { forwardRef } from "react";
import styled from "styled-components";

// images
import ArrowLinkWhite from "assets/images/common/arrow_link_white.svg";
import ArrowLinkRed from "assets/images/common/arrow_link_red.svg";

const ButtonSingle = React.forwardRef(
  (
    {
      className = "",
      aesthetic,
      children,
      disabled = false,
      onClick = () => {},
    },
    ref
  ) => {
    return (
      <Button
        className={className}
        type="button"
        disabled={disabled}
        onClick={onClick}
        aesthetic={aesthetic}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  transition: background-color 0.5s;
  .ir {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    font-size: 1px;
  }
  &:disabled {
    pointer-events: none;
  }
  ${(props) =>
    props.aesthetic === "bgBlack" &&
    `
      width: 100%;
      height: 5rem;
      padding: 0 2.4rem;
      border-radius: 5rem;
      background-color: #0F0F0F;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.2;
      color: #fff;
      &:disabled {
        background-color: #aaaaaa;
        color: #dddddd;
      }
    `}
  ${(props) =>
    (props.aesthetic === "bgRed" || props.aesthetic === "bgRedWhArrow") &&
    `
    width: 100%;
    height: 5rem;
    padding: 0 2.4rem;
    border-radius: 6px;
    background-color: #ea1917;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    &:disabled {
      background-color: #aaaaaa;
      color: #dddddd;
    }
    `}

  ${(props) =>
    props.aesthetic === "bgRedWhArrow" &&
    `
      &:after {
        content:"";
        display:block;
        flex-shrink: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.2rem;
        background: url(${ArrowLinkWhite}) no-repeat center;
      }
      `}

  ${(props) =>
    (props.aesthetic === "bgWhite" || props.aesthetic === "bgWhRedArrow") &&
    `
    width: 100%;
    padding: 0 2.4rem;
    height: 5rem;
    border-radius: 100px;
    border: 1px solid #0f0f0f;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.5;
    color: #0f0f0f;
    &:disabled {
      color: #999999;
      border: 1px solid #cbc8c2;
    }
    `}


  ${(props) =>
    props.aesthetic === "bgWhRedArrow" &&
    `
      background-color: #ffffff;
      color: #EA1917;
      border-color: #ffffff;
      &:after {
        content:"";
        display:block;
        flex-shrink: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.2rem;
        background: url(${ArrowLinkRed}) no-repeat center;
      }
      `}

  /* Mobile */
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.aesthetic === "bgWhite" &&
      `
      max-width: 13.7rem;
    `}
  }

  /* PC */
  @media screen and (min-width: 769px) {
    &:focus-visible {
      outline: 2px solid blue;
    }

    ${(props) =>
      props.aesthetic === "bgBlack" &&
      `
      &:hover {
        background-color: #333333;
        color: #ffffff;
      }
    `}

    ${(props) =>
      (props.aesthetic === "bgRed" || props.aesthetic === "bgRedWhArrow") &&
      `
      padding: 0 3.2rem;
      font-size: 1.6rem;
      &:hover {
        background-color: #a11e1e;
        &:disabled {
          background-color: #aaaaaa;
          color: #dddddd;
        }
      }
    `}
    ${(props) =>
      props.aesthetic === "bgWhite" &&
      `
      max-width: 22.2rem;
      padding: 0 2.4rem;
      font-size: 1.4rem;
      &:hover {
        background-color: #222222;
        color: #ffffff;
        &:disabled {
          color: #999999;
        }
        .icon-plus path {
          fill: #ffffff;
        }
      }
    `}
  }
`;

export default ButtonSingle;
