import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

// common
import SwiperNormal from "components/common/SwiperNormal";
import LinkButtonWhite from "components/common/LinkButtonWhite";

// pages/home/component
import HomePackageThumbnail from "pages/home/component/HomePackageThumbnail";

// images
import HomePackageImage01 from "assets/images/thumbs/img_home_package_01.jpg";
import HomePackageImage02 from "assets/images/thumbs/img_home_package_02.jpg";
import HomePackageImage03 from "assets/images/thumbs/img_home_package_03.jpg";
import HomePackageImage04 from "assets/images/thumbs/img_home_package_04.jpg";

function HomePackage() {
  return (
    <HomePackageContainer>
      <HomePackageSwiper perview={"auto"} loop={false}>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage01}
            toLink={"/"}
            title={"공기질 관리"}
            text={
              "결로 알림, 제습기 자동화, 환기 알림 등을 통해 결로 및 곰팡이를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 1"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage02}
            toLink={"/"}
            title={"알아서 밝혀주는 가이드 조명"}
            text={
              "전력량을 자동으로 모니터링하여 새는 에너지 비용을 관리를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 2"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage03}
            toLink={"/"}
            title={"온도/습도 관리"}
            text={
              "귀가 전 자동으로 집을 시원하게, 냉방 시 문을 여닫는 번거로움을 없애주는 패키지"
            }
            imageAlt={"에너지 패키지 상품 3"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            className={"none-link"}
            coming={true}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 4"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 5"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 6"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 7"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 8"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 9"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 10"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 11"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 12"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 13"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 14"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 15"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 16"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 17"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 18"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 19"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 20"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 21"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 22"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 23"}
          />
        </HomePackageSwiperSlide>
        <HomePackageSwiperSlide>
          <HomePackageThumbnail
            imageSrc={HomePackageImage04}
            toLink={"/"}
            title={"외출/귀가"}
            text={
              "인지가 쉽지 않은 소량의 가스도 감지하여, 감전 및 화재 사고를 방지를 위한 패키지"
            }
            imageAlt={"에너지 패키지 상품 24"}
          />
        </HomePackageSwiperSlide>
      </HomePackageSwiper>

      <HomePackageBottom>
        <HomeToPackageLink toLink={"/"}>전체 제품 보기</HomeToPackageLink>
      </HomePackageBottom>
    </HomePackageContainer>
  );
}

const HomePackageContainer = styled.div`
  max-width: 144rem;
  margin: 0 auto;
`;
const HomePackageSwiper = styled(SwiperNormal)`
  /* PC */
  @media screen and (min-width: 769px) {
    position: relative;
    & > .swiper-button-prev,
    & > .swiper-button-next {
      top: 14rem;
      margin-top: 0;
    }
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    & > .swiper-pagination {
      display: none;
    }
  }
`;
const HomePackageSwiperSlide = styled(SwiperSlide)`
  max-width: 14.2rem;
  margin-right: 1.2rem;
  &:last-child {
    margin-right: 0;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    max-width: 32.7rem;
    margin-right: 2.4rem;
    &:last-child {
      margin-right: 3rem;
    }
  }
`;

const HomePackageBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeToPackageLink = styled(LinkButtonWhite)`
  max-width: 13.2rem;
  margin-top: 1.6rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 4rem;
    height: 5rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: auto;
    max-width: initial;
    height: 3.2rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    font-size: 1.2rem;
  }
`;

export default HomePackage;
