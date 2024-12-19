import { Link } from "react-router-dom";
import styled from "styled-components";

// common
import Checkbox from "components/common/Checkbox";
import DropDown from "components/common/DropDown";
import Quantity from "components/common/Quantity";
import ImageBox from "components/common/ImageBox";
import GuideBgTextIcon from "components/common/GuideBgTextIcon";
import DotUlList from "components/common/DotUlList";
import TooltipDiscount from "pages/bridge/component/TooltipDiscount";

// layout
import CardFrame from "components/layout/CardFrame";

function BridgeList({ title = "", installed = false }) {
  return (
    <BridgeListContainer>
      <BridgeListTopArea>
        {title !== "" && <ListTopTitle>{title}</ListTopTitle>}
        <TopCheckBox>
          <AllCheckbox id="All" value="전체 선택" />
          <TopCheckCount>6</TopCheckCount>
        </TopCheckBox>
      </BridgeListTopArea>
      <BridgeListMiddleArea>
        <UsageCardFrame>
          <UsageCheckbox
            id="check-00"
            value="설치 서비스 이용"
            checked={installed}
          />

          <GuideInfoList>
            <li>
              패키지 전체 구매 시에만 설치 서비스를 이용할 수 있으며, 단품으로
              구매 시 '택배배송' 서비스만 제공합니다.
            </li>
            <li>
              단, 일반 설치 제품을 단품으로 구매한 경우, 기사님께서 직접 배송 및
              설치를 지원합니다.
            </li>
          </GuideInfoList>
        </UsageCardFrame>

        {/* Sold out 상품 상태 , disabled={true}*/}
        {/* LG ThinQ ON */}
        <SoldOutCardFrame>
          <OptionCheckbox id="card-01" disabled={true} />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_voicehub.png")}
                alt="LG ThinQ ON"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>{!installed && <span>택배배송</span>}</ItemLabel>
              <ItemTitle to={"/"}>LG ThinQ ON</ItemTitle>
              <ItemModal>KQ65LSB1AFXKDA</ItemModal>
              <ItemNoticeInfo>설치비 포함가격</ItemNoticeInfo>

              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">160,000</span>원
                  </AccountOriginal>
                  {/* sold out 표시 라벨 */}
                  <SoldOutLabelBox>
                    <span className="sold-out">일시품절</span>
                  </SoldOutLabelBox>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
          <OptionBottomArea>
            패키지에 포함된 제품들은 LG ThinQ ON을 구매해야 정상 작동됩니다.
          </OptionBottomArea>
        </SoldOutCardFrame>
        {/* 헤이홈 전동커튼 */}
        <OptionCardFrame>
          <OptionCheckbox id="card-06" />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_curtain.png")}
                alt="헤이홈 전동커튼"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>
                <span className="label-affiliate">파트너사</span>
                {!installed && <span>일반설치</span>}
              </ItemLabel>
              <ItemTitle to={"/"}>헤이홈 전동커튼</ItemTitle>
              <ItemModal>KQ65LSB1AFXKDA</ItemModal>
              <ItemNoticeInfo>설치비 10,000원 현장 결제 필요</ItemNoticeInfo>
              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">
                      <strong>160,000</strong>원
                    </span>
                  </AccountOriginal>
                  <AccountDiscount>
                    <span className="label-discount">
                      최대 혜택가
                      <TooltipDiscount id="tooltip-01" />
                    </span>

                    <span>
                      <strong className="price">130,000</strong>원
                    </span>
                  </AccountDiscount>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
          <OptionMiddleArea>
            {/* 
            [옵션 카테고리명]
            - 스마트 버튼 : 버튼 개수 선택
            - 스마트전동커튼 : 커튼 길이 선택
            - 스마트 스위치 : 버튼 개수 선택
            - 헤이홈 홈카메라 : 카메라 종류 선택
            */}
            <DropDown
              title="-"
              listData={itemOptions1}
              label={"커튼 길이 선택"}
            />
            <OptionRequiredBox>
              ※기사님께서 직접 배송 및 설치를 지원하는 제품입니다.
            </OptionRequiredBox>
          </OptionMiddleArea>
        </OptionCardFrame>

        {/* Sold out 상품 상태 , disabled={true}*/}
        {/* 스마트 스위치 */}
        <SoldOutCardFrame>
          <OptionCheckbox id="card-03" disabled={true} />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_switch.png")}
                alt="스마트 스위치"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>{!installed && <span>일반설치</span>}</ItemLabel>
              <ItemTitle to={"/"}>스마트 스위치</ItemTitle>
              <ItemModal>LSS-LD033-AW</ItemModal>
              <ItemNoticeInfo>설치비 10,000원 현장 결제 필요</ItemNoticeInfo>

              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">
                      <strong>160,000</strong>원
                    </span>
                  </AccountOriginal>
                  <AccountDiscount>
                    <span className="label-discount">
                      최대 혜택가
                      <TooltipDiscount id="tooltip-02" />
                    </span>
                    <span>
                      <strong className="price">130,000</strong>원
                    </span>
                  </AccountDiscount>
                  {/* sold out 표시 라벨 */}
                  <SoldOutLabelBox>
                    <span className="sold-out">일시품절</span>
                  </SoldOutLabelBox>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
          <OptionMiddleArea>
            {/* 
            [옵션 카테고리명]
            - 스마트 버튼 : 버튼 개수 선택
            - 스마트전동커튼 : 커튼 길이 선택
            - 스마트 스위치 : 버튼 개수 선택
            - 헤이홈 홈카메라 : 카메라 종류 선택
            */}
            <DropDown
              title="-"
              listData={itemOptions2}
              label={"버튼 개수 선택"}
            />
            <OptionRequiredBox>
              ※기사님께서 직접 배송 및 설치를 지원하는 제품입니다.
            </OptionRequiredBox>
          </OptionMiddleArea>
        </SoldOutCardFrame>
        {/* 스마트 버튼 */}
        <OptionCardFrame>
          <OptionCheckbox id="card-04" />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_button_03.png")}
                alt="스마트 버튼"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>{!installed && <span>일반설치</span>}</ItemLabel>
              <ItemTitle to={"/"}>스마트 버튼</ItemTitle>
              <ItemModal>LSS-LD055-BW</ItemModal>
              <ItemNoticeInfo>설치비 포함 가격</ItemNoticeInfo>

              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">
                      <strong>160,000</strong>원
                    </span>
                  </AccountOriginal>
                  <AccountDiscount>
                    <span className="label-discount">
                      최대 혜택가
                      <TooltipDiscount id="tooltip-03" />
                    </span>
                    <span>
                      <strong className="price">130,000</strong>원
                    </span>
                  </AccountDiscount>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
          <OptionMiddleArea>
            {/* 
            [옵션 카테고리명]
            - 스마트 버튼 : 버튼 개수 선택
            - 스마트전동커튼 : 커튼 길이 선택
            - 스마트 스위치 : 버튼 개수 선택
            - 헤이홈 홈카메라 : 카메라 종류 선택
            */}
            <DropDown
              title="-"
              listData={itemOptions2}
              label={"버튼 개수 선택"}
            />
          </OptionMiddleArea>
        </OptionCardFrame>
        {/* 헤이홈 전구 */}
        <OptionCardFrame>
          <OptionCheckbox id="card-05" />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_bulb_rbg.png")}
                alt="헤이홈 전구"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>
                <span className="label-affiliate">파트너사</span>
                {!installed && <span>택배배송</span>}
              </ItemLabel>
              <ItemTitle to={"/"}>헤이홈 전구</ItemTitle>
              <ItemModal>LBW-WD020-WW</ItemModal>
              <ItemNoticeInfo>설치비 포함가격</ItemNoticeInfo>
              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">
                      <strong>160,000</strong>원
                    </span>
                  </AccountOriginal>
                  <AccountDiscount>
                    <span className="label-discount">
                      최대 혜택가
                      <TooltipDiscount id="tooltip-04" />
                    </span>
                    <span>
                      <strong className="price">130,000</strong>원
                    </span>
                  </AccountDiscount>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
        </OptionCardFrame>
        {/* 온/습도 센서 */}
        <OptionCardFrame>
          <OptionCheckbox id="card-02" />
          <OptionTopArea>
            <TopLeftArea to={"/"}>
              <ImageBox
                src={require("assets/images/bridge/brige_product_temperature.png")}
                alt="온/습도 센서"
              />
            </TopLeftArea>
            <TopRightArea>
              <ItemLabel>{!installed && <span>택배배송</span>}</ItemLabel>
              <ItemTitle to={"/"}>온/습도 센서</ItemTitle>
              <ItemModal>LTS-LB043-DC</ItemModal>
              <ItemNoticeInfo>설치비 포함가격</ItemNoticeInfo>
              <ItemFlexBox>
                <ItemAccount>
                  <AccountOriginal>
                    <span className="label-price">판매가</span>
                    <span className="percent">20%</span>
                    <span className="price">
                      <strong>160,000</strong>원
                    </span>
                  </AccountOriginal>
                  <AccountDiscount>
                    <span className="label-discount">
                      최대 혜택가
                      <TooltipDiscount id="tooltip-05" />
                    </span>
                    <span>
                      <strong className="price">130,000</strong>원
                    </span>
                  </AccountDiscount>
                </ItemAccount>
                <ItemQuantity />
              </ItemFlexBox>
            </TopRightArea>
          </OptionTopArea>
        </OptionCardFrame>
      </BridgeListMiddleArea>

      <BuyTogetherList>
        <BridgeListTopArea>
          <ListTopTitle>함께 쓰기 좋은 제품</ListTopTitle>
        </BridgeListTopArea>
        <BridgeListMiddleArea>
          {/* 최대 1개 상품 노출 */}
          <OptionCardFrame>
            <OptionCheckbox id="card-07" />
            <OptionTopArea>
              <TopLeftArea to={"/"}>
                <ImageBox
                  src={require("assets/images/bridge/brige_product_aircleaner.png")}
                  alt="LG 퓨리케어 오브제컬렉션 360˚ 공기청정기 UV살균 (G 필터) ·114㎡· 2등급"
                />
              </TopLeftArea>
              <TopRightArea>
                <ItemTitle to={"/"}>
                  LG 퓨리케어 오브제컬렉션 360˚ <br />
                  공기청정기 UV살균 (G 필터)
                  <span className="sub-info-text">· 114㎡ · 2등급</span>
                </ItemTitle>
                <ItemModal>AS354NS3A</ItemModal>

                <ItemFlexBox>
                  <ItemAccount>
                    <AccountOriginal>
                      <span className="label-price">판매가</span>
                      <span className="percent">9%</span>
                      <span className="price">
                        <strong>1,990,000</strong>원
                      </span>
                    </AccountOriginal>
                    <AccountDiscount>
                      <span className="label-discount">
                        최대 혜택가
                        <TooltipDiscount id="tooltip-06" />
                      </span>
                      <span>
                        <strong className="price">130,000</strong>원
                      </span>
                    </AccountDiscount>
                  </ItemAccount>
                  <ItemQuantity />
                </ItemFlexBox>
              </TopRightArea>
            </OptionTopArea>
          </OptionCardFrame>
        </BridgeListMiddleArea>
      </BuyTogetherList>
    </BridgeListContainer>
  );
}

const ListTopTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;
const TopCheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`;
const TopCheckCount = styled.span`
  display: block;
  margin-left: 0.3rem;
  line-height: 1.1;
  color: #ea1917;
  &:before {
    content: "(";
    color: #0f0f0f;
  }
  &:after {
    content: ")";
    color: #0f0f0f;
  }
`;
const AllCheckbox = styled(Checkbox)`
  .label-value {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.5;
    color: #0f0f0f;
  }
`;

const UsageCardFrame = styled(CardFrame)`
  border: none;
  padding: 2rem 1.6rem;
  background-color: #f6f6f6;

  /* PC */
  @media screen and (min-width: 769px) {
    padding: 2.8rem 2rem;
  }
`;
const UsageCheckbox = styled(Checkbox)`
  .label-value {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4;
    color: #0f0f0f;
  }
  & > input {
    &:disabled {
      & + label {
        & > .label-value {
          color: #0f0f0f !important;
        }
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    .label-value {
      font-size: 1.6rem;
    }
  }
`;

const GuideInfoList = styled(DotUlList)`
  margin-top: 1.6rem;
  & > li {
    font-size: 1.2rem;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > li {
      font-size: 1.2rem;
    }
  }
`;
const OptionCardFrame = styled(CardFrame)`
  position: relative;
`;
const OptionCheckbox = styled(Checkbox)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 2.4rem 1.6rem;
  line-height: 0;
  /* PC */
  @media screen and (min-width: 769px) {
    padding: 2.4rem 2rem;
  }
`;
const OptionTopArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    padding-left: 2.4rem;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
const OptionMiddleArea = styled.div`
  margin-top: 1.8rem;
  & > div {
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 2rem;
    padding-left: 12.8rem;
    & > div {
      margin-bottom: 1.2rem;
    }
  }
  @media screen and (min-width: 980px) {
    padding-left: 16.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    & > div {
      margin-bottom: 0.8rem;
    }
  }
`;
const OptionBottomArea = styled(GuideBgTextIcon)`
  margin-top: 1.6rem;
`;
const OptionRequiredBox = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4;
  color: #666666;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 1.6rem;
    font-size: 1.4rem;
  }
`;
const TopLeftArea = styled(Link)`
  flex: 1;
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 12rem;
    margin-right: 2.4rem;
  }
  /* Mobile */
  @media screen and (max-width: 980px) {
    max-width: 9rem;
    margin-right: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 3.2rem;
  }
