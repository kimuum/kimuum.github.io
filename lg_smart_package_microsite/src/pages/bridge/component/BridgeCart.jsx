import React, { useEffect, useState } from "react";
import styled from "styled-components";

// common
import Button from "components/common/Button";

function BridgeCart({ totalPrice, totalCount }) {
  const [isCartMobile, setCartMobile] = useState(false);

  function handleResize() {
    const mobileCheck = window.innerWidth <= 768;
    setCartMobile(mobileCheck);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CartBottomContainer>
      {isCartMobile ? (
        <CartBottomArea>
          <CartButton aesthetic="bgRed">
            총 {totalCount}개 {totalPrice}원 구매하기
          </CartButton>
        </CartBottomArea>
      ) : (
        <>
          <CartTopArea>
            <CartTopTitle>총 금액</CartTopTitle>
            <CartTopTotal>{totalPrice}원</CartTopTotal>
          </CartTopArea>
          <CartBottomArea>
            <CartButton aesthetic="bgRed">
              {" "}
              총 {totalCount}개 구매하기
            </CartButton>
          </CartBottomArea>
        </>
      )}
    </CartBottomContainer>
  );
}

const CartBottomContainer = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    /* bottom: 5.3rem; */
    z-index: 10;
    width: 100%;
    background-color: #eeeeee;
  }
`;

const CartTopArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.4rem;
  &:last-child {
    margin-bottom: 0;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CartBottomArea = styled.div`
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 1.7rem 1.6rem 1.3rem;
    background-color: #ffffff;
    border-top: 1px solid #dddddd;
  }
`;

const CartTopTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  color: #0f0f0f;
`;

const CartTopTotal = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: #0f0f0f;
`;

const CartButton = styled(Button)``;

export default BridgeCart;
