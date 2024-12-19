import { Link } from "react-router-dom";
import styled from "styled-components";

import BtnPopupClose from "assets/images/common/btn_popup_close.svg";
import { useState } from "react";

function ToastPopup({
  defaultState = false,
  className,
  message,
  toLink,
  linkText,
  closeButton = true,
  bottomFix = "13.5",
}) {
  const [isToastOpened, setToastOpened] = useState(defaultState);
  const onClickClose = () => {
    setToastOpened((prev) => !prev);
  };

  return (
    <ToastContainer
      className={`${className ? className : ""} ${
        isToastOpened === true ? "opened" : ""
      }`}
      bottomFix={bottomFix}
    >
      {/* bottomFix 로 팝업 노출 위치 변경 가능 */}
      <ToastInner>
        <ToastMessage>{message}</ToastMessage>
        {toLink && <ToastLink to={toLink}>{linkText}</ToastLink>}
        {closeButton && (
          <ButtonClose type="button" onClick={onClickClose}>
            <span>닫기</span>
          </ButtonClose>
        )}
      </ToastInner>
    </ToastContainer>
  );
}

const ButtonClose = styled.button`
  position: absolute;
  z-index: 1;
  right: 2rem;
  bottom: 50%;
  width: 2rem;
  height: 2rem;
  margin-bottom: -0.8rem;
  background: url(${BtnPopupClose}) no-repeat center;
  & > span {
    font-size: 1px;
    opacity: 0;
  }
`;
const ToastMessage = styled.div``;
const ToastLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  margin-top: 1rem;
  font-size: 1.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ToastInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 44.4rem;
  min-height: 5.8rem;
  padding: 1.6rem 2rem 1.6rem 2rem;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 58px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;

  ${(props) =>
    props.closeButton === true &&
    `
      padding-right: 5rem;
  `}
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const ToastContainer = styled.div`
  position: fixed;
  z-index: 9001;
  left: 0;
  bottom: ${(props) => props.bottomFix + `rem`};
  display: none;
  justify-content: center;
  align-items: center;
  width: calc(100% - 3.2rem);
  margin: 0 1.6rem;
  &.opened {
    display: flex;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    bottom: 9.6rem;
  }
`;

export default ToastPopup;
