import styled from "styled-components";

// common
import GuideTextIcon from "components/common/GuideTextIcon";

// layout
import CardFrame from "components/layout/CardFrame";

function BridgeOptions({
  labelData,
  title = "",
  subtitle = "",
  optionList = "",
  infoText = "",
}) {
  const labels = labelData.map((type, index) => (
    <Label key={index.toString()} id={`${index}`}>
      {type.theme}
    </Label>
  ));

  return (
    <BridgeOptionsContainer>
      <OptionsTopArea>
        {labelData !== "" && <TopLabels>{labels}</TopLabels>}
        {title !== "" && <TopTitle>{title}</TopTitle>}
        {subtitle !== "" && <TopSubtitle>{subtitle}</TopSubtitle>}
      </OptionsTopArea>
      <OptionsMiddleArea>
        <OptionsCardFrame aesthetic={"bgWhite"}>
          <MiddleTitle>구성 제품</MiddleTitle>
          <MiddleText>{optionList}</MiddleText>
          {infoText && <GuideTextIcon>{infoText}</GuideTextIcon>}
        </OptionsCardFrame>
      </OptionsMiddleArea>
    </BridgeOptionsContainer>
  );
}

const BridgeOptionsContainer = styled.div`
  margin-bottom: 2.8rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 8rem;
  }
`;
const Label = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: #ea1917;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 1rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    background-color: #dddddd;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;
const TopLabels = styled.div`
  margin-bottom: 0.4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.6rem;
  }
`;
const TopTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #000000;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 0.8rem;
    font-size: 2.8rem;
  }
`;
const TopSubtitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333333;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const MiddleTitle = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #666666;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;
const MiddleText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4;
  color: #0f0f0f;
  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
  }
`;
const OptionsTopArea = styled.div`
  margin-bottom: 2.8rem;
`;
const OptionsMiddleArea = styled.div``;
const OptionsCardFrame = styled(CardFrame)``;

export default BridgeOptions;
