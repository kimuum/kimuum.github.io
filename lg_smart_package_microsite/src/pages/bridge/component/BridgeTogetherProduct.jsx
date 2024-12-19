import { Link } from "react-router-dom";
import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";

const BridgeTogetherProduct = ({
  className = "",
  title,
  spec,
  code,
  price,
  src,
}) => {
  return (
    <ProductThumbnailArea className={className}>
      <ProductTopArea>
        <ImageBox src={src} alt={title} />
      </ProductTopArea>
      <ProductMiddleArea>
        <MiddleBodyArea>
          <ProductTitle to="/">{title}</ProductTitle>
          {spec && <ProductSpec>{spec}</ProductSpec>}
          <ProductCode>{code}</ProductCode>
        </MiddleBodyArea>
      </ProductMiddleArea>
    </ProductThumbnailArea>
  );
};

const ProductSpec = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  line-height: 1.2;
  color: #666666;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;
const ProductCode = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4;
  color: #666666;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.2rem;
  }
`;
const ProductTitle = styled(Link)`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.4;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
  }
`;
const MiddleBodyArea = styled.div``;

const ProductMiddleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;
const ProductTopArea = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 1.6rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 2.4rem;
    border-radius: 8px;
  }
`;

const ProductThumbnailArea = styled.div``;

export default BridgeTogetherProduct;
