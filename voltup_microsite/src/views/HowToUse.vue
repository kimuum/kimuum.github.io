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
              <span>이용 방법</span>
            </div>
            <div class="desc">
              <span class="strong">
                볼트업을 똑똑하게 사용하는 방법을 알아보세요.
              </span>
            </div>
            <div class="section-button-box">
              <button type="button" class="btn-section" @click="sectionScroll('first')">
                <span>볼트업 요금제</span>
              </button>
              <button type="button" class="btn-section" @click="sectionScroll('second')">
                <span>볼트업 충전기 사용 방법</span>
              </button>
            </div>
          </div>

          <!-- 1 -->
          <section class="section-container" ref="firstSection">
            <div class="plan-container">
              <div class="plan-top-area">
                <div class="plan-info-box">
                  <div class="title-box">
                    <span>볼트업 요금제</span>
                  </div>
                  <div class="desc-box">
                    <span>시간과 계절에 구애받지 않는 심플한 요금제</span>
                    <span>충전 패턴을 고려한 다양한 할인 정책</span>
                    <span>다양한 제휴 할인</span>
                  </div>
                </div>
              </div>
              <div class="plan-middle-area">
                <div class="plan-block-container">
                  <div class="plan-block-list">
                    <div class="plan-block-box">
                      <div class="plan-block" @click="showPopup('first')">
                        <div class="top-box">
                          <div class="img-box">
                            <img
                              src="~Image/ic_use_1.svg"
                              alt="사용한만큼 종량 요금제"
                            />
                          </div>
                        </div>
                        <div class="bottom-box">
                          <div class="title-box">
                            <span>사용한만큼 종량 요금제</span>
                          </div>
                        </div>
                      </div>

                      <plan-popup-first
                        :class="{ show: setFirstPopup }"
                        @updateData="closePopup('first')"
                      ></plan-popup-first>
                    </div>
                    <div class="plan-block-box">
                      <div class="plan-block" @click="showPopup('second')">
                        <div class="top-box">
                          <div class="img-box">
                            <img
                              src="~Image/ic_use_2.svg"
                              alt="실속형 구독 요금제"
                            />
                          </div>
                        </div>
                        <div class="bottom-box">
                          <div class="title-box">
                            <span>실속형 구독 요금제</span>
                          </div>
                        </div>
                      </div>

                      <plan-popup-second
                        :class="{ show: setSecondPopup }"
                        @updateData="closePopup('second')"
                      ></plan-popup-second>
                    </div>
                    <div class="plan-block-box">
                      <div class="plan-block" @click="showPopup('third')">
                        <div class="top-box">
                          <div class="img-box">
                            <img
                              src="~Image/ic_use_3.svg"
                              alt="전국 로밍 요금"
                            />
                          </div>
                        </div>
                        <div class="bottom-box">
                          <div class="title-box">
                            <span>전국 로밍 요금</span>
                          </div>
                        </div>
                      </div>

                      <plan-popup-third
                        :class="{ show: setThirdPopup }"
                        @updateData="closePopup('third')"
                      ></plan-popup-third>
                    </div>
                    <div class="plan-block-box">
                      <div class="plan-block" @click="showPopup('fourth')">
                        <div class="top-box">
                          <div class="img-box">
                            <img
                              src="~Image/ic_use_4.svg"
                              alt="U+ 멤버쉽 등<br/>다양한 제휴 할인"
                            />
                          </div>
                        </div>
                        <div class="bottom-box">
                          <div class="title-box">
                            <span>U+ 멤버쉽 등<br />다양한 제휴 할인</span>
                          </div>
                        </div>
                      </div>

                      <plan-popup-fourth
                        :class="{ show: setFourthPopup }"
                        @updateData="closePopup('fourth')"
                      ></plan-popup-fourth>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan-bottom-area">
                <div class="notice-box">
                  <div class="title-box">
                    <span>유의사항</span>
                  </div>
                  <div class="desc-box">
                    <span
                      >모든 요금은 부가세포함된 금액이며, 한전 전기요금 변동에
                      따라 변경될 수 있습니다.</span
                    >
                    <span
                      >충전요금은 Volt UP 또는 U+멤버십 회원 여부, Volt UP
                      요금제, 충전소 별 기준에 따라 달라질 수 있습니다. 정확한
                      충전요금은 Volt UP 앱의 [충전소 상세정보]에서 확인해
                      주세요</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 2 -->
          <section class="section-container" ref="secondSection">
            <div class="usage-container">
              <div class="section-title-box">
                <div class="title-box">
                  볼트업 충전기&nbsp;<span class="strong">사용 방법</span>
                </div>
                <p class="desc">
                  충전기 사용을 위해서는 볼트업 앱을 통한 회원가입이
                  필요합니다.<br />
                  앱을 통해 전기차 충전기 위치를 검색하고, 미리 충전기를
                  예약해서 이용할 수 있습니다.
                </p>
              </div>
              <div class="usage-content-container">
                <div class="usage-content-area">
                  <div class="usage-title-box">
                    <span>볼트업 사용 준비하기</span>
                  </div>
                  <div class="usage-info-box">
                    <div class="usage-video-container">
                      <div class="video-box">
                        <iframe
                          src="https://www.youtube.com/embed/741Ty33CV-Y"
                          title=""
                          frameborder="0"
                          allow="fullscreen;"
                          class="youtube"
                        >
                        </iframe>
                      </div>
                    </div>
                    <div class="usage-block-container">
                      <div class="usage-block-list">
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_1_1.png"
                              alt="1. 볼트업 앱 설치"
                            />
                          </div>
                          <div class="title-box">
                            <span>1. 볼트업 앱 설치</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_1_2.png"
                              alt="2. 회원 가입"
                            />
                          </div>
                          <div class="title-box">
                            <span>2. 회원 가입</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_1_3.png"
                              alt="3. 결제 수단 등록"
                            />
                          </div>
                          <div class="title-box">
                            <span>3. 결제 수단 등록</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_1_4.png"
                              alt="3. 회원 카드 발급 신청"
                            />
                          </div>
                          <div class="title-box">
                            <span>3. 회원 카드 발급 신청</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="usage-content-container">
                <div class="usage-content-area">
                  <div class="usage-title-box">
                    <span>볼트업으로 충전하기</span>
                  </div>
                  <div class="usage-info-box">
                    <div class="usage-video-container">
                      <div class="video-box">
                        <iframe
                          src="https://www.youtube.com/embed/vLyQvCnQLNM"
                          title=""
                          frameborder="0"
                          allow="fullscreen;"
                          class="youtube"
                        >
                        </iframe>
                      </div>
                    </div>
                    <div class="usage-block-container">
                      <div class="usage-block-list">
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_2_1.png"
                              alt="1. APP에서 QR 인식"
                            />
                          </div>
                          <div class="title-box">
                            <span>1. APP에서 QR 인식</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_2_2.png"
                              alt="2. 충전 설정"
                            />
                          </div>
                          <div class="title-box">
                            <span>2. 충전 설정</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_2_3.png"
                              alt="3. 커플러 연결"
                            />
                          </div>
                          <div class="title-box">
                            <span>3. 커플러 연결</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_2_4.png"
                              alt="4. 충전 완료"
                            />
                          </div>
                          <div class="title-box">
                            <span>4. 충전 완료</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="usage-content-container">
                <div class="usage-content-area">
                  <div class="usage-title-box">
                    <span>예약 충전하기</span>
                  </div>
                  <div class="usage-info-box">
                    <div class="usage-video-container">
                      <div class="video-box">
                        <iframe
                          src="https://www.youtube.com/embed/-vENWqVqU-c"
                          title=""
                          frameborder="0"
                          allow="fullscreen;"
                          class="youtube"
                        >
                        </iframe>
                      </div>
                    </div>
                    <div class="usage-block-container">
                      <div class="usage-block-list">
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_3_1.png"
                              alt="1. 충전기 선택"
                            />
                          </div>
                          <div class="title-box">
                            <span>1. 충전기 선택</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_3_2.png"
                              alt="2. 충전 예약"
                            />
                          </div>
                          <div class="title-box">
                            <span>2. 충전 예약</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_3_3.png"
                              alt="3. 예약 알림"
                            />
                          </div>
                          <div class="title-box">
                            <span>3. 예약 알림</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                        <div class="usage-block-box">
                          <div class="image-box">
                            <img
                              src="~Image/img_use_2_4.png"
                              alt="4. 충전 완료"
                            />
                          </div>
                          <div class="title-box">
                            <span>4. 충전 완료</span>
                          </div>
                        </div>

                        <div class="separator"></div>
                      </div>
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
import PlanPopupFirst from "@/components/PlanPopupFirst.vue";
import PlanPopupSecond from "@/components/PlanPopupSecond.vue";
import PlanPopupThird from "@/components/PlanPopupThird.vue";
import PlanPopupFourth from "@/components/PlanPopupFourth.vue";

