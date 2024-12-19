<template>
  <header class="header" :class="{ 'light-theme' : lightTheme }" ref="header">
    <!-- Header -->
    <div class="header-container">
      <div class="header-area">
        <div class="left-box">
          <!-- Logo: Voltup -->
          <router-link to="/" class="logo-box" title="Voltup">
            <span class="voltup">
              <img src="~Image/img_logo_header_voltup.svg" alt="Volt Up" />
            </span>
          </router-link>
        </div>
        <!-- GNB -->
        <nav class="gnb">
          <div class="gnb-area">
            <ul class="gnb-box">
              <li class="gnb-list" :class="{ 'active' : currentPageName === 'product' }">
                <router-link to="/ProductInstruction" class="gnb-link">
                  <span>충전기 및 설치 절차</span>
                </router-link>
              </li>
              <li class="gnb-list" :class="{ 'active' : currentPageName === 'app' }">
                <router-link to="/AppService" class="gnb-link">
                  <span>APP 서비스</span>
                </router-link>
              </li>
              <li class="gnb-list" :class="{ 'active' : currentPageName === 'howtouse' }">
                <router-link to="/HowToUse" class="gnb-link">
                  <span>이용 방법</span>
                </router-link>
              </li>
              <li class="gnb-list" :class="{ 'active' : currentPageName === 'support' }">
                <router-link to="/CustomerSupport" class="gnb-link">
                  <span>고객 지원</span>
                </router-link>
              </li>
            </ul>
            <div class="mobile-uplus-box">
              <a :href="'https://www.lguplus.com/'" class="mobile-uplus-link" target="_blank">
                <span>
                  <img src="~Image/m_img_logo_header_lg.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </nav>
        <div class="right-box">
          <!-- Logo: LGUplus -->
          <a :href="'https://www.lguplus.com/'" target="_blank" class="logo-box" title="LGUplus">
            <span class="lguplus default">
              <img src="~Image/img_logo_header_lg_b.svg" alt="LG U+" />
            </span>
            <span class="lguplus main-logo">
              <img src="~Image/img_logo_header_lg_w.svg" alt="LG U+" />
            </span>
          </a>
          <a class="hamburger-box">
            <button type="button" class="btn btn-menu-open"></button>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['currentPageName', 'headerTheme'],
  data() {
      return {
        lightTheme: false,
        scrollTop: 0,
        headerHeight: 0
      };
  },
  created() {
    if(this.headerTheme) {
      this.lightTheme = true;
    } else {
      this.lightTheme = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.headerHeight = this.$refs.header.clientHeight;
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.scrollTop = window.top.scrollY;
      if(!this.headerTheme) {
        if (this.scrollTop > this.headerHeight) {
          // 헤더 < 스크롤 값 light theme
          this.lightTheme = true;
        } else {
          this.lightTheme = false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  &.light-theme {
    .header-container {
      background-color: $white;
    }
    .header-area {
      .logo-box {
        .default {
          display: block;
        }
        .main-logo {
          display: none;
        }
      }
    }
    .gnb-list {
      &.active {
        .gnb-link {
          color: $black !important;
        }
      }
      .gnb-link {
        color: #8c8b9a !important;
        opacity: 1;
      }
    }
    .hamburger-box {
      .btn-menu-open {
        background: url("~Image/m_ic_co_menu_b.svg") no-repeat 100% center/cover;
      }
    }
  }
  .header-container {
    width: 100%;
    height: 8rem;
    background-color: transparent;
    transition: 0.2s background;
  }
  .header-area {
    @include flex(row, space-between, center);
    position: relative;
    height: 100%;
    width: 137.1rem;
    margin: 0 auto;
    .left-box,
    .right-box {
      z-index: 12;
    }
    .logo-box {
      display: block;
      .voltup {
        display: block;
        width: 14.5rem;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .lguplus {
        width: 9.4rem;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .default {
        display: none;
      }
      .main-logo {
        display: block;
      }
    }
  }
  .gnb {
    z-index: 11;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    .gnb-area {
      height: 100%;
    }
    .gnb-box {
      @include flex(row, center, center);
      height: 100%;
    }
    .gnb-list {
      @include flex(row, center, center);
      height: 100%;
      padding: 0 2.4rem;
      transition: 0.2s color;
      &.active {
        .gnb-link {
          opacity: 1;
        }
      }
      .gnb-link {
        @include font(1.8rem, 700, $white, normal);
        opacity: 0.6;
      }
    }
    .mobile-uplus-box {
      display: none;
      width: 100%;
      height: 5.4rem;
      margin-bottom: 4rem;
      .mobile-uplus-link {
        @include flex(row, flex-start, center);
        height: 100%;
        position: relative;
        padding: 0 2rem;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 2rem;
          width: 2rem;
          height: 2rem;
          transform: translateY(-50%);
          background: url("~Image/m_ic_arrow_right_20.svg") no-repeat 100%
            center/cover;
        }
        img {
          display: block;
          width: 6.6rem;
          height: 2rem;
        }
      }
    }
  }
  .hamburger-box {
    display: none;
    width: 2.4rem;
    height: 2.4rem;
    .btn-menu-open {
      width: 2.4rem;
      height: 2.4rem;
      background: url("~Image/m_ic_co_menu_w.svg") no-repeat 100% center/cover;
    }
  }
}

@media #{$mobile} {
  .header {
    .header-area {
      .logo-box {
        .voltup {
          width: 8.9rem;
        }
      }
    }
  }
  .open {
    // wrapper
    // dim
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 20;
      width: 100%;
      height: 100%;
      background-color: rgba($black, 0.4);
    }
    .voltup {
      display: block;
    }
    .header {
      left: auto;
      right: 0;
      width: calc(100% - 10rem);
      min-width: 26rem;
      height: 100%;
      background-color: $white;
      .header-container {
        height: 100%;
      }
      .header-area {
        @include flex(row, space-between, flex-start);
        padding-top: 1.4rem;
        .default {
          display: block !important;
        }
        .main-logo {
          display: none !important;
        }
      }
      .gnb {
        display: block;
        top: 5.4rem;
        height: 100%;
        .gnb-area {
          @include flex(column, space-between, flex-start);
          height: calc(100% - 5.4rem);
        }
        .gnb-box {
          @include flex(column, flex-start, flex-start);
          width: 100%;
          height: 100%;
        }
        .gnb-list {
          width: 100%;
          height: 5.4rem;
          padding: 0;
          border-bottom: 1px solid #dbdbdb;
          .gnb-link {
            @include flex(row, flex-start, center);
            width: 100%;
            height: 100%;
            padding: 0 2rem;
            @include font(1.4rem, 500, #333333, 2.2rem);
            color: #333 !important;
            opacity: 1;
            span {
              position: relative;
              width: 100%;
              &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                width: 2rem;
                height: 2rem;
                transform: translateY(-50%);
                background: url("~Image/m_ic_arrow_right_20.svg") no-repeat 100%
                  center/cover;
              }
            }
          }
        }
        .mobile-uplus-box {
          display: block;
        }
      }
    }
    .hamburger-box {
      .btn-menu-open {
        background: url("~Image/m_ic_co_close.svg") no-repeat 100% center/cover !important;
      }
    }
  }
  .header {
    .header-container {
      height: 4.8rem;
    }
    .header-area {
      width: auto;
      padding: 0 2rem;
      .right-box {
        .logo-box {
          display: none;
        }
      }
      .logo-box {
        .voltup {
          width: 8.9rem;
        }
      }
    }
    .gnb {
      display: none;
    }
    .hamburger-box {
      display: block;
    }
  }
}

// 태블릿
@media #{$tablet} {
  .header {
    .header-area {
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}
</style>
