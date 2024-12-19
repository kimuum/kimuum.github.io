import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function DropDown({ title, listData, label = "", disabled = false }) {
  const [isDropDown, setDropDown] = useState(false);
  const toggleDropDown = (e) => {
    if (!disabled) {
      setDropDown((prev) => !prev);
    }
  };

  const buttonRef = useRef(null);
  const buttonTitleRef = useRef(null);

  const selectOption = (e, currentButtonText) => {
    const targetParent = e.target.parentNode;
    const targetTitle = buttonTitleRef.current;
    const targetSiblings =
      e.target.parentNode.parentNode.querySelectorAll("li");

    targetSiblings.forEach((targetSibling) => {
      targetSibling.classList.remove("selected");
      targetSibling
        .querySelector("button")
        .setAttribute("aria-selected", false);
    });

    targetParent.classList.add("selected");
    e.target.setAttribute("aria-selected", true);
    targetTitle.innerText = currentButtonText;
    setDropDown(false);
    buttonRef.current.focus();
  };
  const optionLists = listData.map((option, index) => (
    <li key={index.toString()}>
      <button
        type="button"
        role="option"
        aria-selected="false"
        onClick={(e) => {
          selectOption(e, option.title);
        }}
      >
        {option.title}
      </button>
    </li>
  ));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    if (isDropDown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropDown]);

  return (
    <DropDownBox
      className={`
      ${isDropDown ? " active" : ""}
      ${disabled ? " disabled" : ""}`}
      disabled={disabled}
    >
      <DropDownTop>
        <DropDownButton
          type="button"
          ref={buttonRef}
          onClick={toggleDropDown}
          aria-expanded={isDropDown ? true : false}
        >
          {label !== "" && <ButtonLabel>{label}</ButtonLabel>}
          <ButtonTitle ref={buttonTitleRef}>{title}</ButtonTitle>
          <IconArrow>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
            >
              <path
                d="M5.23398 5.10667L0.333984 0.586667L0.873984 0L5.23398 4.02L9.58732 0L10.134 0.586667L5.23398 5.10667Z"
                fill="#0F0F0F"
              />
            </svg>
          </IconArrow>
        </DropDownButton>
      </DropDownTop>
      <DropDownBottom>
        <DropDownList>{optionLists}</DropDownList>
      </DropDownBottom>
    </DropDownBox>
  );
}

const IconArrow = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 1.2rem;
  width: 1.6rem;
  height: 1.6rem;
  transform: translateY(-50%);
  svg {
    width: 9.8px;
    height: auto;
  }
`; //dropdown-arrow
const ButtonTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
  color: #0f0f0f;
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`; //dropdown-title
const ButtonLabel = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #666666;
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`; //dropdown-label
const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
  text-align: left;
  /* PC */
  @media screen and (min-width: 769px) {
    padding-right: 3.3rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-right: 4.4rem;
  }
`; //button

const DropDownList = styled.ul`
  & > li {
    &.selected {
      button {
        font-weight: 700;
        color: #0f0f0f;
      }
    }
    button {
      display: block;
      width: 100%;
      padding: 1rem 1.6rem;
      box-sizing: border-box;
      text-align: right;
      font-size: 1.4rem;
      line-height: 1.4;
      color: #666666;
      &:disabled {
        pointer-events: none;
        color: #aaaaaa;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > li {
      button {
        padding-right: 3.3rem;
        font-size: 1.6rem;
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > li {
      button {
        padding-right: 4.4rem;
      }
    }
  }
`;
const DropDownBottom = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  display: none;
  z-index: 2;
  top: 4.8rem;
  left: 0;
  width: 100%;
  max-height: 17rem;
  border: 1px solid #0f0f0f;
  border-top: none;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
`; //dropdown-list
const DropDownTop = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4.8rem;
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  border-radius: 6px;
  box-sizing: border-box;
`; //dropdown-button

const DropDownBox = styled.div`
  position: relative;
  z-index: 1;
  /* 옵션 활성화 */
  &.active {
    z-index: 2;
    ${IconArrow} {
      transform: rotate(180deg) translateY(50%);
    }
    ${DropDownBottom} {
      display: block;
    }
    ${DropDownTop} {
      border: 1px solid #0f0f0f;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
    }
  }
  /* 비활성화 */
  &.disabled {
    ${IconArrow} {
      svg {
        stroke: #aaaaaa;
      }
    }
    ${ButtonTitle} {
      color: #aaaaaa;
    }
    ${ButtonLabel} {
      color: #aaaaaa;
    }
    ${DropDownTop} {
      background-color: #eeeeee;
    }
  }
`;
export default DropDown;
