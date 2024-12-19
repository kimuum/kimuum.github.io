<template>
  <div class="floating-button-container">
    <div class="floating-button-box">
      <div class="support-link">
          <div class="support-link-box">
            <router-link to="/CustomerSupport">
                <span class="strong">24H</span>
                <span>고객센터</span>
            </router-link>
          </div>
      </div>
      <button type="button" class="btn-inquiry" @click="setBind">
          <span class="icon-inquiry"></span>
          <span>설치문의</span>
      </button>
      <button type="button" class="btn-top" @click="goTop"></button>
    </div>
  </div>
  <inquiry-popup :class="{ show : isBind }" @updateData="closeTermPopup"></inquiry-popup>
</template>

<script>
import InquiryPopup from "@/components/InquiryPopup.vue";

export default {
  name: "FloatingButton",
  components: {
    InquiryPopup
  },
  data() {
    return {
      isBind : false,
    };
  },
  methods: {
    goTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    setBind() {
      this.isBind = !this.isBind;
    },
    closeTermPopup(bool) {
      // console.log(bool)
      this.isBind = bool;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~Scss/popup.scss';

.floating-button-box {
  @include flex(column, flex-start, center);
  position: fixed;
  z-index: 97;
  bottom: 10rem;
  right: 12rem;
  > button,
  > div {
    display: block;
    overflow: hidden;
    position: relative;
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
    background-color: $white;
    @include font(1.6rem, 700, $black, 2.3rem);
    box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.16);
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: $black;
      opacity: 0;
      transition: 0.2s;
    }
    @media (hover: hover) {
      &:hover {
        &::after {
          opacity: 0.2;
        }
      }
    }
    & + button {
      margin-top: 2rem;
    }
  }
  .support-link {
    .support-link-box {
      @include flex(column, center, center);
      width: 100%;
      height: 100%;
    }
    a {
      @include flex(column, center, center);
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: $white;
      @include font(1.6rem, 700, $black, 2.3rem);
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: $black;
        opacity: 0;
        transition: 0.2s;
      }
      @media (hover: hover) {
        &:hover {
          &::after {
            opacity: 0.2;
          }
        }
      }
      .strong {
        margin-bottom: 0.2rem;
        @include font(2rem, 700, $point-pink, 2.9rem);
      }
    }
  }
  .btn-inquiry {
    @include flex(column, center, center);
    .icon-inquiry {
      width: 3.2rem;
      height: 3.2rem;
      margin-bottom: 0.2rem;
      background: url("~Image/clipboard-check.svg") no-repeat 100% center/cover;
    }
  }
  .btn-top {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4.6rem;
      height: 4.6rem;
      background: url("~Image/floating_top.svg") no-repeat 100% center/cover;
      transform: translate(-50%, -50%);
    }
  }
}

// 모바일
@media #{$mobile} {
  .floating-button-box {
    bottom: 4.5rem;
    right: 2.5rem;
    > button,
    > div {
      width: 4.8rem;
      height: 4.8rem;
      @include font(0.9rem, 700, $black, 1.3rem);
      & + button {
        margin-top: 1rem;
      }
    }
    .support-link {
      a {
        @include font(0.9rem, 700, $black, 1.3rem);
        .strong {
          font-size: 1rem;
          line-height: 1.4rem;
        }
      }
    }
    .btn-inquiry {
      .icon-inquiry {
        width: 1.6rem;
        height: 1.6rem;
        margin-bottom: 0.1rem;
      }
    }
    .btn-top {
      &::before {
        width: 2.3rem;
        height: 2.3rem;
      }
    }
  }
}

// 태블릿
@media #{$tablet} {
  .floating-button-box {
    bottom: 5.2%;
    right: 6.25%;
  }
}
</style>