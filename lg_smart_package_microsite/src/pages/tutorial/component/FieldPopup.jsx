import React, { forwardRef } from "react";
import styled from "styled-components";

const FieldPopup = React.forwardRef(({ className, children, button }, ref) => {
  return (
    <FieldPopupContainer className={className} ref={ref}>
      <div className="field-body">{children}</div>
      <div className="field-footer">{button}</div>
    </FieldPopupContainer>
  );
});

const FieldPopupContainer = styled.div`
  width: 100%;
  padding: 2rem 1.6rem 1.4rem;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  & > .field-footer {
    margin-top: 1.6rem;
  }
`;

export default FieldPopup;
