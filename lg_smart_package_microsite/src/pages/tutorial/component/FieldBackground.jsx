import styled from "styled-components";

const FieldBackground = ({ className = "", children }) => {
  return (
    <FieldBackgroundBox className={className}>{children}</FieldBackgroundBox>
  );
};

const FieldBackgroundBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

export default FieldBackground;
