import styled from "styled-components";

function ModalPopup({ defaultState = false, children, buttons, todaysButton }) {
  return (
    <>
      {defaultState && (
        <ModalContainer>
          <ModalInner>
            <ModalContents>
              <PopupBody>{children}</PopupBody>
              {buttons && <PopupFooter>{buttons}</PopupFooter>}
            </ModalContents>
            {todaysButton && <NoticeToday>{todaysButton}</NoticeToday>}
          </ModalInner>
        </ModalContainer>
      )}
    </>
  );
}
const NoticeToday = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 1.2rem;
  & > button {
    display: block;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    margin-right: auto;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const PopupBody = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.6rem;
  & > button {
    margin-right: 0.8rem;
    font-size: 1.4rem;
    &:last-child {
      margin-right: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 4.8rem;
  }
`;

const ModalContents = styled.div`
  width: 100%;
  padding: 4.4rem 1.6rem 1.6rem;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 4.8rem 4rem;
  }
`;

const ModalInner = styled.div`
  width: 100%;
  max-width: 31.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 44.4rem;
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
`;

export default ModalPopup;
