import { Link } from "react-router-dom";
import styled from "styled-components";

//common
import ImageBox from "components/common/ImageBox";

function ContentProductThumbnail({ className, src, alt = "", name, toLink }) {
  return (
    <ProductBox className={className} to={toLink} aria-label={name}>
      <ProductImageBox
        src={require(`assets/images/bridge/${src}`)}
        alt={alt}
        ariaHidden={true}
      />
      <ProductName aria-hidden={true}>{name}</ProductName>
    </ProductBox>
  );
}

const ProductImageBox = styled(ImageBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 18rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    max-width: 8rem;
  }
`;
const ProductName = styled.div`
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.25;
  color: #666666;
  text-align: center;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 8.1rem;
    height: 5rem;
    font-size: 2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-top: 0.7rem;
  }
`;
const ProductBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2.1rem 1.2rem 1.6rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-sizing: border-box;

  /* PC */
  @media screen and (min-width: 769px) {
    max-width: calc(20% - 1rem);
    padding: 8.4rem 1.6rem 3.5rem;
    margin: 0.5rem;
    border-radius: 25px;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    max-width: calc(33.333% - 0.8rem);
    margin: 0.4rem;
    height: 15.9rem;
  }
`;

export default ContentProductThumbnail;
