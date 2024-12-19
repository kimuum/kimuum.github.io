import React, { forwardRef } from "react";
import styled from "styled-components";

// images
import IconPrev from "assets/images/tutorial/icon_tutorial_prev.svg";

const FieldButtonPrev = React.forwardRef(
  ({ className, onClick = () => {} }, ref) => {
    return (
      <ButtonPrev
        className={className}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        <span className="ir">이전</span>
      </ButtonPrev>
    );
  }
);

const ButtonPrev = styled.button`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: url(${IconPrev}) no-repeat center rgba(0, 0, 0, 0.5);
  & > .ir {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    font-size: 1px;
  }
`;

export default FieldButtonPrev;
