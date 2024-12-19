import styled from "styled-components";

const SceneSlideContent = ({ children }) => {
  return <SlideContent>{children}</SlideContent>;
};

const SlideContent = styled.div`
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  pointer-events: none;
  /* PC */
  @media screen and (min-width: 769px) {
    top: 8rem;
    left: 6rem;
    width: 100%;
    max-width: 67rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    top: 2rem;
    left: 0;
    width: 100%;
  }
`;

export default SceneSlideContent;
