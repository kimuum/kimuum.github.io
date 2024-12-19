<template>
  <div class="wrapper">
    <header-comp :currentPageName="currentPageName" :headerTheme="headerTheme" ref="headerComp"></header-comp>

    <main class="main">
      <div class="content-container">
        <div class="content-area">
          <div class="main-title-container">
            <div class="title">
              <span>볼트업 충전기</span>
            </div>
            <div class="desc">
              <span class="strong">
                LG유플러스에서 깐깐하게 준비한,<br />
                믿을 수 있는 충전기를 지금 바로 설치 해 보세요.
              </span>
            </div>
            <div class="section-button-box">
              <button type="button" class="btn-section" @click="sectionScroll('first')">
                <span>볼트업 충전기 설치</span>
              </button>
              <button type="button" class="btn-section" @click="sectionScroll('second')">
                <span>제조사 별 충전기</span>
              </button>
            </div>
          </div>

          <!-- 1 -->
          <section class="section-container" ref="firstSection">
            <!-- 1-1 -->
            <div class="steps-container">
              <div class="section-title-box">
                <div class="title-box">
                  전문가의 컨설팅으로 시작하는,<br />
                  <span class="strong">볼트업 충전기 설치 절차</span>
                </div>
                <p class="desc">
                  충전기 설치, 준공, 검수부터 사후 관리까지<br />
                  유플러스의 품질 기준과 프로세스가 적용됩니다.
                </p>
              </div>
              <div class="steps-content-container">
                <div class="left-area">
                  <div class="img-box">
                    <img src="~Image/man.png" alt="" />
                  </div>
                </div>
                <div class="right-area">
                  <div class="steps-list-container">
                    <div class="steps-box">
                      <div class="image-box">
                        <img src="~Image/ic_install_1.svg" alt="" />
                      </div>
                      <div class="info-box">
                        <div class="title">
                          <span>1. 간편한 설치 문의</span>
                        </div>
                        <div class="desc">
                          <span class="call"
                            >1660-0<span class="strong-365">365</span></span
                          >
                          <span class="email">voltup@lguplus.co.kr</span>
                        </div>
                      </div>
                    </div>
                    <div class="steps-box">
                      <div class="image-box">
                        <img src="~Image/ic_install_2.svg" alt="" />
                      </div>
                      <div class="info-box">
                        <div class="title">
                          <span>2. 1:1 컨설팅</span>
                        </div>
                        <div class="desc">
                          <span>현장 실사</span>
                          <span>견적 발행</span>
                          <span>입대위 컨설팅</span>
                        </div>
                      </div>
                    </div>
                    <div class="steps-box">
                      <div class="image-box">
                        <img src="~Image/ic_install_3.svg" alt="" />
                      </div>
                      <div class="info-box">
                        <div class="title">
                          <span>3. 일정 조율/계약 체결</span>
                        </div>
                        <div class="desc">
                          <span>설치 일정 관리</span>
                          <span>계약서 작성</span>
                        </div>
                      </div>
                    </div>
                    <div class="steps-box">
                      <div class="image-box">
                        <img src="~Image/ic_install_4.svg" alt="" />
                      </div>
                      <div class="info-box">
                        <div class="title">
                          <span>4. 설치 공사</span>
                        </div>
                        <div class="desc">
                          <span>내/외선 전기 공사</span>
                          <span>전기 사용 신청</span>
                          <span>계량기 설치</span>
                        </div>
                      </div>
                    </div>
                    <div class="steps-box">
                      <div class="image-box">
                        <img src="~Image/ic_install_5.svg" alt="" />
                      </div>
                      <div class="info-box">
                        <div class="title">
                          <span>5. 시운전/준공 완료</span>
                        </div>
                        <div class="desc">
                          <span>시운전 TEST</span>
                          <span>안전 점검</span>
                          <span>현장 준공 검수</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bottom-container">
                    <div class="notice-box">
                      <span
                        >충전기 투자 및 운영 방식은 협의를 통해 변경 가능하며,
                        자세한 사항은 '서비스 소개서'를 참고 해 주세요.</span
                      >
                    </div>
                    <div class="download-box">
                      <a href="introduction.pdf" download>
                        <span>서비스 소개서 다운로드</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 1-2 -->
            <div class="manage-container">
              <div class="section-title-box">
                <div class="title-box">
                  든든하고 신속한&nbsp;<span class="strong">유지보수</span>
                </div>
              </div>
              <div class="manage-area">
                <div class="left-container">
                  <div class="lgu-card-block">
                    <div class="logo-box"></div>
                    <div class="info-box">
                      <span>24시간 모니터링</span>
                      <span>정기/수시 점검</span>
                      <span>신속한 장애 조치</span>
                    </div>
                  </div>
                </div>
                <div class="right-container">
                  <div class="manage-block-list">
                    <div class="manage-block-box">
                      <div class="title-box">
                        <span>관제 모니터링</span>
                      </div>
                      <div class="desc-box">
                        <span>24시간 모니터링</span>
                        <span>정기/수시 점검</span>
                        <span>상시 컨설팅</span>
                      </div>
                      <div class="image-box">
                        <img src="~Image/ic_install_6.svg" alt="관제 모니터링">
                      </div>
                    </div>
                    <div class="manage-block-box">
                      <div class="title-box">
                        <span>고장 출동 접수</span>
                      </div>
                      <div class="desc-box">
                        <span>24시간 문의 응대</span>
                        <span>원격 조치</span>
                        <span>현장 이관</span>
                      </div>
                      <div class="image-box">
                        <img src="~Image/ic_install_7.svg" alt="고장 출동 접수">
                      </div>
                    </div>
                    <div class="manage-block-box">
                      <div class="title-box">
                        <span>출동/현장 조치</span>
                      </div>
                      <div class="desc-box">
                        <span>정기/수시 점검 수행</span>
                        <span>모델/지역별 전담</span>
                        <span>서비스 인력 출동</span>
                      </div>
                      <div class="image-box">
                        <img src="~Image/ic_install_8.svg" alt="출동/현장 조치">
                      </div>
                    </div>
                    <div class="manage-block-box">
                      <div class="title-box">
                        <span>개선 R&D</span>
                      </div>
                      <div class="desc-box">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div class="image-box">
                        <img src="~Image/ic_install_9.svg" alt="개선 R&D">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 2 -->
          <section class="section-container" ref="secondSection">
            <div class="product-container">
              <div class="product-area">
                <div class="product-slide-container">
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>

                  <!-- swiper -->
                  <swiper 
                    class="product"
                    v-bind="swiperOptions"
                  >
                    <swiper-slide>
                      <div class="product-slide-content-area">
                          <div class="left-container">
                            <div class="title-area">
                              <div class="title-box">
                                <span class="strong">내게 딱 ⏤</span>&nbsp;맞는
                                충전기
                              </div>
                            </div>
                            <div class="info-area">
                              <div class="name-box">
                                <div class="logo">
                                  <img
                                    src="~Image/ls_logo.svg"
                                    alt=""
                                    style="width: 76px"
                                  />
                                </div>
                                <div class="name">
                                  <span>LS ELECTRIC</span>
                                </div>
                              </div>
                              <div class="desc-box">강화 유리를 적용한 수려한 외관<br />
                                직관적이고 편리한 사용성<br />
                                내부 부속 전력기기 모두 LS ELECTRIC 제품적용</div>
                              <div class="product-detail-box">
                                <div class="button-box">
                                  <button
                                    type="button"
                                    class="btn-detail"
                                    @click="showPopup('ls')"
                                  >
                                    <span>충전기 자세히 보기</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="right-container">
                            <div class="img-area">
                              <div class="img-box">
                                <img
                                  src="~Image/img_install_device_ls.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="product-slide-content-area">
                          <div class="left-container">
                            <div class="title-area">
                              <div class="title-box">
                                <span class="strong">내게 딱 ⏤</span>&nbsp;맞는
                                충전기
                              </div>
                            </div>
                            <div class="info-area">
                              <div class="name-box">
                                <div class="logo">
                                  <img
                                    src="~Image/img_logo_popup_evar.svg"
                                    alt=""
                                    style="width: 44px"
                                  />
                                </div>
                                <div class="name">
                                  <span>EVAR</span>
                                </div>
                              </div>
                              <div class="desc-box">심플하고 쉬운 사용 인터페이스<br />
                              사용량 확인이 가능한 전면 Hidden Display<br />
                              친숙하고 부드러운 유선형 디자인</div>
                              <div class="product-detail-box">
                                <div class="button-box">
                                  <button
                                    type="button"
                                    class="btn-detail"
                                    @click="showPopup('evar')"
                                  >
                                    <span>충전기 자세히 보기</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="right-container">
                            <div class="img-area">
                              <div class="img-box">
                                <img
                                  src="~Image/img_install_device_evar.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="product-slide-content-area">
                          <div class="left-container">
                            <div class="title-area">
                              <div class="title-box">
                                <span class="strong">내게 딱 ⏤</span>&nbsp;맞는
                                충전기
                              </div>
                            </div>
                            <div class="info-area">
                              <div class="name-box">
                                <div class="logo">
                                  <img
                                    src="~Image/img_logo_popup_lg.svg"
                                    alt=""
                                    style="width: 58px"
                                  />
                                </div>
                                <div class="name">
                                  <span>LG 전자</span>
                                </div>
                              </div>
                              <div class="desc-box">준비중입니다.</div>
                              <div class="product-detail-box">
                                <div class="button-box">
                                  <!-- <button type="button" class="btn-detail" @click="showPopup('lg')">
                                    <span>충전기 자세히 보기</span>
                                  </button> -->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="right-container">
                            <div class="img-area">
                              <div class="img-box">
                                <img src="~Image/img_install_device_dummy.png" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                    </swiper-slide>

                    <div class="swiper-custom-controller">
                      <div class="swiper-pagination"></div>
                    </div>
                  </swiper>

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

  <product-popup :class="{ show : setProductPopup }" @updateData="closePopup()" :productData="productData"></product-popup>

