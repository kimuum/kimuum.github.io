import React, { useState } from "react";
import styled from "styled-components";

// common
import TabButton from "components/common/TabButton";
import DotUlList from "components/common/DotUlList";

function BridgeNotice({ className = "" }) {
  const [isTab, setTab] = useState(0);
  return (
    <NoticeContainer className={className}>
      <NoticeTabTopBox className="notice-tab-title">
        <TabTitle className="tab-title">구매 시 유의사항</TabTitle>
        <TabButtonArea className="tab-buttons">
          <TabButtonBox
            isTab={isTab}
            tabButtonData={tabButtonData}
            seTabCurrent={setTab}
          />
        </TabButtonArea>
      </NoticeTabTopBox>
      <NoticeTabMiddleBox className="notice-tab-content">
        {isTab === 0 && (
          <InnerTabContent className="tab-content">
            <NoticeDotUlList>
              <li>
                배송지역 : 전국
                <span className="color-gray">
                  (단, 일부 도서산간지역의 경우 배송이 제한될 수 있습니다.)
                </span>
              </li>
              <li>
                배송비 : 무료배송{" "}
                <span className="color-gray">
                  (단, 도서산간지역의 경우 추가 운임 및 추가 설치비가 발생할 수
                  있으며, 추가비용이 발생할 경우 배송전 안내드립니다.)
                </span>
              </li>
              <li>
                배송시 폐가전 수거(동일 장소에 한함) 및 일반 사다리차는 무상
                지원됩니다. (단, 일반사다리차 사용 불가할 경우 스카이차 비용은
                유상 청구됩니다.)
              </li>
              <li>
                재고 부족/단종/생산 지연 등의 사유로 배송일이 변경될 수 있으며,
                지연 발생시 사전 연락드립니다. <br />
                도서산간지역(제주도 포함)의 경우 기상상황 등의 사유로 배송일이
                지연될 수 있습니다. <br />
                주문완료 이후, 배송지 변경이 필요한 경우 재 주먼하여 주시기
                바랍니다.
              </li>
              <li>
                배송 희망일의 경우 현재 기준 배송 납기 예정일이며, 생산 일정
                변경 등을 배송 일정은 변경될 수 있습니다.
              </li>
              <li>
                결제 완료 후 배송지 변경이 어려우니, 주문시 정확한 주소지를
                입력을 바랍니다.
              </li>
              <li>
                배송은 제품 특성에 따라 직접 설치 배송되거나 택배로 배송됩니다.{" "}
                <br />
                직접 설치 배송의 경우에는 당일 오전에 설치기사와 배송 일자를
                조정할 수 있습니다. <br />
                최초 배송 안내일로부터 8일 이상 인수 연기시(기사와
                협의하였더라도) 자동 주문 취소됩니다.
              </li>
              <li>
                제품 구매 후 설치를 동반하지 않는 단순 배송 희망건의 경우, 진행
                지원이 어렵습니다. (해외 밴출 후 현지국 사용, 타인 양도, 재판매
                목적 등) 관련 문의는 1544-7777로 접수 바랍니다.
              </li>
              <li>
                배송 전 알림톡으로 배송 예정일을 확인할 수 있으며, 알림톡으로
                배송 일자를 조정할 수 있습니다.
              </li>
              <li>
                주문일로 부터 90일 이상 제품 설치를 연기하실 경우, 장기 보관으로
                인한 제품의 노후화 등 고객 피해를 예방하기 위하여 문자 메시지
                안내 후 주문 취소됩니다.
              </li>
              <li>최초 배송 확정일은 알림톡 또는 설치기사가 안내 드립니다.</li>
              <li>
                인수고객과 통화 불가 및 수령지 주소가 불명확할 경우 지연될 수
                있습니다.
              </li>
            </NoticeDotUlList>
          </InnerTabContent>
        )}
        {isTab === 1 && (
          <InnerTabContent className="tab-content">
            <NoticeDotUlList>
              <li>
                <div className="bold">
                  고객 인수 완료 후 단순변심/감성불량에 의한 반품은 불가합니다.
                </div>
                <div>
                  * 고객인수완료란 : 제품을 설치/시운전하고 외관이 이상없음을
                  고객과 상호확인하여 고객으로부터 인수완료 서명을 받은 이후의
                  상태를 말함.
                </div>
              </li>
              <li>
                <div className="bold">
                  택배 등 고객인수완료 전 제품의 경우에는, 제품을 수령한
                  날로부터 7일 이내에는 반품 처리가 가능합니다.
                </div>
              </li>
              <li>
                <div className="bold">
                  택배로 배송되는 제품에 대해서는 하기 사항을 사전에 꼭
                  확인바랍니다.
                </div>
                <div>
                  - 소모품 (필터 등)의 경우, 전 제품이 무료배송이며 택배
                  반품시에도 무상으로 진행됩니다. <br />
                  수령하신 소모품에 불량이 있는 경우에도, 택배로 반품 접수를
                  진행하시면 됩니다. <br />
                  - 소모품을 제외한 일반 제품의 경우, 변심으로 인한 반품시에는
                  택배비는 고객 부담이며, <br />
                  고객께서 직접 택배사에 반품 접수를 진행하셔야 합니다. <br />
                  - 일반 제품 불량의 경우, 가까운 서비스센터를 방문하시어 불량
                  판정을 받으셔야 하며, <br />
                  LG전자 기사가 내방하여 불량 판정을 해드리지는 않으니 고객님의
                  양해 바랍니다.
                </div>
              </li>
              <li>
                <div className="bold">
                  다음 경우에는 반품/교환이 불가합니다.
                </div>
                <div>
                  - 고객에게 책임이 있는 사유로 재화등이 멸실되거나 훼손된 경우.
                  다만, 재화등의 내용을 확인하기 위하여 포장 등을 훼손한 경우는
                  제외합니다. <br />
                  - 고객의 사용 또는 일부 소비로 재화등의 가치가 현저히 감소한
                  경우 <br />- 시간이 지나 다시 판매하기 곤란할 정도로 재화등의
                  가치가 현저히 감소한 경우
                </div>
              </li>
              <li>
                <div className="bold">
                  반품/교환시 고객의 귀책사유로 수거가 지연될 경우에는 반품이
                  제한될 수 있습니다.
                </div>
              </li>
              <li>
                제조사 사정(신모델 출시 등) 및 부품 가격 변동 등에 의해 가격이
                변동될 수 있으며, 이로 인한 반품 및 가격 보상을 불가합니다.
              </li>
              <li>
                본품을 반품할 경우 사은품도 반품 처리되며, 사은품을 사용한 경우
                해당 비용 고객 부담 후 본품만 반품 처리 가능합니다.
              </li>
              <li>
                반품/교환 관련 자세한 사항은 고객센터(1544-7777)로 연락바랍니다.
              </li>
            </NoticeDotUlList>
          </InnerTabContent>
        )}
        {isTab === 2 && (
          <InnerTabContent className="tab-content">
            <NoticeDotUlList>
              <li>
                일반 설치 제품의 경우 기사님께서 배송 및 설치를 지원합니다. (단,
                설치환경에 따라 추가 설치비용이 발생할 수 있습니다.)
              </li>
              <li>
                <div>
                  설치 상품의 경우 주문 시 설치 환경을 꼭 체크하여 주십시오.
                </div>
                <div>
                  -TV : 벽걸이 설치가 불가한 벽면재질은 아닌지 확인해주세요.
                  <br />
                  -냉장고/세탁기/건조기 : 설치 공간/출입문/제품사이즈를 주문
                  전에 확인해 주세요.
                  <br />
                  -에어컨 : 설치 환경이 일반형/매립형 주문 전에 확인해 주세요.
                  <br />
                  -실링팬 : 구매전 반드시 설치 관련 상담 및 사전답사 후 구매해
                  주세요. 주문완료 이후, 배송지 변경이 필요한 경우 재 주문하여
                  주시기 바랍니다.
                </div>
              </li>
              <li>
                에어컨 설치 시 기본 설치비는 포함되어 있으나, 별도로 추가 설치
                비용이 발생할 수 있습니다.
              </li>
              <li>
                ‘22년 4월 이후 설치되는 스탠드, 벽걸이 에어컨 및 냉난방기 전
                모델 설치 일반배관 재질은 알루미늄이며, 매립배관은 구리
                재질입니다.
              </li>
              <li>추가 설치 비용은 현장에서 납부 가능합니다.</li>
              <li>가정용 용도로만 설치 가능하며, 상업용 설치 불감함</li>
              <li>
                스마트 스위치의 경우 일반 설치 서비스를 지원하는 제품으로, 구매
                시 설치비가 포함되어 있지 않습니다. 설치 기사가 전기 시공을
                완료한 후 설치비 현장 결제가 필요합니다.
              </li>
              <li>
                패키지 상품 전체가 아니 단품 선택 구매 시, '택배 배송' 서비스만
                제공합니다.
              </li>
            </NoticeDotUlList>
          </InnerTabContent>
        )}
      </NoticeTabMiddleBox>
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  padding: 4.8rem 0;
`;
const NoticeTabTopBox = styled.div`
  margin-bottom: 2rem;
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 3.2rem;
  }
`;
const NoticeTabMiddleBox = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 3.2rem;
  }
`;
const TabTitle = styled.h2`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.25;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    font-size: 2rem;
  }
`;
const TabButtonArea = styled.div``;
const TabButtonBox = styled(TabButton)`
  position: relative;
  margin-right: 2.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.3;
  color: #666666;
  &:last-child {
    margin-right: 0;
    &:after {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    right: -1.2rem;
    margin-top: -0.5rem;
    width: 1px;
    height: 1rem;
    background-color: #dddddd;
  }
  &.active {
    font-weight: bold;
    color: #000000;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const InnerTabContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #333333;
`;
const NoticeDotUlList = styled(DotUlList)``;

//임시 data
const tabButtonData = [
  {
    title: "배송안내",
  },
  {
    title: "반품/교환/AS",
  },
  {
    title: "설치 안내",
  },
];

export default BridgeNotice;