`;
const TopRightArea = styled.div`
  flex: 1;
  /* PC */
  @media screen and (min-width: 769px) {
    flex: 1;
    width: calc(100% - 12rem);
  }
`;
const ItemFlexBox = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const ItemTitle = styled(Link)`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
  color: #0f0f0f;
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  & > .sub-info-text {
    font-weight: 400;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 0.2rem 0;
  }
`;
const ItemModal = styled.div`
  margin-bottom: 1.4rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #666666;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 1.6rem;
    font-size: 1.2rem;
  }
`;
const ItemLabel = styled.div`
  display: flex;
  align-items: center;
  min-height: 1.8rem;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3;
  color: #666666;
  & > span {
    display: flex;
    align-items: center;
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 1rem;
      margin: 0 0.8rem;
      background-color: #dddddd;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
    &.label-affiliate {
      color: #0f0f0f;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.2rem;
  }
`;
const ItemNoticeInfo = styled.div`
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.6rem;
    font-size: 1.4rem;
  }
`;

const ItemQuantity = styled(Quantity)`
  margin-top: 1.6rem;
`;
const ItemAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const AccountOriginal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #000000;
  & > .label-price,
  & > .label-discount {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
    color: #0f0f0f;
  }
  & > .price {
    font-weight: 700;
  }
  & > .percent {
    margin-right: 0.5rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #ea1917;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.8rem;
    & > .label-price,
    & > .label-discount {
      margin-right: 1rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
    & > .percent {
      font-size: 1.8rem;
    }
  }
`;
const AccountDiscount = styled(AccountOriginal)`
  font-size: 1.3rem;
  /* PC */
  @media screen and (min-width: 769px) {
    position: relative;
    font-size: 1.6rem;
  }
`;

const BridgeListContainer = styled.div`
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 6rem;
  }
`;
const BridgeListTopArea = styled.div``;
const BridgeListMiddleArea = styled.div`
  margin-bottom: 3.2rem;
  & > div {
    margin: 1.2rem 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 6rem;
    & > div {
      margin: 2rem 0;
    }
  }
`;

const BuyTogetherList = styled.div`
  padding: 1.6rem;
  background-color: #f6f6f6;
  border-radius: 8px;
  ${BridgeListMiddleArea} {
    margin-bottom: 0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    border-radius: 16px;
  }
`;

// Sold out
const SoldOutLabelBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.6rem;
  & > .sold-out {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: #666666;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    color: #ffffff;
  }
`;
const SoldOutCardFrame = styled(OptionCardFrame)`
  ${ItemNoticeInfo} {
    opacity: 0.5;
  }
  ${OptionMiddleArea},
  ${ItemQuantity} {
    opacity: 0.5;
    pointer-events: none;
  }
`;

// 임시 data
const itemOptions1 = [
  {
    title: "130~150cm",
  },
  {
    title: "150~180cm",
  },
  {
    title: "180~210cm",
  },
];
const itemOptions2 = [
  {
    title: "2구",
  },
];

export default BridgeList;
