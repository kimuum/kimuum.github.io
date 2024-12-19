import React from "react";
import styled from "styled-components";

function FieldTitle({ className, isStep, topTitle, topText }) {
  const changeHtmlTags = (children) => {
    if (!children) {
      return null;
    }

    return React.Children.toArray(children).map((text, index) => {
      if (typeof text === "string") {
        return (
          <div className="field-top-text" key={index}>
            {text}
          </div>
        );
      }
      return React.cloneElement(text, { key: index });
    });
  };

  const TopTextBox = ({ topText }) => {
    const text = topText?.props?.children || null;
    const htmlTitle = changeHtmlTags(text);
    return htmlTitle;
  };

  return (
    <FieldTitleArea className={className} isStep={isStep}>
      {topTitle && <h2 className="field-top-title">{topTitle}</h2>}
      {topText && <TopTextBox topText={<>{topText}</>} />}
    </FieldTitleArea>
  );
}

const FieldTitleArea = styled.div`
  word-break: keep-all;
  & > .field-top-title {
    opacity: 0.6;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #ffffff;
  }
  & > .field-top-text {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.3;
    color: #ffffff;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .field-top-title {
      margin-bottom: 1.2rem;
      font-size: 1.8rem;
    }
    & > .field-top-text {
      max-width: 55.2rem;
      font-size: 3rem;
      word-break: keep-all;
      white-space: pre-line;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .field-top-title {
      margin-bottom: 0.6rem;
    }
    & > .field-top-text {
      margin-left: auto;
      margin-right: auto;
      letter-spacing: -0.5px;
    }
    text-align: center;
  }

  /* ios 큰 텍스트 */
  @supports (font: -apple-system-short-caption1) {
    @media screen and (max-width: 359px) {
      & > .field-top-text {
        font-size: 19px;
      }
    }
  }
`;

export default FieldTitle;
