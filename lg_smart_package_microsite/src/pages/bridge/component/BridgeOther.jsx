import styled from "styled-components";

//common
import ProductThumbnail from "components/common/ProductThumbnail";

//images
import ArrowMoreGray from "assets/images/common/arrow_more_gray.svg";

function BridgeOther() {
  return (
    <OtherProductContainer>
      <OtherTopArea>
        <TopLeftArea>
          <OtherTitle>
            같이사면 좋은 <br />
            추천가전을 만나보세요.
          </OtherTitle>
        </TopLeftArea>
        <TopRightArea>
          <ButtonMore type="button">더보기</ButtonMore>
        </TopRightArea>
      </OtherTopArea>
      <OtherMiddleArea>
        <ProductContainer>
          <ProductRow
            className={"product-row"}
            title="LG 올레드 evo (스탠드형)"
            code="OLED77G3KNA"
            price="8,200,000원"
            src={require("assets/images/thumbs/img_bridge_product01.jpg")}
          />
          <ProductRow
            className={"product-row"}
            title="LG 휘센 오브제컬렉션 위너 에어컨 2in1"
            spec=" · 56.9㎡"
            code="OLED77G3KNA"
            price="8,200,000원"
            src={require("assets/images/thumbs/img_bridge_product02.jpg")}
          />
          <ProductRow
            className={"product-row"}
            title="LG 퓨리케어 360˚  공기청정기 플러스"
            spec="·97㎡·2등급"
            code="AS283DWFL"
            price="869,000원"
            src={require("assets/images/thumbs/img_bridge_product03.jpg")}
          />
          <ProductRow
            className={"product-row"}
            title="LG 디오스 오브제컬렉션 식기세척기"
            spec="·빌트인전용·12인용"
            code="DUBJ1EP"
            price="790,000원"
            src={require("assets/images/thumbs/img_bridge_product04.jpg")}
          />
          <ProductRow
            className={"product-row"}
            title="LG 디오스 오브제컬렉션 매직스페이스 냉장고"
            spec="·870L·1등급"
            code="T873P111"
            price="1,750,000원"
            src={require("assets/images/thumbs/img_bridge_product05.jpg")}
          />
        </ProductContainer>
      </OtherMiddleArea>
    </OtherProductContainer>
  );
}

const ProductRow = styled(ProductThumbnail)`
  &.product-row {
    flex: auto;
    flex-shrink: 0;
    width: 25.69rem;
    margin-right: 1.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    &.product-row {
      margin-right: 2.4rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &.product-row {
      width: 15rem;
    }
  }
`;

const ButtonMore = styled.button`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5;
  color: #666666;
  &:after {
    content: "";
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 2px;
    background: url(${ArrowMoreGray}) no-repeat center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const OtherTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2.4rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2rem;

  /* 가로 스크롤 */
  &::-webkit-scrollbar {
    height: 16px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 1);
    border-top: 4px solid rgba(255, 255, 255, 1);
    border-bottom: 4px solid rgba(255, 255, 255, 1);
  }
  &::-webkit-scrollbar-track {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 4px solid rgba(255, 255, 255, 1);
    border-bottom: 4px solid rgba(255, 255, 255, 1);
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 0 1.6rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const TopRightArea = styled.div``;
const TopLeftArea = styled.div``;
const OtherTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 3.2rem;
  }
`;
const OtherMiddleArea = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin: 0 -1.6rem;
  }
`;

const OtherProductContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;

  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export default BridgeOther;
