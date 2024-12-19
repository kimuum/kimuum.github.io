import styled from "styled-components";

//images
import IconHumidity from "assets/images/tutorial/tutorial_meta_humidity.svg";
import IconLight from "assets/images/tutorial/tutorial_meta_light.svg";
import IconTemperature from "assets/images/tutorial/tutorial_meta_temperature.svg";

import IconTimer from "assets/images/tutorial/tutorial_meta_clock.svg";
import IconFeed from "assets/images/tutorial/tutorial_meta_feed.svg";

import IconDust from "assets/images/tutorial/tutorial_meta_air_bad.svg";
import IconCO2 from "assets/images/tutorial/tutorial_meta_air_commomly.svg";

const FieldBlackDimBox = ({ className = "", children }) => {
  return <BlackDimBox className={className}>{children}</BlackDimBox>;
};

const BlackDimBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  & > [class*="icon-"] {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4;
    color: #ffffff;
    &:last-child {
      margin-right: 0;
    }
    &:before {
      content: "";
      display: block;
      width: 2rem;
      height: 2rem;
      padding-right: 2px;
    }
    & > span {
      margin-left: 6px;
      &.color {
        &-red {
          color: #fc3f3f;
        }
        &-yellow {
          color: #ffde30;
        }
        &-blue {
          color: #5597ff;
        }
      }
    }
  }
  /* 분리수면 */
  & > .icon-humidity {
    &:before {
      background: url(${IconHumidity}) no-repeat center;
    }
  }
  & > .icon-light {
    &:before {
      background: url(${IconLight}) no-repeat center;
    }
  }
  & > .icon-temperature {
    &:before {
      background: url(${IconTemperature}) no-repeat center;
    }
  }
  /* 펫 */
  & > .icon-time {
    margin-right: 2rem;
    &:before {
      background: url(${IconTimer}) no-repeat center;
    }
  }
  & > .icon-feed {
    &:before {
      background: url(${IconFeed}) no-repeat center;
    }
  }
  /* 공기질 */
  & > .icon-dust {
    &:before {
      background: url(${IconDust}) no-repeat center;
    }
  }
  & > .icon-CO2 {
    &:before {
      background: url(${IconCO2}) no-repeat center;
    }
  }

  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 3rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export default FieldBlackDimBox;
