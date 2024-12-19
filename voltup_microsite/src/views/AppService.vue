<template>
  <div class="wrapper">
    <header-comp
      :currentPageName="currentPageName"
      :headerTheme="headerTheme"
      ref="headerComp"
    ></header-comp>

    <main class="main">
      <div class="content-container">
        <div class="content-area">
          <div class="main-title-container">
            <div class="title">
              <span>APP 서비스</span>
            </div>
            <div class="desc">
              <span>
                예약 충전, 비대면 출차 요청, 매너포인트 등<br />
                <span class="strong">볼트업의 특별한 서비스</span>를 소개합니다.
              </span>
            </div>
            <div class="section-button-box">
              <button type="button" class="btn-section" @click="sectionScroll('first')">
                <span>볼트업 서비스</span>
              </button>
              <button type="button" class="btn-section" @click="sectionScroll('second')">
                <span>APP 다운로드</span>
              </button>
            </div>
          </div>

          <!-- 1 -->
          <section class="section-container" ref="firstSection">
            <div class="app-service-container">
              <div class="app-service-area">
                <div class="app-service">
                  <swiper class="image-container" ref="imageSwiper" @swiper="onImageSwiper" v-bind="swiperOptions" @slideChange="onImageSlideChange">
                    <swiper-slide>
                      <img src="~Image/img_service_mockup_1.png" alt="1" />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="~Image/img_service_mockup_2.png" alt="2" />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="~Image/img_service_mockup_3.png" alt="3" />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="~Image/img_service_mockup_4.png" alt="4" />
                    </swiper-slide>
                  </swiper>

                  <swiper class="info-container" ref="infoSwiper"  @swiper="onInfoSwiper" v-bind="swiperOptions" @slideChange="onInfoSlideChange">
                    <swiper-slide class="info-list">
                      <div class="title-box">
                        <span>하나로 다 되는 앱 서비스</span>
                      </div>
                      <div class="desc-box">
                        <span>
                          볼트업 앱만 있으면, 회원카드가 없어도 충전할 수
                          있어요.<br />
                          충전소 검색부터 회원인증, 충전요금 결제까지 앱
                          서비스에서 모두 이용해보세요.
                        </span>
                      </div>
                      <div class="detail-box">
                        <span>
                          볼트업 앱 서비스는 볼트업 충전기에서만 사용
                          가능합니다.<br />
                          타 사업자의 충전기에서 충전 시에는 회원카드를
                          사용해주세요.
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="info-list">
                      <div class="title-box">
                        <span>편리한 예약 충전</span>
                      </div>
                      <div class="desc-box">
                        <span>
                          볼트업 회원이라면, 내가 원하는 시간에 충전할 수
                          있어요.<br />
                          일주일에 2번, 원하는 충전 시간대를 예약해서 편리하게
                          충전 해 보세요.
                        </span>
                      </div>
                      <div class="detail-box">
                        <span>
                          예약한 충전기를 사전 취소 없이 이용 하지 않으시는
                          경우, 한 달 동안 충전기 예약을 이용하실 수 없으니
                          유의해 주세요!
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="info-list">
                      <div class="title-box">
                        <span>매너 충전 생활</span>
                      </div>
                      <div class="desc-box">
                        <span>
                          충전이 완료된 고객님, 충전완료 알림을 받으셨나요?<br />
                          충전 후 30분 이내에 출차 하신 매너 왕 고객님들께 매너
                          포인트를 드립니다.
                        </span>
                      </div>
                      <div class="detail-box">
                        <span>
                          적립된 포인트는 My메뉴에서 조회 가능 하며, 사용기한 내
                          충전 요금 결제 시 사용 가능 합니다. (현금으로 환불은
                          불가하오니 참고하시기 바랍니다.)
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="info-list">
                      <div class="title-box">
                        <span>충전 패턴 알기</span>
                      </div>
                      <div class="desc-box">
                        <span>
                          지난 달에는 몇 번이나 충전했는지, 이 달에는 충전요금이
                          얼만큼 더 지출되었는지, 볼트업이 매달 분석해서
                          알려드립니다.<br />
                          지난 달과 비교 해 보며 스마트한 충전 습관을 만들어
                          보세요.
                        </span>
                      </div>
                      <div class="detail-box">
                        <span>
                          분석 리포트는 매달 1일에 확인 할 수 있습니다.
                        </span>
                      </div>
                    </swiper-slide>
                    <div class="swiper-custom-controller">
                      <div class="swiper-pagination"></div>
                    </div>
                  </swiper>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </section>

          <!-- 2 -->
          <section class="section-container" ref="secondSection">
            <div class="app-download-container">
              <div class="app-download-area">
                <div class="info-box">
                  <div class="top-container">
                    <div class="title-area">
                      <div class="title-box">
                        <span>차별화된 충전 서비스</span>
                      </div>
                      <div class="logo-box">
                        <img src="~Image/img_logo_service_voltup.png" alt="" />
                      </div>
                    </div>
                    <div class="desc-box">
                      <span>
                        내가 원하는 시간에 충전하고 싶으신가요?<br />
                        볼트업과 함께라면 전기차 충전 걱정은 끝!
                      </span>
                    </div>
                  </div>
                  <div class="bottom-container">
                    <div class="app-link-box">
                      <a href="#" class="app-link">
                        <span class="google-play white">
                          <img src="~Image/img_logo_google_w.svg" alt="" />
                        </span>
                        <span class="google-play black">
                          <img src="~Image/img_logo_google_b.svg" alt="" />
                        </span>
                      </a>
                      <a href="#" class="app-link">
                        <span class="app-store white">
                          <img src="~Image/img_logo_apple_w.svg" alt="" />
                        </span>
                        <span class="app-store black">
                          <img src="~Image/img_logo_apple_b.svg" alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <floating-button></floating-button>
    </main>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import FloatingButton from "@/components/FloatingButton.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Navigation]);

