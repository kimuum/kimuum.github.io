<template>
  <footer class="footer">
    <!-- Footer -->
    <div class="footer-container">
      <div class="footer-area">
        <div class="footer-top">
          <div class="left-box">
            <div class="left-top-box">
              <ul class="footer-list-box">
                <li class="footer-list">
                  <a :href="'https://www.lguplus.com/about/ko'" target="_blank"><span>회사소개</span></a>
                </li>
                <li class="footer-list strong">
                  <button type="button" class="btn-footer-popup" @click="showPopup('privacy')">개인정보처리방침</button>
                </li>
                <li class="footer-list">
                  <button type="button" class="btn-footer-popup" @click="showPopup('terms')">이용약관</button>
                </li>
              </ul>
            </div>
            <div class="left-bottom-box">
              <div class="info">
                <span>㈜엘지유플러스 서울특별시 용산구 한강대로 32</span>
                <span>대표이사 황현식 사업자등록번호 220-81-39938</span>
                <span>통신판매신고 제 2015-서울용산-00481호</span>
                <a :href="'https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208139938'" target="_blank">
                  <span>사업자정보확인</span>
                </a>
              </div>
              <span>Copyright ⓒ LG Uplus Corp. All Rights Reserved.</span>
            </div>
          </div>
          <div class="right-box">
            <div class="icon-box"></div>
            <div class="info-box">
              <span class="title">365일&nbsp;<span class="strong">24시간</span>&nbsp;고객센터</span>
              <span class="contact">전화문의&nbsp;<span class="info">1660-0<span class="strong-365">365</span> (24시간, 유료)</span></span>
              <span class="contact">Email 문의&nbsp;<span class="info">voltup@lguplus.co.kr</span></span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <ul class="footer-list-box">
            <li class="footer-list">
              <a :href="'https://ethics.lg.co.kr/realName/insertDetailForm.do'" target="_blank">
                <img src="~Image/footer_02.png" alt="정도경영 사이버신문고">
                <span>정도경영 사이버신문고</span>
              </a>
            </li>
            <li class="footer-list">
              <a :href="'http://www.wiseuser.go.kr/'" target="_blank">
                <img src="~Image/footer_03.png" alt="방송통신 이용자 정보포털">
                <span>방송통신 이용자 정보포털</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!-- 개인정보처리방침 팝업 -->
  <privacy-popup :class="{ show : setPrivacyPopup }" @updateData="closePopup('privacy')"></privacy-popup>
  <!-- 이용약관 팝업 -->
  <terms-popup :class="{ show : setTermsPopup }" @updateData="closePopup('terms')"></terms-popup>

</template>

<script>
import PrivacyPopup from '@/components/PrivacyPopup.vue';
import TermsPopup from '@/components/TermsPopup.vue';

