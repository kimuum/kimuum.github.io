import React, { forwardRef } from "react";
import styled from "styled-components";

const FieldClickToast = React.forwardRef(
  ({ className, text, onClick = () => {} }, ref) => {
    return (
      <ClickToast
        className={className}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        {text}
      </ClickToast>
    );
  }
);

const ClickToast = styled.button`
  padding: 1.2rem 2rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  color: #ffffff;

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
  }
`;

export default FieldClickToast;
