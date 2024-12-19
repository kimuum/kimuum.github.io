import React, { useState, useRef } from "react";
import styled from "styled-components";

// common
import Button from "components/common/Button";

// layout
import ModalPopup from "components/layout/ModalPopup";

function BridgeHubModal() {
  const [isModalClose, setModalClose] = useState(true); //false로 변경하여 사용
  const handleModalClose = () => {
    setModalClose((prev) => !prev);
  };

  return (
    <ModalPopup
      defaultState={isModalClose}
      buttons={
        <>
          <ButtonOk aesthetic="bgWhite" onClick={handleModalClose}>
            취소
          </ButtonOk>
          <ButtonOk aesthetic="bgRed" onClick={handleModalClose}>
            확인
          </ButtonOk>
        </>
      }
      todaysButton={
        <>
          <>
            <button type="button" onClick={handleModalClose}>
              오늘 하루동안 보지 않기
            </button>
            <button type="button" onClick={handleModalClose}>
              닫기
            </button>
          </>
        </>
      }
      todayID={"notice-today"}
      todayChecked={false}
    >
      LG IoT 제품은 LG ThinQ ON을 <br />
      연결해야 사용할 수 있어요. <br />
      제외하고 구매하시겠어요?
    </ModalPopup>
  );
}

const ButtonOk = styled(Button)`
  border-radius: 6px;
`;
export default BridgeHubModal;
