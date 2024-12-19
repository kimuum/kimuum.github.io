import { useState } from "react";
import styled from "styled-components";

//images
import IconCheckOff from "assets/images/common/icon_check_off.svg";
import IconCheckOn from "assets/images/common/icon_check_on.svg";
import IconCheckOnDisabled from "assets/images/common/icon_check_on_disabled.svg";
import IconCheckOffDisabled from "assets/images/common/icon_check_off_disabled.svg";

function Checkbox({
  className = "",
  id = "",
  value = "",
  checked = false,
  disabled = false,
}) {
  const [isChecked, seChecked] = useState(checked);
  const onChange = (event) => {
    seChecked((prev) => !prev);
  };

  return (
    <CheckboxContainer className={className}>
      <CheckboxInput
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <CheckboxLabel htmlFor={id}>
        <span className="label-icon"></span>
        {value !== "" ? <span className="label-value">{value}</span> : ""}
      </CheckboxLabel>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  position: relative;
  z-index: 0;
`;

const CheckboxLabel = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  & > .label-icon {
    flex-shrink: 0;
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    &:before {
      content: "";
      flex-shrink: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: url(${IconCheckOff}) no-repeat center / cover;
    }
  }
  & > .label-value {
    margin-left: 0.6rem;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .label-value {
      margin-left: 0.8rem;
    }
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  &:checked {
    & + ${CheckboxLabel} {
      & > .label-icon {
        &:before {
          background: url(${IconCheckOn}) no-repeat center / cover;
        }
      }
    }
    &:disabled {
      & + ${CheckboxLabel} {
        cursor: default;
        & > .label-icon {
          &:before {
            background: url(${IconCheckOnDisabled}) no-repeat center / cover;
          }
        }
        & > .label-value {
          color: #aaaaaa;
        }
      }
    }
  }
  &:disabled {
    & + ${CheckboxLabel} {
      cursor: default;
      & > .label-icon {
        &:before {
          background: url(${IconCheckOffDisabled}) no-repeat center / cover;
        }
      }
      & > .label-value {
        color: #aaaaaa;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &:focus-visible {
      & + ${CheckboxLabel} {
        outline: 2px solid blue;
      }
    }
  }
`;

export default Checkbox;
