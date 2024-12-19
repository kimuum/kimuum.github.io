import React, { forwardRef } from "react";
import styled from "styled-components";

//common
import BridgeSwiperPager from "pages/bridge/component/BridgeSwiperPager";
import BridgeThumbHero from "pages/bridge/component/BridgeThumbHero";

// function
import ResizeMobile from "components/common/ResizeMobile";

//data
import { slideCardData } from "assets/data/bridgeSwiperImages";

const BridgeHero = React.forwardRef(({ packageName }, ref) => {
  const isBridgeHeroMobile = ResizeMobile(); // 디바이스 모바일/PC 상태 : true 일 때 모바일
  return (
    <BridgeHeroContainer ref={ref}>
      {isBridgeHeroMobile ? (
        <BridgeHeroSwiperPager data={slideCardData} packageName={packageName} />
      ) : (
        <BridgeHeroSwiperThumbs
          data={slideCardData}
          packageName={packageName}
          floatingText={true}
        />
      )}
    </BridgeHeroContainer>
  );
});

const BridgeHeroContainer = styled.div`
  transition-delay: 0.5s;
  transition-duration: 1s;
  transition-property: top;
`;
const BridgeHeroSwiperPager = styled(BridgeSwiperPager)``;
const BridgeHeroSwiperThumbs = styled(BridgeThumbHero)``;

export default BridgeHero;
