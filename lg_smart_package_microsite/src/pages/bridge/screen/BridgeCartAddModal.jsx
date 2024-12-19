import React, { useState } from "react";

// layout
import BridgeCartModal from "pages/bridge/component/BridgeCartModal";

function BridgeCartAdd() {
  const [isModalClose, setModalClose] = useState(true); //false로 변경하여 사용
  const handleModalClose = () => {
    setModalClose((prev) => !prev);
  };

  return (
    <BridgeCartModal defaultState={isModalClose} onClick={handleModalClose} />
  );
}

export default BridgeCartAdd;
