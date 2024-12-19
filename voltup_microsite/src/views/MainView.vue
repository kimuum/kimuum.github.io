<template>
  <div class="wrapper home">
    <!-- Header -->
    <header-comp :headerTheme="headerTheme" ref="headerComp"></header-comp>
    <!-- // Header -->

    <!-- Main -->
    <main class="main">
      <!-- Main Banner -->
      <div class="banner-container">
        <div class="banner-area">
          <!-- swiper -->
          <swiper 
            class="banner"
            v-bind="swiperOptions"
          >
            <swiper-slide>
              <div class="swiper-content-container">
                <div class="swiper-content-area">
                  <div class="banner-image-box">
                    <img src="~Image/main_banner_01.png" class="usePc" alt="" />
                    <img src="~Image/m_img_banner_main.png" class="useMobile" alt="" />
                  </div>
                  <div class="swiper-content-box">
                    <div class="title-box">
                      <span class="strong">LG유플러스</span>의 전기차 충전 서비스,<br />
                      든든한 충전&nbsp;<span class="strong">볼트업</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="swiper-content-container">
                <div class="swiper-content-area">
                  <div class="banner-image-box">
                    <img src="~Image/main_banner_02.png" class="usePc" alt="" />
                    <img src="~Image/m_img_banner_life.png" ss="useMobile" alt="" />
                  </div>
                  <div class="swiper-content-box">
                    <div class="title-box">
                      볼트업으로<br />
                      <span class="strong">스마트한 충전 라이프</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="download-link-box">
              <a href="~Image/사업소개서.pdf" download class="download-link">
                <span>서비스 소개서 다운로드</span>
              </a>
            </div>
            <div class="swiper-custom-controller">
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
            </div>
          </swiper>

          <div class="button-box">
            <button type="button" class="btn-next-section" @click="goDown"></button>
          </div>
        </div>
      </div>
      <div class="info-container" ref="nextCont">
        <div class="info-area">
          <div class="section-title-box">
            <div class="title-box">
              유플러스만의&nbsp;<span class="strong">든든한 품질</span>
            </div>
            <p class="desc">
              안전하고 편리한 볼트업 서비스를 만나보세요.
            </p>
          </div>
          <div class="info-block-container">
            <div class="info-block-list">
              <div class="info-block-item">
                <div class="image-box">
                  <img src="~Image/ic_main_1.svg" alt="유플러스가 책임지는 전기차 충전 인프라">
                </div>
                <div class="text-box">
                  <div class="title-box">
                    <span>유플러스가 책임지는 전기차 충전 인프라</span>
                  </div>
                  <p class="desc">유플러스가 설치하고 지속 유지보수합니다.</p>
                </div>
              </div>
              <div class="info-block-item">
                <div class="image-box">
                  <img src="~Image/ic_main_2.svg" alt="통신 사업자만의&nbsp;<br/>운영 노하우">
                </div>
                <div class="text-box">
                  <div class="title-box">
                    <span>통신 사업자만의&nbsp;<br/>운영 노하우</span>
                  </div>
                  <p class="desc">24시간 고객지원으로&nbsp;<br/>빠르게 점검하고 대응합니다.</p>
                </div>
              </div>
              <div class="info-block-item">
                <div class="image-box">
                  <img src="~Image/ic_main_3.svg" alt="Made by&nbsp;<br/>LG유플러스">
                </div>
                <div class="text-box">
                  <div class="title-box">
                    <span>Made by&nbsp;<br/>LG유플러스</span>
                  </div>
                  <p class="desc">개발부터 안전관리까지, 철저한 품질 기준으로 관리합니다.</p>
                </div>
              </div>
              <div class="info-block-item">
                <div class="image-box">
                  <img src="~Image/ic_main_4.svg" alt="통신오류 걱정이 없는 충전기">
                </div>
                <div class="text-box">
                  <div class="title-box">
                    <span>통신오류 걱정이 없는 충전기</span>
                  </div>
                  <p class="desc">충전기의 상태를 언제 어디서나 간편하게 알 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="advantages-container">
        <div class="advantages-area">
          <div class="section-title-box">
            <div class="title-box">
              <span class="strong">UP</span>되는
              <span class="strong">든든한</span>서비스
            </div>
            <p class="desc">
              <span>차별화된 서비스로 편리하게,
                합리적인 요금으로 기분 좋은 충전 생활을 만나보세요.</span>
            </p>
          </div>
          <div class="advantages-block-container">
            <div class="advantages-block-list">
              <div class="advantages-block-item">
                <div class="img-box">
                  <img src="~Image/advantages_block_01.png" alt="" />
                </div>
                <div class="text-box">
                  <span class="title">편리한&nbsp;<span class="strong">앱 서비스</span></span>
                  <span class="desc">
                    회원카드가 없어도 걱정 없이 충전,<br/>
                    예약 충전으로 원하는 시간에 충전
                  </span>
                </div>
              </div>
              <div class="advantages-block-item">
                <div class="img-box">
                  <img src="~Image/advantages_block_02.png" alt="" />
                </div>
                <div class="text-box">
                  <span class="title">합리적인&nbsp;<span class="strong">요금</span></span>
                  <span class="desc">
                    다양한 제휴 할인으로 알뜰하게 충전,&nbsp;<br>
                    언제나 계산 가능한 단순한 요금제
                  </span>
                </div>
              </div>
              <div class="advantages-block-item">
                <div class="img-box">
                  <img src="~Image/advantages_block_03.png" alt="" />
                </div>
                <div class="text-box">
                  <span class="title">기분 좋은&nbsp;<span class="strong">매너 충전</span></span>
                  <span class="desc">
                    충전기 사용 매너를 지키면 포인트가 UP&nbsp;<br>
                    비대면 출차 요청으로 분쟁은 Down
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Button -->
      <floating-button></floating-button>

    </main>
    <!-- // Main -->

    <!-- Footer -->
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import FloatingButton from '@/components/FloatingButton.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Navigation]);

