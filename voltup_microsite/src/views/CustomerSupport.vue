<template>
  <div class="wrapper">
    <header-comp :currentPageName="currentPageName" :headerTheme="headerTheme"></header-comp>

    <main class="main">
      <div class="content-container">
        <div class="content-area">
          <div class="main-title-container">
            <div class="title">
              <span>고객 지원</span>
            </div>
            <div class="desc">
              <span class="strong">
                볼트업 서비스에 궁금한 점이 있으시거나,<br />
                이용에 불편이 있으시다면 아래와 같이 문의 해 주세요.
              </span>
            </div>
            <div class="tab-button-box">
              <button type="button" class="btn-tab active" @click="sectionTab('first', $event)">
                <span>공지사항</span>
              </button>
              <button type="button" class="btn-tab" @click="sectionTab('second', $event)">
                <span>자주하는 질문</span>
              </button>
            </div>
          </div>

          <div class="support-block-container">
            <div class="support-block-box">
              <div class="img-box">
                <img src="~Image/ic_support_1.svg" alt="" />
              </div>
              <div class="info-box">
                <div class="title-box">
                  <span>전화문의</span>
                </div>
                <div class="desc-box">
                  <span
                    >1660 - 0<span class="strong-365">365</span> (24시간,
                    유료)</span
                  >
                </div>
              </div>
            </div>
            <div class="support-block-box">
              <div class="img-box">
                <img src="~Image/ic_support_2.svg" alt="" />
              </div>
              <div class="info-box">
                <div class="title-box">
                  <span>Email 문의</span>
                </div>
                <div class="desc-box">
                  <span>voltup@lguplus.co.kr</span>
                </div>
              </div>
            </div>
            <div class="support-block-box show-inquiry-popup">
              <div class="img-box">
                <img src="~Image/ic_support_3.svg" alt="" />
              </div>
              <div class="info-box">
                <div class="title-box">
                  <span>홈페이지 문의</span>
                </div>
                <div class="desc-box">
                  <span>충전기 전문가에게<br />'설치문의' (무료)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 1 -->
          <section class="section-container show" ref="firstSection">
            <accordianList :data="noticeData"></accordianList>
          </section>

          <!-- 2 -->
          <section class="section-container" ref="secondSection">
            <accordianList :data="faqData"></accordianList>
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
import accordianList from "@/components/accordianList.vue";
import noticeData from "@/data/noticeData.js";

export default {
  name: "CustomerSupport",
  components: {
    HeaderComp,
    FooterComp,
    FloatingButton,
    accordianList
  },
  data() {
      return {
        currentPageName: 'support',
        headerTheme: true,
        noticeData: noticeData.notice,
        faqData: noticeData.faq
      };
  },
  mounted () {
    window.scrollTo(0,0)
  },
  methods: {
    sectionTab(type, event) {
      if (type == 'first') {
        // tab content show/hide
        this.$refs.firstSection.classList.add('show');
        this.$refs.secondSection.classList.remove('show');
        // 버튼 active 토글
        this.targetBtn = event.currentTarget;
        this.nextBtn = this.targetBtn.nextSibling;
        this.targetBtn.classList.add('active');
        this.nextBtn.classList.remove('active'); 
      } else if (type == 'second') {
        // tab content show/hide
        this.$refs.firstSection.classList.remove('show');
        this.$refs.secondSection.classList.add('show');
        // 버튼 active 토글
        this.targetBtn = event.currentTarget;
        this.prevBtn = this.targetBtn.previousSibling;
        this.targetBtn.classList.add('active');
        this.prevBtn.classList.remove('active');
      }
    },
    

  //   var $noticeBox = $('.notice-list');
  //   var $noticeTitle = $noticeBox.find('.title-box');
  //   $noticeTitle.on('click', function () {
  //   var $this = $(this);
  //   var $parent = $this.closest($noticeBox);
  //   var $contentBox = $parent.find($('.content-box'));
  //   var contentBoxHeight = $contentBox.find('.text-container').outerHeight();
  //   var idx = $parent.index();

  //   // 초기화
  //   var $grandparent = $this.parents('.notice-list-container');
  //   $grandparent.find($noticeBox).not(':eq(' + idx + ')').removeClass('active');
  //   $grandparent.find($noticeBox).not(':eq(' + idx + ')').find($('.content-box')).css({
  //     "height": "0"
  //   });
    
  //   // 펼침/접힘 및 active 클래스 토글
  //   if ($parent.hasClass('active')) {
  //     $parent.removeClass('active');
  //     $contentBox.css({
  //       "height": "0"
  //     });
  //   } else {
  //     $parent.addClass('active');
  //     $contentBox.css({
  //       "height" : contentBoxHeight
  //     });
  //     $contentBox.height(contentBoxHeight);
  //   }
  }
};
</script>

