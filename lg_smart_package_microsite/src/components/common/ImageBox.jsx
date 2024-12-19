import styled from "styled-components";

function ImageBox({ className = "", src, alt = "", ariaHidden }) {
  return (
    <ImageContainer className={className} aria-hidden={ariaHidden && true}>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default ImageBox;