export default {
  name: "AppService",
  components: {
    HeaderComp,
    FooterComp,
    FloatingButton,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentPageName: "app",
      headerTheme: false,
      firstSecHeight: 0,
      secondSecHeight: 0,
      imageSwiper : null,
      infoSwiper : null,
      swiperOptions: {
        // loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          clickable: true,
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted () {
    window.scrollTo(0,0)
  },
  methods: {
    // 이미지 swiper 
    onImageSwiper(swiper) {
      this.imageSwiper = swiper;
    },

    onImageSlideChange(swiper) {
      this.infoSwiper.slideTo(swiper.activeIndex);
    },

    // text swiper
    onInfoSwiper(swiper) {
      this.infoSwiper = swiper;
    },

    onInfoSlideChange(swiper) {
      this.imageSwiper.slideTo(swiper.activeIndex);
    },

    sectionScroll(type) {
      if (type == 'first') {
        this.firstSecHeight = this.$refs.firstSection.offsetTop - this.$refs.headerComp.$el.clientHeight;
        window.scrollTo({
          top: this.firstSecHeight,
          behavior: 'smooth'
        });
      } else if (type == 'second') {
        this.secondSecHeight = this.$refs.secondSection.offsetTop - this.$refs.headerComp.$el.clientHeight;
        window.scrollTo({
          top: this.secondSecHeight,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.wrapper {
  background-color: #1e1d2a;
}
.main {
  .main-title-container {
    .desc {
      color: $white;
      word-break: keep-all;
    }
  }
}
.app-service-container {
  position: relative;
  width: 137.1rem;
  margin: 0 auto;
  padding: 14.2rem 0 15.8rem;
  .app-service {
    position: relative;
    display: flex;
    justify-content: center;
    .image-container {
      width: 26%;
      min-width: 26rem;
      margin: 0;
      .image-area {
        width: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .info-container {
      position: relative;
      flex: 1;
      max-width: 56rem;
      margin: 0 0 0 10.6rem;
      .info-list {
        @include flex(column, center, flex-start);
      }
      .title-box {
        @include font(3.2rem, 700, $white, 4.6rem);
      }
      .desc-box {
        margin-top: 1.2rem;
        @include font(2.2rem, 500, #cac9d9, 3.2rem);
        word-break: keep-all;
      }
      .detail-box {
        margin-top: 4rem;
        @include font(1.6rem, 700, #9393bc, 2.3rem);
        word-break: keep-all;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    transform: translateY(-50%);
    width: 9.6rem;
    height: 9.6rem;
    background: url("~Image/ic_arrow_right_96.svg") no-repeat 100% center;
    &::after {
      display: none;
    }
    &.swiper-button-disabled {
      opacity: 0.3;
    }
  }
  .swiper-button-prev {
    left: 0;
    transform: translateY(-50%) rotate(180deg);
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-custom-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    .swiper-pagination:deep() {
      position: static;
      text-align: left;
      .swiper-pagination-bullet {
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 0.6rem 0 0;
        background-color: rgba($white, 0.2);
        opacity: 1;
        &:not(:first-of-type) {
          margin: 0 0.6rem;
        }
      }
      .swiper-pagination-bullet-active {
        background-color: $point-pink;
      }
    }
  }
}
.app-download-container {
  height: 50vw;
  background: #000000 url("~Image/img_down_bg.png") no-repeat right bottom /
    100% auto;
  .app-download-area {
    height: 100%;
  }
  .info-box {
    @include flex(column, center, flex-start);
    width: 137.1rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 0 0 11.6rem;
  }
  .top-container {
    @include flex(column, flex-start, flex-start);
    .title-box {
      @include font(2.6rem, 500, $white, 3.8rem);
    }
    .logo-box {
      width: 36.7rem;
      height: auto;
      margin-top: 0.4rem;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .desc-box {
      margin-top: 2.4rem;
      @include font(2rem, 500, #cac9d9, 2.9rem);
    }
  }
  .bottom-container {
    margin-top: 6rem;
    .app-link-box {
      @include flex(row, flex-start, center);
      .app-link {
        @include flex(row, center, center);
        width: 21.2rem;
        height: 6rem;
        border: 2px solid #8c8b9a;
        border-radius: 2rem;
        transition: 0.15s all;
        background-color: #000;
        & + .app-link {
          margin-left: 2rem;
        }
        @media (hover: hover) {
          &:hover {
            border-color: $white;
            background-color: $white;
            .white {
              display: none;
            }
            .black {
              display: block;
            }
          }
        }
        .white {
          display: block;
        }
        .black {
          display: none;
        }
        .google-play {
          width: 16.6rem;
        }
        .app-store {
          width: 14.2rem;
        }
        .google-play,
        .app-store {
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}

// 태블릿
@media #{$tablet} {
  .app-service-container {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    .app-service {
      .info-container {
        flex: unset;
        width: calc(100% - 26rem - 5.3rem - 9.6rem - 9.6rem);
        margin-left: 5.3rem;
      }
    }
  }

  .app-download-container {
    .info-box {
      width: 100%;
      padding-right: 2rem;
    }
  }
}

// 모바일
@media #{$mobile} {
  .app-service-container {
    padding: 2rem 0 6rem;
    .app-service {
      display: block;
      .image-container {
        width: auto;
        min-width: unset;
        margin: 0 auto;
        .image-list {
          width: 55.56%;
          margin-left: 2rem;
          &:first-child {
            margin-left: 0;
          }
          &:not(.swiper-slide-active) {
            opacity: 0.2;
          }
        }
      }

      .info-container {
        width: calc(100% - 4rem);
        max-width: none;
        margin: 4rem auto 0;
        .info-list {
          .title-box {
            font-size: 1.8rem;
            line-height: 2.6rem;
          }
          .desc-box {
            margin-top: 1.2rem;
            font-size: 1.4rem;
            line-height: 2.2rem;
          }
          .detail-box {
            margin-top: 2rem;
            font-size: 1.2rem;
            line-height: 1.7rem;
          }
        }
      }
    }

    .swiper-custom-controller {
      position: static;
      margin-top: 3rem;
      .swiper-pagination:deep() {
        text-align: center;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
  .app-download-container {
    height: calc(100vh - 4.8rem);
    min-height: 68rem;
    // background:#000000 url("~Image/m_img_down_bg.svg") no-repeat center bottom / contain;
    .info-box {
      @include flex(column, flex-start, center);
      padding: 6rem 2rem 0;
    }
    .top-container {
      align-items: center;
      .title-box {
        font-size: 1.8rem;
        line-height: 2.6rem;
        text-align: center;
      }
      .logo-box {
        width: 23.3rem;
        margin-top: 2.1rem;
      }
      .desc-box {
        margin-top: 1.2rem;
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
    .bottom-container {
      margin-top: 3rem;
      .app-link-box {
        .app-link {
          width: 12.3rem;
          height: 3.6rem;
          border: 1px solid #8c8b9a;
          border-radius: 1.2rem;
          & + .app-link {
            margin-left: 1rem;
          }
          .google-play {
            width: 9.1rem;
          }
          .app-store {
            width: 7rem;
          }
        }
      }
    }
  }
}

//
@media screen and (min-aspect-ratio: 1/3) and (orientation: portrait) {
  .app-download-container {
    background: #000000 url("~Image/m_img_down_bg.png") no-repeat center bottom /
      100%;
  }
}
</style>
