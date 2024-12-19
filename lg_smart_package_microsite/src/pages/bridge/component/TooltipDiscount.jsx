import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// common
import DotUlList from "components/common/DotUlList";

// images
import IconTooltip from "assets/images/common/icon_tooltip.svg";
import btnClose from "assets/images/common/btn_popup_close_bk.svg";

function TooltipDiscount({ className, id }) {
  const [isActive, setActive] = useState(false);
  const tooltipRef = useRef(null);
  const tooltipButtonRef = useRef(null);

  const handleTooltipOpen = () => {
    setActive((prev) => !prev);
  };
  const handleTooltipClose = () => {
    setActive((prev) => !prev);
    if (tooltipButtonRef.current) {
      tooltipButtonRef.current.focus();
    }
  };

  useEffect(() => {
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
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <TooltipContainer
      className={`${className} ${isActive ? "active" : ""}`.trim()}
      ref={tooltipRef}
    >
      <button type="button" ref={tooltipButtonRef} onClick={handleTooltipOpen}>
        자세히 보기
      </button>
      <TooltipDialog aria-labelledby={id} tabIndex={isActive ? "0" : "-1"}>
        <TooltipInnerTop>
          <strong className="tooltip-title" id={id}>
            최대혜택가
          </strong>
          <button type="button" onClick={handleTooltipClose}>
            닫기
          </button>
        </TooltipInnerTop>
        <TooltipBox>
          <GuideInfoList>
            <li>
              최대혜택가는 구매 확정 이후 제공되는 혜택을 계산하여 실제 결제가가
              아닌 체감가를 안내합니다.
            </li>
            <li>
              <strong>혜택</strong>은 적용하는 <strong>쿠폰, 카드사</strong>에
              따라 다르게 계산되어, <strong>실제 적용 시 최대혜택가</strong>와
              다를 수 있습니다. 상세 내용은 <strong>구매 혜택 안내</strong>에서
              확인이 가능합니다.
            </li>
          </GuideInfoList>
        </TooltipBox>
      </TooltipDialog>
    </TooltipContainer>
  );
}

const GuideInfoList = styled(DotUlList)`
  & > li {
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4;
    color: #666666;
    &:last-child {
      margin-bottom: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > li {
      font-size: 1.4rem;
    }
  }
`;
const TooltipBox = styled.div``;
const TooltipInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  & > .tooltip-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #0f0f0f;
  }
  & > button {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background: url(${btnClose}) no-repeat center;
    font-size: 1px;
    color: transparent;
    cursor: pointer;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 2.2rem;
    & > .tooltip-title {
      font-size: 1.6rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > button {
      background-size: 1.6rem;
    }
  }
`;
const TooltipDialog = styled.div`
  position: absolute;
  display: none;
  z-index: 2;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 2.4rem;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  /* PC */
  @media screen and (max-width: 1600px) {
    top: 2.4rem;
    left: auto;
    right: 0;
  }
  @media screen and (min-width: 769px) {
    width: 42.8rem;
    min-height: 20.2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 13.7rem;
    left: 0;
    right: 0;
  }
`;
const TooltipContainer = styled.div`
  margin-left: 3px;
  &.active {
    ${TooltipDialog} {
      display: block;
    }
  }
  & > button {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    background: url(${IconTooltip}) no-repeat center;
    font-size: 1px;
    color: transparent;
    cursor: pointer;
  }
`;

export default TooltipDiscount;
