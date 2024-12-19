import React, { useState, useRef } from "react";
import styled from "styled-components";

// layout
import ToastPopup from "components/layout/ToastPopup";

function RecommendNeedsToast() {
  const [isModalClose, setModalClose] = useState(true); //false로 변경하여 사용

  return (
    <NeedsToast
      defaultState={isModalClose}
      message={"1개 이상 선택해 주세요."}
      bottomFix="13.5"
    />
  );
}

const NeedsToast = styled(ToastPopup)`
  & > div {
    max-width: 32.8rem;
  }
`;

export default RecommendNeedsToast;
