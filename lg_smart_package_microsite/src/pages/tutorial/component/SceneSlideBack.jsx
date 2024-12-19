import styled from "styled-components";

const SceneSlideBack = ({ children }) => {
  return <SlideBack>{children}</SlideBack>;
};

const SlideBack = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

export default SceneSlideBack;
