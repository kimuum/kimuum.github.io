import React, { useState, useRef } from "react";
import styled from "styled-components";

// layout
import ToastPopup from "components/layout/ToastPopup";

function BridgeInfoToast() {
  const [isModalClose, setModalClose] = useState(true); //false로 변경하여 사용

  return (
    <BridgeToast
      defaultState={isModalClose}
      message={"설치 서비스 미이용 시에는 택배로 배송됩니다."}
      bottomFix="13.5"
    />
  );
}

const BridgeToast = styled(ToastPopup)`
  & > div {
    max-width: 32.8rem;
  }
`;

export default BridgeInfoToast;