</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import ProductPopup from "@/components/ProductPopup.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Navigation]);

// data import
import productData from "@/data/productData.js";

export default {
  name: "ProductInstruction",
  components: {
    HeaderComp,
    FooterComp,
    FloatingButton,
    Swiper,
    SwiperSlide,
    ProductPopup
  },
  data() {
      return {
        currentPageName: 'product',
        headerTheme: true,
        firstSecHeight: 0,
        secondSecHeight: 0,
        setProductPopup: false,
        swiperOptions: {
          slidesPerView: 1,
          pagination: {
            clickable: true,
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },                    
        },
        productData: null
      };
  },  
  mounted () {
    window.scrollTo(0,0);
  },
  methods: {
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
    },
    showPopup(type) {
      document.body.classList.add('scroll-lock');
      this.setProductPopup = !this.setProductPopup;

      // 1번 클릭 한 요소의 데이터를 넘겨줌
      if(type == 'ls') {
        this.productData = productData.ls;
      } else if (type == 'evar') {
        this.productData = productData.evar;
      } else if (type == 'lg') {
        this.productData = productData.lg;
      } else {
        return;
      }
    },
    closePopup() {
      document.body.classList.remove('scroll-lock');
      this.setProductPopup = false;
    }
  }
};
</script>

<style lang="scss" scoped>

