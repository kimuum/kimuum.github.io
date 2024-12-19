import React, { useState } from "react";
import styled from "styled-components";

// images
import CheckIconNormal from "assets/images/recommend/check_needs_normal.svg";
import CheckIconSelected from "assets/images/recommend/check_needs_selected.svg";

import IconSecurity1 from "assets/images/recommend/icon_card_security1.svg";
import IconSecurity2 from "assets/images/recommend/icon_card_security2.svg";
import IconIot1 from "assets/images/recommend/icon_card_iot1.svg";
import IconIot2 from "assets/images/recommend/icon_card_iot2.svg";
import IconIot3 from "assets/images/recommend/icon_card_iot3.svg";
import IconIot4 from "assets/images/recommend/icon_card_iot4.svg";
import IconDust1 from "assets/images/recommend/icon_card_dust1.svg";
import IconDust2 from "assets/images/recommend/icon_card_dust2.svg";
import IconSleep from "assets/images/recommend/icon_card_sleep.svg";
import IconStudy from "assets/images/recommend/icon_card_study.svg";
import IconPet1 from "assets/images/recommend/icon_card_pet1.svg";
import IconPet2 from "assets/images/recommend/icon_card_pet2.svg";
import IconPet3 from "assets/images/recommend/icon_card_pet3.svg";
import IconBaby1 from "assets/images/recommend/icon_card_baby1.svg";
import IconBaby2 from "assets/images/recommend/icon_card_baby2.svg";
import IconBaby3 from "assets/images/recommend/icon_card_baby3.svg";
import IconMood from "assets/images/recommend/icon_card_mood.svg";

function RecommendNeedCard({
  className,
  id,
  icon,
  label,
  title,
  checked = false,
}) {
  const [isChecked, setChecked] = useState(checked);
  const onChange = (event) => {
    setChecked((prev) => !prev);
  };
  // br 태그 삭제
  const removeBrTags = (children) => {
    return React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string") {
          return child;
        }
        if (child.type === "br") {
          return "";
        }
        if (child.props && child.props.children) {
          return removeBrTags(child.props.children);
        }
        return child;
      })
      .join("");
  };
  const cleanedTitle = removeBrTags(title.props.children);

  return (
    <NeedCardContainer className={className}>
      <CheckboxInput
        type="checkbox"
        aria-label={label + " " + cleanedTitle}
        checked={isChecked}
        onChange={onChange}
      />
      <CheckboxLabel className={icon} aria-hidden={true} isChecked={isChecked}>
        {label && <NeedLabel>{label}</NeedLabel>}
        {title && <NeedTitle>{title}</NeedTitle>}
      </CheckboxLabel>
    </NeedCardContainer>
  );
}

const NeedTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  color: #0f0f0f;
  word-break: keep-all;

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.3;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  /* Mobile */
  /* @media screen and (max-width: 768px) {
    br {
      display: none;
    }
  } */
`;
const NeedLabel = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3;
  color: #666;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
  }
`;
const CheckboxLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 10.2rem;
  height: 100%;
  padding: 4.6rem 1.2rem 2rem;
  padding-right: 8rem;
  box-sizing: border-box;
  border-radius: 12px;
  pointer-events: none;
  &:before {
    content: "";
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    z-index: 0;
    width: 2.4rem;
    height: 2.4rem;
    ${(props) =>
      props.isChecked
        ? `background: url(${CheckIconSelected});`
        : `background: url(${CheckIconNormal});`}
  }
  &.icon {
    &-security1 {
      background: url(${IconSecurity1}) no-repeat right 2.4rem center #f1f6f9;
    }
    &-security2 {
      background: url(${IconSecurity2}) no-repeat right 2.4rem center #f1f6f9;
    }
    &-iot1 {
      background: url(${IconIot1}) no-repeat right 2.4rem center #f7f5f4;
    }
    &-iot2 {
      background: url(${IconIot2}) no-repeat right 2.4rem center #ecf5ea;
    }
    &-iot3 {
      background: url(${IconIot3}) no-repeat right 2.4rem center #f1f9f9;
    }
    &-iot4 {
      background: url(${IconIot4}) no-repeat right 2.4rem center #f1f6f9;
    }
    &-dust1 {
      background: url(${IconDust1}) no-repeat right 2.4rem center #f4f8f2;
    }
    &-dust2 {
      background: url(${IconDust2}) no-repeat right 2.4rem center #f5f4ea;
    }
    &-sleep {
      background: url(${IconSleep}) no-repeat right 2.4rem center #f1f1e7;
    }
    &-study {
      background: url(${IconStudy}) no-repeat right 2.4rem center #f1f6f9;
    }
    &-pet1 {
      background: url(${IconPet1}) no-repeat right 2.4rem center #f2f1f9;
    }
    &-pet2 {
      background: url(${IconPet2}) no-repeat right 2.4rem center #f9f6f3;
    }
    &-pet3 {
      background: url(${IconPet3}) no-repeat right 2.4rem center #eaf5f2;
    }
    &-baby1 {
      background: url(${IconBaby1}) no-repeat right 2.4rem center #eaf5f2;
    }
    &-baby2 {
      background: url(${IconBaby2}) no-repeat right 2.4rem center #eaf1f5;
    }
    &-baby3 {
      background: url(${IconBaby3}) no-repeat right 2.4rem center #f7f5f4;
    }
    &-mood {
      background: url(${IconMood}) no-repeat right 2.4rem center #f1f8f9;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 5.6rem 14rem 4.6rem 2.4rem;
    &:before {
      top: 1.6rem;
      left: 2rem;
    }
  }
  @media screen and (max-width: 1200px) {
    padding-right: 8rem;
    &[class*="icon-"] {
      background-size: 7rem auto;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &[class*="icon-"] {
      background-position: right 16px center;
    }
  }
`;
const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 0;
  cursor: pointer;
  &:checked {
    & + ${CheckboxLabel} {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        border: 2px solid #333333;
        box-sizing: border-box;
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
const NeedCardContainer = styled.div`
  position: relative;
`;

export default RecommendNeedCard;
