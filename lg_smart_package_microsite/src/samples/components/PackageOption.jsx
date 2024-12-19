import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// common
import ImageBox from "components/common/ImageBox";

// data
import { itemOptions } from "samples/data/data_package_item";

function PackageOption({ className = "", number = "", caution = "" }) {
  return (
    <PackageOptionContainer className={className}>
      <div className="option-top">
        구성옵션 {number !== "" && <span className="number">{number}</span>}
      </div>
      <Swiper
        centeredSlides={false}
        spaceBetween={12}
        slidesPerView={"auto"}
        loop={false}
      >
        {itemOptions.map((item, index) => (
          <SwiperSlide key={index.toString()} id={`${index}`}>
            <div className="image-label">{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {caution !== "" && <div className="caution-container">{caution}</div>}
    </PackageOptionContainer>
  );
}

const PackageOptionContainer = styled.div`
  // 슬라이드
  .swiper {
    margin: 0 -1.6rem;
    padding: 0 1.6rem;
  }
  .swiper-slide {
    width: auto;
  }
  //구성 타이틀
  .option-top {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: #0f0f0f;
    .number {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1;
      color: #e5151d;
      &:before,
      &:after {
        color: #0f0f0f;
      }
      &:before {
        content: "(";
      }
      &:after {
        content: ")";
      }
    }
  }
  //구성 이미지
  .image-container {
    width: 8rem;
    padding: 1rem;
    border: 1px solid #eeeeee;
    border-radius: 1rem;
  }
  .image-label {
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0f0f0f;
    text-align: center;
    word-break: keep-all;
  }
  // 주의사항 문구
  .caution-container {
    position: relative;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-left: 1.5rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666666;
    border-top: 1px solid #eeeeee;
    &:before {
      content: "";
      position: absolute;
      top: 2.2rem;
      left: 0;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 1.2rem;
      background-color: #666666;
    }
  }
`;

export default PackageOption;
