import styled from "styled-components";

//images
import IconInfo from "assets/images/common/icon_msg.svg";

const GuideTextIcon = ({ className = "", children }) => {
  return <GuideTextArea className={className}>{children}</GuideTextArea>;
};

const GuideTextArea = styled.div`
  position: relative;
  margin-top: 0.8rem;
  padding-left: 1.6rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  color: #0f0f0f;
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 0;
    width: 12px;
    height: 12px;
    background: url(${IconInfo}) no-repeat center / cover;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
  }
`;

export default GuideTextIcon;
