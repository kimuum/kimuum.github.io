import React, { forwardRef } from "react";
import styled from "styled-components";

const FieldClickButton = React.forwardRef(
  ({ className, text, onClick = () => {} }, ref) => {
    return (
      <ClickButtonBox className={className}>
        <span className="field-label">{text}</span>
        <button
          onClick={onClick}
          ref={ref}
          type="button"
          className="field-button"
        >
          <span className="ir">다음으로</span>
        </button>
      </ClickButtonBox>
    );
  }
);
const ClickButtonBox = styled.div`
  position: absolute;
  z-index: 4;
  & > .field-label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 2.2rem;
    padding: 0 1rem;
    border-radius: 40px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: #ffffff;
  }
  & > .field-button {
    position: relative;
    display: block;
    /* background-color: rgba(0, 0, 0, 0.5); */
    & > .ir {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      opacity: 0;
      font-size: 1px;
    }
  }
`;

export default FieldClickButton;