export default {
  name: "HowToUse",
  components: {
    HeaderComp,
    FooterComp,
    FloatingButton,
    PlanPopupFirst,
    PlanPopupSecond,
    PlanPopupThird,
    PlanPopupFourth
  },
  data() {
    return {
      currentPageName: "howtouse",
      headerTheme: true,
      setFirstPopup: false,
      setSecondPopup: false,
      setThirdPopup: false,
      setFourthPopup: false,
      firstSecHeight: 0,
      secondSecHeight: 0
    };
  },
  mounted () {
    window.scrollTo(0,0)
  },
  methods: {
    showPopup(type) {
      document.body.classList.add("scroll-lock");
      if (type == "first") {
        this.setFirstPopup = !this.setFirstPopup;
      } else if (type == "second") {
        this.setSecondPopup = !this.setSecondPopup;
      } else if (type == "third") {
        this.setThirdPopup = !this.setThirdPopup;
      } else if (type == "fourth") {
        this.setFourthPopup = !this.setFourthPopup;
      }
    },
    closePopup(type) {
      document.body.classList.remove("scroll-lock");
      if (type == "first") {
        this.setFirstPopup = false;
      } else if (type == "second") {
        this.setSecondPopup = false;
      } else if (type == "third") {
        this.setThirdPopup = false;
      } else if (type == "fourth") {
        this.setFourthPopup = false;
      }
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
  },
};
</script>

<style lang="scss" scoped>
.main-title-container {
  width: 137.1rem;
  margin: 0 auto;
  padding-bottom: 8rem;
}
.plan-container {
  background-color: #f7f8fb;
  .plan-top-area {
    width: 100%;
    background: url("~Image/plan_bg.png") no-repeat 100% center / cover;
    .plan-info-box {
      width: 137.1rem;
      margin: 0 auto;
      padding: 30rem 0 23.3rem;
      .title-box {
        @include font(5rem, 700, $white, 7.2rem);
      }
      .desc-box {
        @include flex(column, flex-start, flex-start);
        margin-top: 2.6rem;
        @include font(2.2rem, 500, #f4f4f4, 3.4rem);
        span {
          position: relative;
          padding-left: 2.6rem;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 2rem;
            height: 2rem;
            background: url("~Image/ic_ use_arrow_20.svg") no-repeat 100%
              center/cover;
            transform: translateY(-50%);
          }
          &:not(:first-of-type) {
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
  .plan-middle-area {
    width: 137.1rem;
    margin: 0 auto;
    margin-top: -19.2rem;
    .plan-block-container {
      .plan-block-list {
        @include flex(row, space-between, center);
        margin: 0 -1rem;
      }
      .plan-block-box {
        @include flex(column, flex-start, flex-start);
        overflow: hidden;
        width: calc(25% - 2rem);
        height: 41.6rem;
        margin: 0 1rem;
        border-radius: 2rem;
        box-shadow: 0 0.4rem 3rem 1.3rem rgba(67, 66, 146, 0.08);
        .plan-block {
          width: 100%;
          cursor: pointer;
        }
        .top-box {
          @include flex(row, flex-start, flex-end);
          width: 100%;
          padding: 11rem 0 4rem 3rem;
          background-color: #1e1d2a;
          .img-box {
            width: 13rem;
            img {
              display: block;
              width: 100%;
              height: auto;
            }
          }
        }
        .bottom-box {
          padding: 3rem 4rem;
          .title-box {
            @include font(2.2rem, 500, #333, 3.2rem);
            word-break: keep-all;
          }
        }
      }
    }
  }
  .plan-bottom-area {
    margin-top: 6rem;
    padding-bottom: 8rem;
    .notice-box {
      width: 137.1rem;
      margin: 0 auto;
      .title-box {
        @include font(1.8rem, 700, #61606c, 2.6rem);
      }
      .desc-box {
        @include flex(column, flex-start, flex-start);
        margin-top: 1.4rem;
        @include font(1.4rem, 500, #61606c, 2rem);
        span {
          position: relative;
          margin-left: 0.8rem;
          padding-left: 1rem;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: #61606c;
            transform: translateY(-50%);
          }
          &:not(:first-of-type) {
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
}
.usage-container {
  width: 137.1rem;
  margin: 0 auto;
  padding: 12rem 0 19rem;
  .usage-content-container {
    overflow: hidden;
    margin-top: 6rem;
    padding: 0 2rem;
    border: 1px solid #eeedf3;
    border-radius: 2rem;
    box-shadow: 0 0.4rem 3rem 1.3rem rgba(67, 66, 146, 0.08);
    .usage-content-area {
      @include flex(column, center, center);
    }
    .usage-title-box {
      @include flex(row, center, center);
      height: 3.9rem;
      margin-top: 4.8rem;
      padding: 0 2rem;
      border-radius: 2.7rem;
      background-color: #08090e;
      @include font(1.6rem, 700, $white, 2.3rem);
    }
    .usage-info-box {
      width: 100%;
      max-width: 114rem;
      margin-top: 3.6rem;
      .usage-video-container {
        .video-box {
          position: relative;
          padding-bottom: 56.2%;
          .youtube {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
      .usage-block-container {
        margin: 8rem 0 10rem;
        .usage-block-list {
          @include flex(row, space-between, center);
          .separator {
            &:last-child {
              display: none;
            }
            min-width: 2.8rem;
            height: 2.8rem;
            margin: 0 0.2rem;
            margin-top: -4rem;
            background: url("~Image/ic_use_arrow_28.svg") no-repeat center/cover;
          }
          .usage-block-box {
            flex: 1;
          }
          .image-box {
            position: relative;
            img {
              display: block;
              width: 100%;
              height: auto;
            }
          }
          .title-box {
            margin-top: 3rem;
            @include font(1.6rem, 700, #333, 2.3rem);
            text-align: center;
          }
        }
      }
    }
  }
}

// 태블릿
@media #{$tablet} {
  .main-title-container {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .plan-container {
    .plan-top-area {
      .plan-info-box {
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .plan-middle-area {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .plan-bottom-area {
      .notice-box {
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }
  .usage-container {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

// 모바일
@media #{$mobile} {
  .plan-container {
    .plan-top-area {
      .plan-info-box {
        padding: 14.5rem 2rem 2rem;
        .title-box {
          font-size: 2.4rem;
          line-height: 3.5rem;
        }
        .desc-box {
          margin-top: 1.2rem;
          font-size: 1.4rem;
          line-height: 2rem;
          span {
            padding-left: 1.6rem;
            &::before {
              width: 1.2rem;
              height: 1.2rem;
            }
          }
        }
      }
    }
    .plan-middle-area {
      margin: 2rem 0 0 0;
      .plan-block-container {
        .plan-block-list {
          flex-wrap: wrap;
        }
        .plan-block-box {
          width: calc(50% - 1rem);
          height: auto;
          margin: 0 0.5rem;
          &:nth-of-type(1),
          &:nth-of-type(2) {
            margin-bottom: 1rem;
          }
          .top-box {
            padding: 1.6rem;
            .img-box {
              width: 7rem;
            }
          }
          .bottom-box {
            min-height: 6.8rem;
            padding: 1.2rem 1.2rem 1.6rem;
            .title-box {
              font-size: 1.4rem;
              line-height: 2rem;
            }
          }
        }
      }
    }
    .plan-bottom-area {
      margin-top: 2rem;
      padding-bottom: 4rem;
      .notice-box {
        .title-box {
          font-size: 1.4rem;
          line-height: 2rem;
        }
        .desc-box {
          margin-top: 0.8rem;
          font-size: 1.2rem;
          line-height: 1.7rem;
          span {
            &:not(:first-of-type) {
              margin-top: 0.2rem;
            }
          }
        }
      }
    }
  }
  .usage-container {
    padding: 6rem 2rem;
    .section-title-box {
      .desc {
        br {
          display: block;
        }
      }
    }
    .usage-content-container {
      position: relative;
      padding: 0;
      border: none;
      border-radius: unset;
      box-shadow: none;
      &:not(:last-of-type) {
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: calc(100% - 4rem);
          height: 1px;
          background-color: #dbdbdb;
          transform: translateX(-50%);
        }
      }
      .usage-title-box {
        height: 3.3rem;
        margin: 0;
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
      .usage-info-box {
        margin-top: 2.4rem;
        .usage-block-container {
          margin: 3rem 0 4rem;
        }
      }
    }
  }
}

// 768
@media #{$portrait} {
  .usage-container {
    padding: 6rem 0 0 0;
    .section-title-box {
      .desc {
        br {
          display: none;
        }
      }
    }
    .usage-content-container {
      // position: relative;
      padding: 6rem 0 0 0;
      margin: 0;
      .usage-info-box {
        .usage-video-container {
          padding: 0 2rem;
        }
        .usage-block-container {
          overflow-x: auto;
          overflow-y: hidden;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          padding-left: 2rem;
          &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
          }
          .usage-block-list {
            position: relative;
            &::after {
              content: "";
              display: block;
              min-width: 2rem;
              height: 1px;
              background-color: transparent;
            }
            .image-box {
              width: 22.4rem;
              img {
                display: block;
                width: 100%;
              }
            }
            .separator {
              width: 2rem;
              height: 2rem;
              margin: 0 0.4rem;
              margin-top: -2rem;
            }
            .title-box {
              margin-top: 1.4rem;
              font-size: 1.4rem;
              line-height: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