.main-title-container {
  padding-bottom: 11rem;
}
.steps-container {
  padding-top: 9rem;
  background: url("~Image/img_install_bg.png") no-repeat center center /
    cover;
  .steps-content-container {
    @include flex(row, center, flex-start);
    position: relative;
    width: 137.1rem;
    margin: 0 auto;
    padding-top: 1.8rem;
    padding-left: 48rem;

    .left-area {
      width: 30%;
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .right-area {
      z-index: 1;
      flex: 1;
      margin: 4rem 0 0 0;
      padding-left: 12.1%;
      padding-bottom: 6rem;
      .steps-list-container {
        @include flex(row, flex-start, flex-start);
        flex-wrap: wrap;
        .steps-box {
          width: 27%;
          margin-bottom: 8rem;
          &:not(:last-of-type) {
            margin-right: 2rem;
          }
          img {
            width: 9.6rem;
          }
          .info-box {
            .title {
              margin-top: 2rem;
              @include font(2.2rem, 700, #333, 3.2rem);
              word-break: keep-all;
            }
            .desc {
              @include flex(column, flex-start, flex-start);
              margin-top: 1.1rem;
              @include font(1.6rem, 500, #61606c, 2.3rem);
              span {
                position: relative;
                &:not(:first-of-type) {
                  margin-top: 0.2rem;
                }
                &.call,
                &.email {
                  padding-left: 2.4rem;
                  &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1.6rem;
                    height: 1.6rem;
                    transform: translateY(-50%);
                  }
                }
                &.call {
                  &::before {
                    background: url("~Image/ic_install_phone.svg") no-repeat
                      100% center;
                  }
                }
                &.email {
                  &::before {
                    background: url("~Image/ic_install_mail.svg") no-repeat
                      100% center;
                  }
                }
              }
            }
          }
        }
      }
      .bottom-container {
        .notice-box {
          @include font(1.6rem, 500, #61606c, 2.3rem);
          white-space: pre-line;
        }
        .download-box {
          margin-top: 1.6rem;
          a {
            position: relative;
            padding-right: 2.8rem;
            @include font(1.6rem, 700, $black, 2.3rem);
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 0;
              width: 2rem;
              height: 2rem;
              background: url("~Image/ic_install_download.svg") no-repeat
                100% center/cover;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
}
.manage-container {
  margin-top: 12rem;
  // padding: 0 27.4rem;
  .manage-area {
    @include flex(row, center, flex-start);
    width: 137.1rem;
    padding-top: 6rem;
    margin: 0 auto;
    .left-container {
      width: 32.4%;
      .lgu-card-block {
        @include flex(column, flex-end, flex-start);
        overflow: hidden;
        // width: 44.4rem;
        width: 100%;
        height: 48.9rem;
        padding: 0 4.6rem 6.8rem;
        border-radius: 2rem;
        background: url("~Image/img_install_card_bg.png") no-repeat 100%
          center / cover;
        box-shadow: 0 0.4rem 3rem 1.3rem rgba(67, 66, 146, 0.08);
        .logo-box {
          width: 18.9rem;
          height: 5.5rem;
          background: url("~Image/img_logo_lg_w.svg") no-repeat 100% center /
            cover;
        }
        .info-box {
          @include flex(column, flex-start, flex-start);
          margin-top: 2rem;
          @include font(2rem, 700, $white, 2.9rem);
          span {
            &:not(:first-of-type) {
              margin-top: 0.4rem;
            }
          }
        }
      }
    }
    .right-container {
      flex: 1;
      padding-left: 2rem;
      .manage-block-list {
        @include flex(row, space-between, space-between);
        flex-wrap: wrap;
        margin: 0 -1rem;
        .manage-block-box {
          @include flex(column, flex-start, flex-start);
          position: relative;
          overflow: hidden;
          width: calc(50% - 2rem);
          height: 22.5rem;
          margin: 0 1rem;
          padding: 5rem 3rem 5rem 5rem;
          border: 1px solid #eeedf3;
          border-radius: 2rem;
          box-shadow: 0 0.4rem 3rem 1.3rem rgba(67, 66, 146, 0.08);
          &:nth-of-type(3),
          &:nth-of-type(4) {
            margin-top: 3.9rem;
          }
          .title-box {
            @include font(2.2rem, 700, #333, 3.2rem);
          }
          .desc-box {
            @include flex(column, flex-start, flex-start);
            margin-top: 1.6rem;
            @include font(1.6rem, 500, #666, 2.3rem);
            span:not(:first-of-type) {
              margin-top: 0.4rem;
            }
          }
          .image-box {
            position: absolute;
            bottom: 3rem;
            right: 3rem;
          }
        }
      }
    }
  }
}
.product-container {
  margin-top: 14rem;
  background: url("~Image/img_install_product_bg.png") no-repeat 100% center /
    cover;
  .product-area {
    @include flex(row, flex-end, flex-start);
    position: relative;
    width: 137.1rem;
    margin: 0 auto;
  }
  .product-slide-container {
    position: relative;
    width: 100%;
    .swiper-button-prev,
    .swiper-button-next {
      top: 50%;
      transform: translateY(-50%);
      width: 9.6rem;
      height: 9.6rem;
      background: url("~Image/ic_arrow_right_96_2.svg") no-repeat 100% center;
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
  }
  .swiper {
    width: 84.7rem;
    .swiper-custom-controller {
      position: absolute;
      bottom: 9rem;
      left: 0;
      z-index: 10;
      .swiper-pagination:deep() {
        position: static;
        text-align: left;
        .swiper-pagination-bullet {
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 0.6rem 0 0;
          background-color: #cac9d9;
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
    .swiper-slide {
      height: unset;
    }
  }
  .product-slide-content-area {
    @include flex(row, center, flex-start);
    height: 100%;

    .left-container {
      margin-right: 4.8rem;
      .title-area {
        margin-top: 5.2rem;
        .title-box {
          @include font(5rem, 300, $black, 7.2rem);
          white-space: nowrap;
          .strong {
            font-weight: 700;
          }
        }
      }
      .info-area {
        @include flex(column, flex-start, flex-start);
        .name-box {
          margin-top: 4.9rem;
          .name {
            @include font(3.2rem, 700, #333, 4.6rem);
          }
        }
        .desc-box {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          margin-top: 1.6rem;
          @include font(2.2rem, 500, #666, 3.4rem);
          word-break: keep-all;
          text-overflow: ellipsis;
          white-space: pre-line;
          span {
            display: block;
          }
        }
        .product-detail-box {
          margin-top: 4rem;
          .button-box {
            .btn-detail {
              span {
                display: block;
                position: relative;
                padding-right: 2rem;
                @include font(1.6rem, 700, $point-pink, 2.3rem);
                &::after {
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 0;
                  width: 1.4rem;
                  height: 1.4rem;
                  background: url("~Image/ic_arrow_right_p_14.svg") no-repeat
                    100% center/cover;
                  transform: translateY(-50%);
                }
              }
            }
          }
        }
      }
    }

    .right-container {
      display: flex;
      align-items: flex-end;
      height: 100%;
      .img-box {
        width: 32.4rem;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media #{$tablet} { 
  .steps-container {
    .steps-content-container {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;

      .left-area {
        left: auto;
        right: 22%;
        width: 22rem;
      }
      .right-area {
        padding-left: 4%;

        .steps-list-container {
          .steps-box {
            margin-bottom: 4rem;
          }
        }
      }
    }
  }

  .manage-container {
    .manage-area {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .product-container {
    .swiper {
      width: 76.3rem;
      .swiper-custom-controller {
        bottom: 2rem;
      }
    }
    .product-area {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .product-slide-container {
      width: 100%;
      // height: 68.4rem;
      &.show {
        display: block;
      }
    }
    .product-slide-content-area {
      .right-container {
        .img-box {
          width: 24rem;
        }
      }
    }
  }
}

@media #{$mobile} {
  .main-title-container {
    padding-bottom: 6rem;
  }
  .steps-container {
    padding-top: 6rem;

    .steps-content-container {
      .left-area {
        display: none;
      }

      .right-area {
        padding-left: 2rem;
        padding-right: 2rem;

        .steps-list-container {
          .steps-box {
            width: calc(20% - 2rem);
            margin-left: 1rem;
            margin-right: 1rem;

            &:not(:last-of-type) {
              margin-right: 1rem;
            }

            .image-box {
              text-align: center;
            }

            .info-box {
              .title {
                @include font(1.4rem, 700, #333, 2rem);
                text-align: center;
              }

              .desc {
                display: none;
              }
            }
          }
        }

        .bottom-container {
          .notice-box {
            margin-top: 0;
            text-align: center;
          }
          .download-box {
            @include flex(row, center, center);
          }
        }
      }
    }
  }

  .manage-container {
    margin-top: 6rem;

    .manage-area {
      display: block;
      padding-top: 3rem;

      .left-container {
        width: 100%;
        margin-bottom: 1rem;

        .lgu-card-block {
          @include flex(row-reverse, space-between, flex-end);
          height: 0;
          min-height: 12rem;
          padding: 2.4rem 2.6rem;

          .logo-box {
            width: 12rem;
            height: 4rem;
            background: url("~Image/img_logo_lg_w.svg") no-repeat center /
              100%;
          }

          .info-box {
            margin-top: 0;
            @include font(1.4rem, bold, $white, 2.1rem);
          }
        }
      }

      .right-container {
        padding-left: 0;

        .manage-block-list {
          margin: 0;

          .manage-block-box {
            width: calc(50% - 0.5rem);
            margin: 0;
            margin-bottom: 1rem;
            padding: 3rem;

            &:nth-of-type(3),
            &:nth-of-type(4) {
              margin-top: 0;
            }

            &:nth-child(2n + 1) {
              margin-right: 0.5rem;
            }

            &:nth-child(2n) {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }

  .product-container {
    margin-top: 8rem;
    background: url(~Image/img_install_product_bg.png) no-repeat left
      bottom/cover;
    .swiper {
      width: 52rem;
    }
    .product-slide-container {
      height: auto;
    }

    .product-slide-content-area {
      @include flex(row, center, flex-start);
      position: relative;
      padding-top: 8rem;

      .left-container {
        min-width: 26rem;
        max-width: 26rem;
        .title-area {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          margin-top: 0;
          text-align: center;

          .title-box {
            @include font(2.8rem, bold, $black, normal);
          }
        }
      }

      .right-container {
        padding-top: 2rem;
        .img-box {
          width: 20rem;
        }
      }
    }
  }
}

@media #{$portrait} {
  .steps-container {
    background: url(~Image/img_install_bg.png) no-repeat 36% center/cover;
    .steps-content-container {
      .right-area {
        margin-top: 2rem;
        margin-bottom: 2rem;

        .steps-list-container {
          display: block;

          .steps-box {
            @include flex(row, flex-start, center);
            width: 100%;
            margin-left: 0;
            margin-bottom: 2rem;

            .image-box {
              width: 6rem;
              height: auto;
              margin-right: 1rem;

              img {
                display: block;
                width: 100%;
              }
            }

            .info-box {
              .title {
                margin-top: 0;
              }
            }
          }
        }

        .bottom-container {
          .notice-box {
            font-size: 1.2rem;
            line-height: 1.7rem;
          }
          .download-box {
            margin-top: 1.2rem;
            a {
              padding-right: 2.2rem;
              font-size: 1.2rem;
              line-height: 1.7rem;
              &::after {
                content: "";
                width: 1.6rem;
                height: 1.6rem;
              }
            }
          }
        }
      }
    }
  }

  .manage-container {
    .manage-area {
      .right-container {
        padding-left: 0;

        .manage-block-list {
          margin: 0;

          .manage-block-box {
            position: relative;
            height: auto;
            padding: 1.8rem;
            padding-top: 7.6rem;

            .title-box {
              @include font(1.6rem, bold, #333, 2.4rem);
            }

            .desc-box {
              margin-top: 0.8rem;
              @include font(1.2rem, 500, #666, 1.7rem);
            }

            .image-box {
              top: 1.6rem;
              left: 1.6rem;
              right: auto;
              bottom: auto;
              width: 5rem;
              height: 5rem;

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
  }

  .product-container {
    .product-slide-container {
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
    .swiper {
      width: 36.6rem;
      .swiper-custom-controller {
        .swiper-pagination:deep() {
          .swiper-pagination-bullet {
            width: 0.6rem;
            height: 0.6rem;
            margin: 0 0.3rem 0 0;
            &:not(:first-of-type) {
              margin: 0 0.3rem;
            }
          }
        }
      }
    }
    .product-slide-content-area {
      padding-top: 7rem;
      .left-container {
        width: 24rem;
        max-width: unset;
        min-width: unset;
        margin-right: 3rem;
        .title-area {
          .title-box {
            @include font(2.8rem, bold, $black, normal);
          }
        }

        .info-area {
          .desc-box {
            margin-top: 0.6rem;
            font-size: 1.2rem;
            line-height: 1.7rem;
          }
          .name-box {
            margin-top: 0;
            .name {
              font-size: 1.8rem;
              line-height: 2.6rem;
            }
          }
          .product-detail-box {
            margin-top: 2.9rem;
            .button-box {
              .btn-detail {
                span {
                  padding-right: 1.2rem;
                  font-size: 1.2rem;
                  line-height: 1.7rem;
                  &::after {
                    width: 1.2rem;
                    height: 1.2rem;
                  }
                }
              }
            }
          }
        }
      }
      .right-container {
        .img-box {
          width: 9.6rem;
        }
      }
    }
  }
}

@media #{$mobile_1} {
  .product-container {
    .swiper {
      width: auto;
      .swiper-custom-controller {
        left: 0;
        transform: none;
        width: auto;
      }
    }
    .product-slide-content-area {
      justify-content: space-between;
      width: 100%;
      padding-top: 5rem;
      .left-container {
        width: auto;
        .title-area {
          .title-box {
            font-size: 1.8rem;
          }
        }
        .info-area {
          .desc-box {
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }
}
</style>
