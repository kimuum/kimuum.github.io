import React, { forwardRef } from "react";
import styled from "styled-components";

const PackageProductList = React.forwardRef(({ className }, ref) => {
  return (
    <ProductList className={className} ref={ref}>
      패키지 정보
    </ProductList>
  );
});

const ProductList = styled.div``;

export default PackageProductList;
