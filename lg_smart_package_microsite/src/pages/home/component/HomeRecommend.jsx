import styled from "styled-components";

// common
import HomeRecommendMore from "pages/home/component/HomeRecommendMore";
import HomeRecommendThumbnail from "pages/home/component/HomeRecommendThumbnail";

function HomeRecommend() {
  return (
    <HomeRecommendContainer>
      <HomeRecommendArea>
        <HomeRecommendBox>
          <HomeRecommendThumbnail
            toLink={"/"}
            bgSrc={require(`assets/images/home/img_home_recommend_01.jpg`)}
            btnText="추천받기"
            label="가족과 반려동물 모두 행복한 공간"
          >
            가족과 반려동물 모두 <br />
            행복한 공간
          </HomeRecommendThumbnail>
        </HomeRecommendBox>
        <HomeRecommendBox>
          <HomeRecommendThumbnail
            toLink={"/"}
            bgSrc={require(`assets/images/home/img_home_recommend_02.jpg`)}
            btnText="추천받기"
            label="나를 지켜주는 안전한 공간"
          >
            나를 지켜주는 <br />
            안전한 공간
          </HomeRecommendThumbnail>
        </HomeRecommendBox>
        <HomeRecommendBox>
          <HomeRecommendThumbnail
            toLink={"/"}
            bgSrc={require(`assets/images/home/img_home_recommend_03.jpg`)}
            btnText="추천받기"
            label="알아서 항상 쾌적한 공간"
          >
            알아서 항상 <br />
            쾌적한 공간
          </HomeRecommendThumbnail>
        </HomeRecommendBox>
        <HomeRecommendBox>
          <HomeRecommendThumbnail
            toLink={"/"}
            bgSrc={require(`assets/images/home/img_home_recommend_04.jpg`)}
            btnText="추천받기"
            label="집안일 없이 여가를 즐기는 공간"
          >
            집안일 없이 <br />
            여가를 즐기는 공간
          </HomeRecommendThumbnail>
        </HomeRecommendBox>
        <HomeRecommendBox>
          <HomeRecommendThumbnail
            toLink={"/"}
            bgSrc={require(`assets/images/home/img_home_recommend_05.jpg`)}
            btnText="추천받기"
            label="에너지 낭비 없는 효율적인 공간"
          >
            에너지 낭비 없는 <br />
            효율적인 공간
          </HomeRecommendThumbnail>
        </HomeRecommendBox>
        <HomeRecommendWithMoreBox>
          <HomeRecommendMore />
        </HomeRecommendWithMoreBox>
      </HomeRecommendArea>
    </HomeRecommendContainer>
  );
}

const HomeRecommendContainer = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
const HomeRecommendArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* PC */
  @media screen and (min-width: 769px) {
    margin: 0 -1rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-wrap: wrap;
    margin: -1rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: -0.6rem;
  }
`;
const HomeRecommendBox = styled.div`
  border-radius: 6px;
  box-shadow: 0px 3.395px 13.579px 0px rgba(0, 0, 0, 0.14);
  /* PC */
  @media screen and (min-width: 769px) {
    flex: 1;
    height: 36.9rem;
    margin: 0 1rem;
    transition: all 0.5s;
    &:nth-child(odd) {
      margin-top: 1.8rem;
    }
    &:hover {
      transform: translateY(-10px);
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    min-width: 36rem;
    margin: 1rem;
    &:nth-child(odd) {
      margin-top: 1rem;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: calc(50% - 1.2rem);
    height: 22.4rem;
    margin: 0.6rem;
    &:nth-child(even) {
      margin-right: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 320px) {
    width: calc(100% - 1.2rem);
  }
`;

const HomeRecommendWithMoreBox = styled(HomeRecommendBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    display: none;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
  }
`;

export default HomeRecommend;
