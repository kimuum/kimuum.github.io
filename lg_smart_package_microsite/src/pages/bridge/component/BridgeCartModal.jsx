import { Link } from "react-router-dom";
import styled from "styled-components";
// common
import ImageBox from "components/common/ImageBox";

// bridge component
import BridgeTogetherSwiper from "pages/bridge/component/BridgeTogetherSwiper";

// images
import IconClose from "assets/images/common/btn_popup_close_bk.svg";
import ArrowCloseDown from "assets/images/common/arrow_down.svg";
import ArrowLinkRight from "assets/images/common/arrow_link_black.svg";

function BridgeCartModal({ defaultState = false, onClick = () => {} }) {
  return (
    <>
      {defaultState && (
        <ModalContainer>
          <ModalContents>
            <PopupHead>
              <strong className="popup-head-title" aria-hidden="true">
                장바구니 담기
              </strong>
              <button
                type="button"
                className="popup-close-btn"
                onClick={onClick}
              >
                <span className="ir">장바구니 담기 닫기</span>
              </button>
            </PopupHead>
            <PopupBody>
              <BridgeAddedBox>
                <BridgeAddedList>
                  <BridgeAddedImage
                    src={require("assets/images/bridge/brige_hero_wakeup_01.jpg")}
                    alt="취침/기상 패키지"
                  />
                  <div className="cart-add-text">장바구니에 담았습니다.</div>
                  <Link to="" className="cart-link">
                    바로가기
                  </Link>
                </BridgeAddedList>
              </BridgeAddedBox>
              <BridgeTogetherBox />
            </PopupBody>
          </ModalContents>
        </ModalContainer>
      )}
    </>
  );
}

const BridgeAddedImage = styled(ImageBox)`
  flex-shrink: 0;
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.4rem;
  border-radius: 4px;
  /* PC */
  @media screen and (min-width: 769px) {
    width: 6rem;
    height: 6rem;
    border-radius: 8px;
  }
`;
const BridgeAddedList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d9d9d9;
  & > .cart-add-text {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000000;
  }
  & > .cart-link {
    margin-left: auto;
    padding-right: 1.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0f0f0f;
    background: url(${ArrowLinkRight}) no-repeat center right / 16px auto;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .cart-add-text {
      font-size: 1.6rem;
    }
    & > .cart-link {
      padding-right: 2rem;
      font-size: 1.6rem;
      background-size: 21px auto;
    }
  }
`;
const BridgeTogetherBox = styled(BridgeTogetherSwiper)`
  margin-top: 2.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 2.9rem;
  }
`;
const BridgeAddedBox = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;
const PopupBody = styled.div``;

const PopupHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > .popup-head-title {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.4;
    color: #0f0f0f;
  }
  & > .popup-close-btn {
    display: block;
    box-sizing: content-box;
    & > .ir {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      opacity: 0;
      font-size: 1px;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    height: 4.6rem;
    border-bottom: 1px solid #0f0f0f;
    & > .popup-close-btn {
      position: relative;
      right: -1rem;
      width: 2.4rem;
      height: 2.4rem;
      padding: 1rem;
      margin-left: auto;
      background: url(${IconClose}) no-repeat center;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .popup-head-title {
      display: none;
    }
    & > .popup-close-btn {
      position: relative;
      width: 100%;
      height: 3.6rem;
      margin-left: auto;
      background: url(${ArrowCloseDown}) no-repeat center;
    }
  }
`;

const ModalContents = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 58.4rem;
    padding: 2rem 4rem 4.4rem;
    border-radius: 6px;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
    border-radius: 8px 8px 0 0;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
  /* PC */
  @media screen and (min-width: 769px) {
    justify-content: center;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export default BridgeCartModal;
