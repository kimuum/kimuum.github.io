import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// bridge/component
import BridgeHero from "pages/bridge/component/BridgeHero";
import BridgeOptions from "pages/bridge/component/BridgeOptions";
import BridgeList from "pages/bridge/component/BridgeList";
import BridgeNotice from "pages/bridge/component/BridgeNotice";
import BridgeCart from "pages/bridge/component/BridgeCart";

// 패키지별 콘텐츠
import BridgeContents from "pages/bridge/component/BridgeContents";
import BridgeContentsOuting from "pages/bridge/component/content/BridgeContentsOuting";
import BridgeContentsPetOuting from "pages/bridge/component/content/BridgeContentsPetOuting";
import BridgeContentsVisit from "pages/bridge/component/content/BridgeContentsVisit";
import BridgeContentsKid from "pages/bridge/component/content/BridgeContentsKid";
import BridgeContentsPetEnvironment from "pages/bridge/component/content/BridgeContentsPetEnvironment";
import BridgeContentsKitchen from "pages/bridge/component/content/BridgeContentsKitchen";
import BridgeContentsMoodliving from "pages/bridge/component/content/BridgeContentsMoodliving";
import BridgeContentsAirWindow from "pages/bridge/component/content/BridgeContentsAirWindow";
import BridgeContentsAirStudy from "pages/bridge/component/content/BridgeContentsAirStudy";
import BridgeContentsHomeMonitoring from "pages/bridge/component/content/BridgeContentsHomeMonitoring";
import BridgeContentsDeepSleep from "pages/bridge/component/content/BridgeContentsDeepSleep";
import BridgeContentsSummer from "pages/bridge/component/content/BridgeContentsSummer";

