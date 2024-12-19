import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Quantity({ className = "" }) {
  const [isQuantity, setQuantity] = useState(1);
  const MinusButtonRef = useRef(null);
  const PlusButtonRef = useRef(null);

  const handleIncrement = () => {
    if (isQuantity < 24) {
      setQuantity(isQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (isQuantity > 1) {
      setQuantity(isQuantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || !isNaN(newValue)) {
      setQuantity(newValue === "" ? "" : parseInt(newValue));
    }
  };
  useEffect(() => {
    // 값이 1 일때 비활성화
    if (isQuantity === 1) {
      MinusButtonRef.current.disabled = true;
    } else {
      MinusButtonRef.current.disabled = false;
    }

    // 값이 24 일때 비활성화
    if (isQuantity === 24) {
      PlusButtonRef.current.disabled = true;
    } else {
      PlusButtonRef.current.disabled = false;
    }
  }, [isQuantity]);

  return (
    <QuantityContainer className={className}>
      <QuantityBtnMinus
        type="button"
        title="빼기"
        onClick={handleDecrement}
        ref={MinusButtonRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 0.5H11.5C11.776 0.5 12 0.6792 12 0.9C12 1.1208 11.776 1.3 11.5 1.3H0.5C0.224 1.3 0 1.1208 0 0.9C0 0.6792 0.224 0.5 0.5 0.5Z"
            fill="#0F0F0F"
          />
        </svg>
      </QuantityBtnMinus>
      <QuantityInput
        type="number"
        value={isQuantity === "" ? "" : parseInt(isQuantity)}
        onChange={handleInputChange}
      />
      <QuantityBtnPlus
        type="button"
        className="btn-plus"
        title="더하기"
        onClick={handleIncrement}
        ref={PlusButtonRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 5.5V0.5C6.5 0.224 6.3208 0 6.1 0C5.8792 0 5.7 0.224 5.7 0.5V5.5H0.5C0.224 5.5 0 5.6792 0 5.9C0 6.1208 0.224 6.3 0.5 6.3H5.7V11.5C5.7 11.776 5.8792 12 6.1 12C6.3208 12 6.5 11.776 6.5 11.5V6.3H11.5C11.776 6.3 12 6.1208 12 5.9C12 5.6792 11.776 5.5 11.5 5.5H6.5Z"
            fill="#0F0F0F"
          />
        </svg>
      </QuantityBtnPlus>
    </QuantityContainer>
  );
}

const QuantityBtnMinus = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid #dddddd;
  background-color: #fff;
  border-radius: 4px 0px 0px 4px;
  &:disabled {
    svg {
      path {
        fill: #aaaaaa;
      }
    }
  }
`;

const QuantityBtnPlus = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid #dddddd;
  background-color: #fff;
  border-radius: 0px 4px 4px 0px;
  &:disabled {
    svg {
      path {
        fill: #aaaaaa;
      }
    }
  }
`;

const QuantityInput = styled.input`
  display: block;
  width: 4.7rem;
  height: 3.2rem;
  text-align: center;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  border-radius: 0;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  &:focus-visible {
    outline: 2px solid blue;
    outline-offset: -2px;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Quantity;
