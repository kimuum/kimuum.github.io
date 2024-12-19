import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ToolTipProduct = React.forwardRef(
  ({ className, children, toLink, align = "right" }, ref) => {
    const [isActive, setActive] = useState(true);
    const tooltipRef = useRef(null);

    const handleTooltip = () => {
      setActive((prev) => !prev);
    };

    let intervalTimer;

    useEffect(() => {
      intervalTimer = setTimeout(() => {
        setActive(false);
      }, 5000);

      const handleClickOutside = (e) => {
        if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
          setActive(false);
        }
      };

      if (isActive) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }

      return () => {
        if (intervalTimer) {
          clearTimeout(intervalTimer);
        }
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isActive]);

    return (
      <ToolTip
        className={`${className} ${isActive ? "active" : ""}`.trim()}
        onClick={handleTooltip}
        ref={tooltipRef}
        align={align}
      >
        <div className="tooltip-box">
          <button
            className="tooltip-dot"
            title={`제품 링크 ${isActive ? "닫기" : "열기"}`}
          ></button>
          <Link
            className="tooltip-content"
            to={toLink}
            tabIndex={isActive ? 0 : -1}
          >
            {children}
          </Link>
        </div>
      </ToolTip>
    );
  }
);

const ToolTip = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &.active {
    z-index: 5;
    & > .tooltip-box {
      & > .tooltip-dot {
        &:before {
          background-color: #ea1917;
        }
      }
      & > .tooltip-content {
        display: block;
      }
    }
  }
  & > .tooltip-box {
    position: relative;
    display: inline-block;
    & > .tooltip-dot {
      position: relative;
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto;
      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        background-color: rgba(255, 255, 255, 0.2);
        animation: animationMoving 2s infinite;
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        width: 12px;
        height: 12px;
        border-radius: 12px;
        background-color: #ffffff;
        transform: translate(calc(-50%), calc(-50%));
      }
    }
    & > .tooltip-content {
      position: absolute;
      display: none;
      z-index: 1;
      padding: 0.8rem 1.6rem;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.5;
      color: #ffffff;
      white-space: nowrap;
      ${(props) =>
        props.align === "top" &&
        `
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
      `}
      ${(props) =>
        props.align === "bottom" &&
        `
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      `}
      ${(props) =>
        props.align === "right" &&
        `
        top: -6px;
        left: 3rem;
      `}
      ${(props) =>
        props.align === "left" &&
        `
        top: -6px;
        right: 3rem;
      `}
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
  }

  @keyframes animationMoving {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
  }
`;

export default ToolTipProduct;
