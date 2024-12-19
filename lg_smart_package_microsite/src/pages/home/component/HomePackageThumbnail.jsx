import { Link } from "react-router-dom";
import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";

function HomePackageThumbnail({
  className,
  imageSrc,
  toLink,
  title,
  text,
  imageAlt,
  coming = false,
}) {
  return (
    <HomePackageContainer to={toLink} className={className}>
      {coming && <Dim>판매 예정</Dim>}
      <HomePackageTopArea>
        <HomePackageImageBox src={imageSrc} alt={imageAlt} />
      </HomePackageTopArea>
      <HomePackageTitle>{title}</HomePackageTitle>
      <HomePackageText>{text}</HomePackageText>
    </HomePackageContainer>
  );
}

const Dim = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
  color: #ea1917;
  text-align: center;
  box-sizing: border-box;
  /* PC */
  @media screen and (min-width: 769px) {
    padding-top: 14.4rem;
    font-size: 2.8rem;
    font-weight: 400;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    padding-top: 6rem;
  }
`;
const HomePackageTopArea = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.6rem;
  border-radius: 8px;
  /* PC */
  @media screen and (min-width: 769px) {
    border-radius: 13px;
  }
`;

const HomePackageContainer = styled(Link)`
  width: 100%;
  &.none-link {
    pointer-events: none;
  }
`;
const HomePackageImageBox = styled(ImageBox)`
  width: 100%;
`;
const HomePackageTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5;
  color: #0f0f0f;
  //말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  /* PC */
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    line-height: 1.3;
  }
`;
const HomePackageText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3;
  color: #333333;
  //말줄임
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  /* PC */
  @media screen and (min-width: 769px) {
    height: 5rem;
    -webkit-line-clamp: 2;
    font-size: 1.6rem;
    line-height: 1.5;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    height: 4.3rem;
    -webkit-line-clamp: 3;
  }
`;

export default HomePackageThumbnail;
