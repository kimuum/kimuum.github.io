import styled from "styled-components";

const SceneSlideFront = ({ children }) => {
  return <SlideFront>{children}</SlideFront>;
};

const SlideFront = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

export default SceneSlideFront;
