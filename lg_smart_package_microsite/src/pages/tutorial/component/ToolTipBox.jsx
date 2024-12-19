import styled from "styled-components";

const ToolTipBox = ({ className = "", children }) => {
  return <ToolTipContainer className={className}>{children}</ToolTipContainer>;
};

const ToolTipContainer = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 36rem;
    height: 100%;
    margin-left: auto;
  }
  /* Mobile */
  @media screen and (max-width: 359px) {
    max-width: 100vh;
  }
`;

export default ToolTipBox;