function BridgeMain({ installed = false, packageName }) {
  const [isFixed, setFixed] = useState(false);
  const [isFlexBottom, setFlexBottom] = useState(false);
  const fixedWrapRef = useRef(null);
  const standardRef = useRef(null);
  const fixeItemRef = useRef(null);

  const handleScrollFixed = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const fixedContainer = fixedWrapRef.current; // 고정 할 영역
    const standardContainer = standardRef.current; // 고정 되는 기준 영역
    const fixeItem = fixeItemRef.current;

    if (!fixedContainer || !standardContainer || !fixeItem) return;

    const fixedItemOriginalH = fixeItem.clientHeight; // 고정 전 영역 높이값
    const standardOriginalH = standardContainer.clientHeight; // 고정 되는 기준 영역 높이값

    const fixedTop = fixedContainer.offsetTop; //고정 할 영역 TOP 값 : 88
    const standardTop = standardContainer.offsetTop; // 고정 되는 기준 영역 TOP 값
    const cancelFixedTop =
      standardContainer.offsetHeight + standardTop - fixedItemOriginalH; // 고정 해제 되는 값

    const scrollActive = (fixedTop) => {
      // 스크롤 시 영역 고정
      if (scrollTop > fixedTop) {
        setFixed(true);
        if (isFixed) {
          fixeItem.style.position = "fixed";
          fixeItem.style.top = 0;
          fixeItem.style.width = `${fixedContainer.clientWidth}px`;
        }
      }

      // 우측 기준 영역 끝 도달 시 flex end 정렬로 변경
      if (scrollTop > cancelFixedTop) {
        setFlexBottom(true);
        if (isFlexBottom) {
          fixedContainer.style.display = "flex";
          fixedContainer.style.justifyContent = "flex-start";
          fixedContainer.style.alignItems = "flex-end";
          fixeItem.style.position = "static";
        }
      }

      // 우측 기준 영역을 스크롤이 넘었을 때 초기화
      if (scrollTop < fixedTop) {
        setFixed(false);
        setFlexBottom(false);
        if (!isFixed && !isFlexBottom) {
          fixedContainer.style = "";
          fixeItem.style = "";
        }
      }
    };

    // 스크롤 시작 조건 : 디바이스 769 이상 && 우측이 좌측 보다 높을 경우
    if (window.innerWidth > 768 && fixedItemOriginalH < standardOriginalH) {
      if (fixedTop < 0) {
        scrollActive(0);
      } else {
        scrollActive(fixedTop);
      }
    }
  };
  const handleResizeFixed = () => {
    const fixedContainer = fixedWrapRef.current;
    const fixeItem = fixeItemRef.current;

    if (!fixedContainer || !fixeItem) return;

    if (window.innerWidth > 768) {
      fixeItem.style.width = `${fixedContainer.clientWidth}px`;
    } else {
      fixedContainer.style = "";
      fixeItem.style = "";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeFixed);
    window.addEventListener("scroll", handleScrollFixed);

    handleResizeFixed();
    handleScrollFixed();

    return () => {
      window.removeEventListener("scroll", handleScrollFixed);
      window.removeEventListener("resize", handleResizeFixed);
    };
  }, [isFixed, isFlexBottom]);

  //
  const labelOptions = [
    // {
    //   theme: "에너지",
    // },
    {
      theme: "조명",
    },
  ];
  return (
    <BridgeMainContainer>
      <BridgeContentFlex>
        {/* 슬라이드 */}
        <BridgeContentLeft ref={fixedWrapRef}>
          <BridgeHero ref={fixeItemRef} packageName={packageName} />
        </BridgeContentLeft>

        {/* 숙면 솔루션 팩 */}
        <BridgeContentRight ref={standardRef}>
          <BridgeOptions
            labelData={labelOptions}
            title="숙면 솔루션 팩"
            subtitle="취침 전 숙면을 위한 최적의 환경이 자동을 조성하기 위한 패키지"
            options={true}
            optionList="보이스 허브 / 커튼 컨트롤러 / 스마트 전구 / 온습도 센서 / 스마트스위치 3구 / 스마트 스위치 2구"
            infoText="구매 시 제품 별 구매 옵션 선택은 필수입니다."
          />

          {/* 구성 제품 선택 */}
          <BridgeList title="구성 제품 선택" installed={installed} />

          <BridgeCart totalPrice="353,056" totalCount={6} />
        </BridgeContentRight>
      </BridgeContentFlex>

      {/* 20240524 추천 가전 삭제 */}

      {/* 브릿지 콘텐츠 */}
      <BridgeContentDetail>
        {/* 외출귀가 맞춤팩 */}
        {packageName === "outing" && <BridgeContentsOuting />}

        {/* 키친 무드업팩 */}
        {packageName === "moodKitchen" && <BridgeContentsKitchen />}

        {/* 리빙 무드업팩 */}
        {packageName === "moodLiving" && <BridgeContentsMoodliving />}

        {/* 반려동물 원격케어팩 */}
        {packageName === "petOuting" && <BridgeContentsPetOuting />}

        {/* 반려동물 맞춤케어팩 */}
        {packageName === "petEnvironment" && <BridgeContentsPetEnvironment />}

        {/* 분리수면 안심팩 */}
        {packageName === "kid" && <BridgeContentsKid />}

        {/* 세이프티 컨트롤팩*/}
        {packageName === "visit" && <BridgeContentsVisit />}

        {/* 집안공기 마스터팩 */}
        {packageName === "airWindow" && <BridgeContentsAirWindow />}

        {/* 학습환경 조성팩 */}
        {packageName === "airStudy" && <BridgeContentsAirStudy />}

        {/* 숙면 솔루션팩 */}
        {packageName === "deepSleep" && <BridgeContentsDeepSleep />}

        {/* 마이홈 모니터링팩 */}
        {packageName === "homeMonitoring" && <BridgeContentsHomeMonitoring />}

        {/* 여름 온습도 관리팩 */}
        {packageName === "summer" && <BridgeContentsSummer />}
      </BridgeContentDetail>

      {/* 구매 시 유의사항  */}
      <InnerWithBorderTop>
        <InnerArea>
          <BridgeNotice />
        </InnerArea>
      </InnerWithBorderTop>
    </BridgeMainContainer>
  );
}

const BridgeMainContainer = styled.main`
  /* PC */
  @media screen and (min-width: 769px) {
    padding-top: 4rem;
    border-top: 1px solid #dddddd;
  }
`;
const BridgeContentFlex = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 141.2rem;
    margin: 0 auto;
    padding: 0 1.6rem;
  }
`;
const BridgeContentLeft = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    flex: 1;
    width: 40%;
    max-width: 66rem;
  }
`;
const BridgeContentRight = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    flex: 1;
    max-width: 56rem;
    margin-left: 2rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding: 2.4rem 1.6rem 0;
  }
`;
const InnerWithBorderTop = styled.div`
  padding: 0 1.6rem;
  margin: 6rem 0 2rem;
  border-top: 1px solid #dddddd;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 12rem 0 2rem;
  }
`;
const BridgeContentDetail = styled(InnerWithBorderTop)`
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 9rem;
  }
`;

const InnerArea = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 138rem;
    margin: 0 auto;
  }
`;

export default BridgeMain;