<style lang="scss" scoped>

.wrapper {
  background-color: #f7f8fb;
}
.support-block-container {
  @include flex(row, space-between, center);
  width: 137.1rem;
  margin: 0 auto;
  padding-top: 8rem;
  .support-block-box {
    @include flex(row, space-between, center);
    width: calc(33.33% - 1.28rem);
    height: 15.8rem;
    padding: 0 3.5rem;
    border-radius: 2rem;
    background-color: $white;
    box-shadow: 0 0.4rem 3rem 1.3rem rgba(67, 66, 146, 0.08);
    &.show-inquiry-popup {
      cursor: pointer;
    }
    .info-box {
      flex: 1;
      padding-left: 2.4rem;
    }
    .img-box {
      width: 10rem;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .title-box {
      @include font(2.4rem, 700, #08090e, 3.5rem);
      word-break: keep-all;
    }
    .desc-box {
      margin-top: 0.4rem;
      @include font(2rem, 500, #61606c, 2.9rem);
      word-break: break-all;
    }
  }
}
.section-container {
  display: none;
  &.show {
    display: block;
  }
}


// 태블릿
@media #{$tablet} {
  .support-block-container {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    .support-block-box {
      padding: 0 2rem;
      .title-box {
        font-size: 2rem;
      }
      .desc-box {
        font-size: 1.8rem;
      }
      .img-box {
        width: 8rem;
      }
    }
  }

  .notice-container {
    width: 100%;
    .notice-area {
      .notice-bottom-container {
        padding: 0 2rem;
      }
    }
  }
}

// 모바일
@media #{$mobile} {
  .main-title-container {
    padding: 3.2rem 2rem 2rem;
  }
  .support-block-container {
    @include flex(column, flex-start, flex-start);
    padding-top: 0;
    .support-block-box {
      width: 100%;
      height: auto;
      padding: 1.4rem;
      border-radius: 1.2rem;
      &:not(:first-of-type) {
        margin-top: 1rem;
      }
      .img-box {
        width: 4.4rem;
      }
      .info-box {
        padding-left: 1rem;
      }
      .title-box {
        font-size: 1.4rem;
        line-height: 2rem;
      }
      .desc-box {
        margin-top: 0.2rem;
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
    }
  }
  .notice-container {
    .notice-area {
      padding: 4rem 0 6rem;
      .notice-bottom-container {
        margin-top: 2.4rem;
      }
    }
  }
}

@media #{$mobile_1} {
  .notice-container {
    .notice-area {
      .notice-list-container {
        .notice-list {
          padding: 1.2rem 0;
          &.active {
            .title-box {
              &::after {
                transform: rotate(180deg);
              }
            }
          }
          &:first-of-type {
            padding: 0 0 1.2rem;
          }
          .content-box {
            .text-container {
              padding-top: 1rem;
              .text-area {
                padding: 1.2rem 1.6rem;
                border-radius: 1.2rem;
                .text {
                  font-size: 1.4rem;
                  line-height: 2.3rem;
                }
              }
            }
          }
          .title-box {
            @include flex(column, flex-start, flex-start);
            padding-right: 3rem;
            font-size: 1.4rem;
            line-height: 2rem;
            &::after {
              top: 2.3rem;
              right: 0;
              width: 1.6rem;
              height: 1.6rem;
              transform: none;
            }
            .num {
              display: none;
            }
            .category {
              margin: 0 0 0.4rem 0;
              font-size: 1.2rem;
              line-height: 1.7rem;
            }
          }
        }
      }
    }
  }
}
</style>