export default {
  name: 'FooterComp',
  components: {
    PrivacyPopup,
    TermsPopup
  },
  data() {
    return {
      setPrivacyPopup : false,
      setTermsPopup : false
    };
  },
  methods: {
    showPopup(type) {
      document.body.classList.add('scroll-lock');
      if (type == 'privacy') {
        this.setPrivacyPopup = !this.setPrivacyPopup;
      } else if (type == 'terms') {
        this.setTermsPopup = !this.setTermsPopup;
      }
    },
    closePopup(type) {
      document.body.classList.remove('scroll-lock');
      if (type == 'privacy') {
        this.setPrivacyPopup = false;
      } else if (type == 'terms') {
        this.setTermsPopup = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &.dark-grey {
    .footer-container {
      background-color: #08090E;
    }
  }
}

.footer-container {
  padding: 7.5rem 0 10rem;
  background-color: $black;
  .footer-area {
    width: 137.1rem;
    margin: 0 auto;
  }
  .footer-top {
    @include flex(row, flex-start, flex-start);
    .left-box {
      @include flex(column, flex-start, flex-start);
      padding-right: 3rem;
      .left-top-box {
        .footer-list-box {
          @include flex(row, flex-start, center);
        }
        .footer-list {
          position: relative;
          padding: 0 1rem;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 1px;
            height: 1.4rem;
            background-color: #666666;
            transform: translateY(-50%);
          }
          &:first-of-type {
            padding: 0 1rem 0 0;
            &::before {
              display: none;
            }
          }
          >a,
          >button {
            @include font(1.4rem, 400, #eeeeee, 2rem);
            font-family: 'Noto Sans', 'sans-serif';
          }

          &.strong {
            >button {
              font-weight: 700;
            }
          }
        }
      }
      .left-bottom-box {
        margin-top: 1.4rem;
        @include font(1.2rem, 400, #a7a7a7, 1.8rem);
        .info {
          @include flex(row, flex-start, flex-start);
          margin-bottom: 0.6rem;
          word-break: keep-all;
          a {
            @include flex(row, flex-start, center);
            position: relative;
            margin-left: 1rem;
            padding-right: 1.2rem;
            @include font(1.2rem, 400, #fff, 1.8rem);
            &::after {
              content: '';
              top: 0.1rem;
              position: relative;
              display: block;
              width: 1.4rem;
              height: 1.4rem;
              margin-left: 0.2rem;
              background: url("~Image/footer_arrow.svg") no-repeat center / 1.4rem;
            }
          }
        }
      }
    }
    .right-box {
      @include flex(row, flex-start, center);
      position: relative;
      padding-left: 3rem;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background-color: #666;
      }
      .icon-box {
        position: relative;
        min-width: 7rem;
        min-height: 7rem;
        margin-right: 1.4rem;
        border-radius: 50%;
        background-color: $white;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 3.2rem;
          height: 3.2rem;
          background: url("~Image/footer_help.svg") no-repeat 100% center/cover;
          transform: translate(-50%, -50%);
        }
      }
      .info-box {
        @include flex(column, flex-start, flex-start);
        .title {
          @include font(1.4rem, 700, #eee, 2rem);
          .strong {
            color: $point-pink;
          }
        }
        .contact {
          @include font(1.2rem, 700, $white, 1.8rem);
          white-space: nowrap;
          .info {
            font-weight: 400;
          }
        }
      }
    }
  }
  .footer-bottom {
    margin-top: 3.2rem;
    .footer-list-box {
      @include flex(row, flex-start, center);
    }
    .footer-list {
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
      a {
        @include flex(row, flex-start, center);
        @include font(1.2rem, 400, #a7a7a7, 1.8rem);
        img {
          display: block;
          width: auto;
          height: 4rem;
        }
        span {
          margin-left: 0.8rem;
          white-space: nowrap;
        }
      }
    }
  }
}

// 태블릿
@media #{$tablet} {
  .footer-container {
    .footer-area {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}
@media #{$mobile} {
  .footer-container {
    padding: 5.5rem 4rem 6rem;
    .footer-area {
      width: 100%;
      padding: 0;
    }
    .footer-top {
      @include flex(column, flex-start, flex-start);
      width: 100%;
      .left-box {
        width: 100%;
        padding: 0;
        .left-top-box {
          .footer-list {
            &::before {
              height: 1.2rem;
            }
            >a,
            >button {
              @include font(1.2rem, 400, #eeeeee, 1.7rem);
              font-family: 'Noto Sans', 'sans-serif';
            }
          }
        }
        .left-bottom-box {
          margin-top: 2rem;
          padding-bottom: 3rem;
          @include font(1rem, 400, #a7a7a7, 1.4rem);
          .info {
            @include flex(column, flex-start, flex-start);
            margin-bottom: 1rem;
            a {
              margin: 1rem 0 0 0;
              padding-right: 1.4rem;
              @include font(1.2rem, 400, $white, 1.7rem);
              &::after {
                width: 1.2rem;
                height: 1.2rem;
                background: url("~Image/m_ic_arrow_right_w_12.svg") no-repeat 100% center;
              }
            }
          }
        }
      }
      .right-box {
        width: 100%;
        padding: 3rem 0 0 0;
        &::before {
          width: 100%;
          height: 1px;
        }
        .icon-box {
          min-width: 5rem;
          min-height: 5rem;
          margin-right: 1rem;
          &::after {
            width: 2.3rem;
            height: 2.3rem;
          }
        }
        .info-box {
          .title {
            margin-bottom: 0.6rem;
            font-size: 1.2rem;
            line-height: 1.7rem;
          }
          .contact {
            font-size: 1rem;
            line-height: 1.4rem;
            & + .contact {
              margin-top: 0.2rem;
            }
          }
        }
      }
    }
    .footer-bottom {
      margin-top: 3.6rem;
      .footer-list-box {
        @include flex(column, flex-start, flex-start);
        &:not(:last-of-type) {
          margin-top: 0.6rem;
        }
      }
      .footer-list {
        &:not(:last-of-type) {
          margin: 0 0 0.6rem 0;
        }
        a {
          img {
            height: 2rem;
          }
          span {
            margin-left: 0.4rem;
          }
        }
      }
    }
  }
}
</style>