export default {
  name: 'MainView',
  components: {
    HeaderComp,
    FooterComp,
    FloatingButton,
    Swiper,
    SwiperSlide,    
  },
  data() {
    return {
      headerTheme: false,
      nextContHeight: 0,
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },                    
      }  
    };
  },
  mounted () {
    window.scrollTo(0,0)
  },
  methods: {
    goDown() {
      this.nextContHeight = this.$refs.nextCont.offsetTop - this.$refs.headerComp.$el.clientHeight;
      window.scrollTo({
        top: this.nextContHeight,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="scss" scoped>

.home {
  .header {
    .header-area {
      .default {
        display: none;
      }
      .main-logo {
        display: block;
      }
    }
  }
  .banner-container {
    .banner-area {
      position: relative;
      .btn-next-section {
        position: absolute;
        z-index: 999;
        bottom: 6rem;
        left: 50%;
        width: 3rem;
        height: 3rem;
        background: url("~Image/ic_arrow_down_30.svg") no-repeat 100% center;
        transform: translateX(-50%);
      }
    }
    .swiper {
      .download-link-box {
        z-index: 22;
        @include flex(row, flex-start, flex-start);
        position: absolute;
        left: 50%;
        bottom: 16.3rem;
        width: 137.1rem;
        transform: translateX(-50%);
        .download-link {
          @include flex(row, center, center);
          height: 6rem;
          margin-top: 3rem;
          padding: 0 3.2rem;
          border: 2px solid $white;
          border-radius: 2rem;
          background-color: rgba($white, 0.1);
          transition: 0.15s border;
          span {
            @include font(1.6rem, 700, $white, 2.3rem);
          }
          @media (hover: hover) {
            &:hover {
              border-color: #08090e;
              span {
                color: #08090E;
              }
            }
          }
        }
      }
      .swiper-custom-controller {
        z-index: 22;
        @include flex(row, flex-start, center);
        position: absolute;
        left: 50%;
        bottom: 11.7rem;
        width: 137.1rem;
        transform: translateX(-50%);
        .swiper-button-prev,
        .swiper-button-next {
          position: static;
          top: auto;
          width: 1.4rem;
          height: 1.4rem;
          margin: 0;
          &::after {
            display: none;
          }
        }
        .swiper-button-prev {
          left: 0;
          background: url("~Image/banner_arrow_left.svg") no-repeat 100% center;
        }
        .swiper-button-next {
          right: 0;
          background: url("~Image/banner_arrow_right.svg") no-repeat 100% center;
        }
        .swiper-pagination {
          @include flex(row, flex-start, center);
          position: static;
          width: auto;
          margin: 0 1.6rem;
          /deep/ {
            .swiper-pagination-bullet {
              position: relative;
              width: 2.6rem;
              height: 2.6rem;
              background-color: rgba($white, 0);
              opacity: 1;
              &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0.8rem;
                height: 0.8rem;
                border: 1px solid $white;
                border-radius: 50%;
                transform: translate(-50%, -50%);
              }
            }
            .swiper-pagination-bullet-active {
              background-color: rgba($white, 0.3);
              &::after {
                background-color: $white;
              }
            }
          }
        }
      }
    }
    .swiper-wrapper {
      z-index: 21;
      position: relative;
    }
    .swiper-slide {
      @include flex(row, flex-start, flex-end);
      width: 100%;
    }
    .swiper-content-container {
      width: 100%;
      height: 100vh;
      margin: 0 auto;
      .swiper-content-area {
        height: 100%; 
      }
      .banner-image-box {
        position: relative;
        height: 100%; 
        img {
          display: block;
          width: auto;
          height: 100%;
        }
      }
      @media screen and (min-aspect-ratio: 2/1) {
        .banner-image-box {
          img {
            display: block;
            top: 50%;
            width: 100%;
            height: auto;
          }
        }
      }
      .swiper-content-box {
        position: absolute;
        bottom: 25.2rem;
        left: 50%;
        width: 137.1rem;
        transform: translateX(-50%);
        .title-box {
          @include font(4rem, 400, $white, 5.8rem);
          text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
          .strong {
            font-weight: 700;
          }
        }
      }
    }
  }
  .info-container {
    .info-area {
      @include flex(column, center, center);
      width: 137.1rem;
      margin: 0 auto;
      padding: 12rem 0 18rem;
    }
    .info-block-container {
      margin-top: 6rem;
      .info-block-list {
        // @include flex(row, space-between, flex-start);
        display: flex;
        margin: 0 -1rem;
      }
      .info-block-item {
        // width: 32.8rem;
        @include flex(column, flex-start, flex-start);
        width: calc(25% - 2rem);
        // height: 47rem;
        margin: 0 1rem;
        padding: 10rem 3.6rem 6rem;
        border-radius: 2rem;
        background-color: #2D2B44;
        // &:not(:first-of-type) {
        //   margin-left: 2rem;
        // }
        .image-box {
          img {
            display: block;
            width: 100%;
            max-width: 11.8rem;
            height: auto;
          }
        }
        .text-box {
          margin-top: 3.4rem;
          .title-box {
            @include font(2.8rem, 700, $white, 4rem);
            word-break: keep-all;
          }
          .desc {
            margin-top: 1.6rem;
            @include font(2rem, 500, #CAC9D9, 2.9rem);
            word-break: keep-all;
          }
        }
      }
    }
  }
  .advantages-container {
    padding: 12rem 0;
    background-color: #08090E;
    .section-title-box {
      .title-box,
      .desc {
        color: $white;
      }
      .desc {
        white-space: pre-line;
      }
    }
    .advantages-block-container {
      width: 137.1rem;
      // margin-top: 6rem;
      margin: 6rem auto 0;
      .advantages-block-list {
        @include flex(row, space-between, center);
        margin: 0 -1rem;
      }
      .advantages-block-item {
        @include flex(column, flex-end, flex-start);
        position: relative;
        overflow: hidden;
        // width: 44.3rem;
        width: calc(33.333% - 2rem);
        // height: 52rem;
        margin: 0 1rem;
        border-radius: 2rem;
        @media (hover: hover) {
          &:hover {
            .img-box {
              transform: scale(1.05);
            }
          }
        }
        &::before {
          content: '';
          z-index: 2;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 56.06%, rgba(0, 0, 0, 0.7) 84.42%);
        }
        .img-box {
          transition: transform 0.3s ease;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
        .text-box {
          @include flex(column, flex-start, flex-start);
          position: absolute;
          bottom: 2.6rem;
          left: 2.6rem;
          z-index: 3;
          .title {
            @include font(2.8rem, 500, $white, 4rem);
            .strong {
              font-weight: 700;
            }
          }
          .desc {
            margin-top: 1.2rem;
            @include font(2rem, 400, $white, 2.9rem);
            word-break: keep-all;
          }
        }
        // &:not(:first-of-type) {
        //   margin-left: 2rem;
        // }
      }
    }
  }
}

// 태블릿
@media #{$tablet} {
  .home {
    .banner-container {
      .swiper-content-container {
        .swiper-content-box {
          width: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
      .swiper {
        .download-link-box {
          width: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .swiper-custom-controller {
          width: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
    }

    .info-container {
      .info-area {
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        .info-block-container {
          .info-block-list {
            margin: 0;
          }
          .info-block-item {
            width: calc(25% - 2rem);
            margin: 0;
            padding: 5rem 3.6rem 3rem;
            &:not(:first-of-type) {
              margin-left: 2rem;
            }
            .text-box {
              .title-box {}
            }
          }
        }
      }
    }
    
    .advantages-container {
      .advantages-block-container {    
        width: 100%;
        padding-left:2rem;
        padding-right:2rem;
      }
    }
  }
}

// 모바일
@media #{$mobile} {
  .home {
    .banner-container {
      .banner-area {
        .btn-next-section {
          display: none;
        }
      }
      .swiper-content-container {
        height: auto;
        max-height: 100vh;
        .banner-image-box {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .swiper {
        .download-link-box {
          bottom: 5.4rem;
          .download-link {
            height: 3.2rem;
            margin: 0;
            padding: 0 1.2rem;
            border: 1px solid $white;
            border-radius: 1rem;
            span {
              font-size: 1.1rem;
              line-height: 1.6rem;
            }
          }
        }
        .swiper-custom-controller {
          justify-content: center;
          bottom: 1.6rem;
          .swiper-pagination:deep() {
            margin: 0;
            .swiper-pagination-bullet {
              width: 2rem;
              height: 2rem;
              margin: 0;
              &::after {
                width: 0.6rem;
                height: 0.6rem;
              }
            }
          }
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      }
      .swiper-content-container {
        .banner-image-box {
          img {
            // position: absolute;
            // top: 0;
            // left: 70%;
            // transform: translateX(-70%);
          }
        }
        .swiper-content-box {
          bottom: 10.2rem;
          .title-box {
            font-size: 2rem;
            line-height: 2.9rem;
          }
        }
      }
    }
    .info-container {
      .info-block-container {
        .info-block-list {
          @include flex(column, flex-start, center);
        }
      }
      .info-area {
        padding: 6rem 0;
        .info-block-container {
          width: 100%;
          margin-top: 3rem;
          padding: 0 6rem;
          .info-area {
            .info-block-list {
              margin: 0;
            }
          }
          .info-block-item {
            width: 100%;
            margin: 0;
            padding: 3.2rem 2rem;
            &:not(:first-of-type) {
              margin: 1rem 0 0 0;
            }
            .image-box {
              width: 100%;
              img {
                max-width: 8rem;
              }
            }
            .text-box {
              width: 100%;
              margin-top: 2rem;
              .title-box {
                font-size: 1.8rem;
                line-height: 2.6rem;
              }
              .desc {
                margin-top: 1rem;
                font-size: 1.4rem;
              }
              .title-box,
              .desc {
                br {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .advantages-container {
      padding: 6rem 0;
      .advantages-block-container {
        .advantages-block-item {
          .text-box {
            .title {
              font-size: 2rem;
              line-height: 2.9rem;
            }
            .desc {
              margin-top: 1rem;
              font-size: 1.4rem;
              line-height: 2rem;
            }
          }
        }
      }
    }
  }
}

@media #{$portrait} {
  .home {
    .advantages-container {
      .section-title-box {
        .desc {
          @include flex(column, center, center);
          br {
            display: none;
          }
        }
      }
      .advantages-block-container {
        margin: 3rem auto 0;
        .advantages-block-list {
          @include flex(column, flex-start, center);
          margin: 0;
        }
        .advantages-block-item {
          width: 100%;
          margin: 0;
          border-radius: 1.2rem;
          &:not(:first-of-type) {
            margin-top: 1rem;
          }
          &::before {
            z-index: 1;
          }
          .img-box {
            position: relative;
            width: 100%;
            min-height: 32rem;
            img {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
            }
          }
          .text-box {
            left: 2rem;
            bottom: 2rem;
          }
        }
      }
    }
  }
}
</style>