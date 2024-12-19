<template>
  <div class="popup-container inquiry-popup">
    <div class="dim"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>충전기 설치 신청하기</span>
          </div>
          <button type="button" class="btn-icon-close"></button>
        </div>
        <div class="popup-bottom">
          <div class="inquiry-container">
            <form
              class="gform pure-form pure-form-stacked"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbwyIIA3exBkDDOixcQG4NW_41JUm1T2e2F90GRKvbzlO2At36wwdbHSBjaSP52R-Pll/exec"
            >
              <div class="loader" style="display: none"></div>

              <div class="form-elements">
                <div class="field-box">
                  <div class="inquiry-info-container">
                    <div class="title-box">
                      <p>
                        전기차 충전기 설치 관련 문의 사항이 있으시다면, 아래
                        양식에 맞춰 문의사항을 남겨 주세요.<br />
                        볼트업에서 고객님께 연락 드리겠습니다.
                      </p>
                    </div>
                    <div class="desc-box">
                      <span
                        >아래 내용 입력 후, ‘신청하기' 버튼을 눌러주세요.</span
                      >
                    </div>
                  </div>

                  <!-- 개인정보 수집 동의(필수) -->
                  <div class="field-container">
                    <!-- .active : 약관 내용 노출 -->
                    <div class="privacy-container">
                      <div class="privacy-label-box">
                        <label class="field-label" for="agree"
                          >개인정보 수집 동의(필수)</label
                        >
                      </div>
                      <div class="privacy-content-box">
                        <div class="privacy-content">
                          <p class="small desc">
                            고객님의 문의사항에 대한 안내를 위해 다음과 같이
                            개인정보를 활용 합니다.
                          </p>
                          <p class="large">1. 개인정보 수집 및 이용</p>
                          <div class="table">
                            <div class="thead">
                              <div class="tr">
                                <div class="th">
                                  <span>개인정보 수집 항목</span>
                                </div>
                                <div class="th">
                                  <span>수집 및 이용목적</span>
                                </div>
                                <div class="th">
                                  <span>보유 및 이용기간</span>
                                </div>
                              </div>
                            </div>
                            <div class="tbody">
                              <div class="tr">
                                <div class="td">
                                  <span>
                                    성명, 연락처,<br />
                                    고객문의 사항<br />
                                    (입력 내용이 있는 경우에 한함)
                                  </span>
                                </div>
                                <div class="td">
                                  <span>설치문의에 대한 고객 안내</span>
                                </div>
                                <div class="td">
                                  <span>
                                    문의 요청 후 1개월 이내에 개인정보 처리<br />
                                    목적 달성 시까지 보유 및 이용 후<br />
                                    폐기 합니다.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="large">
                            2. 동의 거부권 및 미동의에 대한 불이익 안내
                          </p>
                          <p class="small">
                            고객님은 개인정보 동의를 거부하실 수 있으며,
                            동의하지 않으실 경우 서비스 이용이 제한될 수
                            있습니다.
                          </p>
                        </div>
                      </div>
                      <div class="field-form short require">
                        <input
                          type="text"
                          maxlength="5"
                          id="agree1"
                          placeholder="동의합니다"
                        />
                        <div class="notice-box">
                          <span>* 동의 시, ‘동의합니다’라고 입력해주세요.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 개인정보 제3자 제공(필수) -->
                  <div class="field-container">
                    <!-- .active : 약관 내용 노출 -->
                    <div class="privacy-container">
                      <div class="privacy-label-box">
                        <label class="field-label" for="agree"
                          >개인정보 제3자 제공(필수)</label
                        >
                      </div>
                      <div class="privacy-content-box">
                        <div class="privacy-content">
                          <p class="small desc">
                            고객님의 문의사항에 안내 드리기 위해, 다음과 같이
                            개인정보를 제공합니다.
                          </p>
                          <p class="large">1. 개인정보 제공</p>
                          <div class="table">
                            <div class="thead">
                              <div class="tr">
                                <div class="th">
                                  <span>제공받는 자</span>
                                </div>
                                <div class="th">
                                  <span>제공 목적</span>
                                </div>
                                <div class="th">
                                  <span>제공 정보 항목</span>
                                </div>
                                <div class="th">
                                  <span>보유기간</span>
                                </div>
                              </div>
                            </div>
                            <div class="tbody">
                              <div class="tr">
                                <div class="td">
                                  <span>㈜LG 헬로비전</span>
                                </div>
                                <div class="td">
                                  <span>설치문의에 대한 고객 안내</span>
                                </div>
                                <div class="td">
                                  <span>
                                    성명, 연락처, 고객문의 사항<br />
                                    (입력 내용이 있는 경우에 한함)
                                  </span>
                                </div>
                                <div class="td">
                                  <span>
                                    개인정보 제공시점부터 1개월<br />
                                    보유기간 경과 후 즉시삭제
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="large">
                            2. 동의 거부권 및 미동의에 대한 불이익 안내
                          </p>
                          <p class="small">
                            고객님의 문의사항에 안내 드리기 위해, 다음과 같이
                            개인정보를 제공합니다.
                          </p>
                        </div>
                      </div>
                      <div class="field-form short require">
                        <input
                          type="text"
                          maxlength="5"
                          id="agree2"
                          placeholder="동의합니다"
                        />
                        <div class="notice-box">
                          <span>* 동의 시, ‘동의합니다’라고 입력해주세요.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 신청자명 -->
                  <div class="field-container">
                    <label class="field-label" for="name"
                      >신청자명 (필수)</label
                    >
                    <div class="field-form short require">
                      <input
                        type="text"
                        maxlength="5"
                        id="name"
                        name="신청자명"
                        placeholder="이름을 입력해주세요."
                      />
                    </div>
                  </div>
                  <!-- 연락처 -->
                  <div class="field-container">
                    <label class="field-label" for="phone">연락처 (필수)</label>
                    <div class="field-form short require">
                      <input
                        type="number"
                        id="phone"
                        name="연락처"
                        placeholder="연락처를 입력해주세요."
                      />
                    </div>
                  </div>
                  <!-- 설치 요청 위치(주소) -->
                  <div class="field-container">
                    <label class="field-label" for="address"
                      >설치 요청 위치(주소)</label
                    >
                    <div class="field-form">
                      <input
                        type="text"
                        id="address"
                        name="설치 요청 위치(주소)"
                        placeholder="주소를 입력해주세요."
                      />
                    </div>
                  </div>
                  <!-- 설치 요청 수량 -->
                  <div class="field-container">
                    <label class="field-label">설치 요청 수량</label>
                    <div class="quantity-container">
                      <div class="field-form mini">
                        <span class="category">완속</span>
                        <input
                          type="text"
                          id="quantity-01"
                          name="완속"
                          placeholder="00대"
                        />
                      </div>
                      <div class="field-form mini">
                        <span class="category">급속</span>
                        <input
                          type="text"
                          id="quantity-02"
                          name="급속"
                          placeholder="00대"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- 그 외 요청 사항 -->
                  <div class="field-container">
                    <label class="field-label" for="request"
                      >그 외 요청 사항</label
                    >
                    <div class="field-form">
                      <textarea
                        name="그 외 요청 사항"
                        id="request"
                        cols="30"
                        rows="10"
                        placeholder="요청사항을 입력해주세요."
                      ></textarea>
                    </div>
                  </div>

                  <fieldset
                    class="pure-group honeypot-field"
                    style="display: none"
                  >
                    <label for="honeypot"
                      >To help avoid spam, utilize a Honeypot technique with a
                      hidden text field; must be empty to submit the form!
                      Otherwise, we assume the user is a spam bot.</label
                    >
                    <input id="honeypot" type="text" name="honeypot" value="" />
                  </fieldset>
                </div>

                <div class="inquiry-button-box">
                  <button
                    class="btn-submit button-success pure-button"
                    disabled
                  >
                    <span>문의하기</span>
                  </button>
                </div>
              </div>
              <div class="thankyou_message" style="display: none">
                <div class="submit-complete-box">
                  <p>접수 완료되었습니다!</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {

      };
  },
};
</script>

<style lang="scss" scoped>
@import "~Scss/popup.scss";
// 설치 신청 팝업 style
.inquiry-popup {
  display: none;
  &.popup-container {
    .popup-area {
      .popup-box {
        height: 87.5%;
      }
      .popup-top {
        height: auto;
      }
      .popup-bottom {
        // overflow: unset;
        // margin: 2.2rem 0 0 0;
        flex: 1;
        @include flex(row, space-between, flex-start);
        overflow: hidden;
        margin: 3.8rem 0 0 0;
      }
    }
  }
  .thankyou_message {
    height: 100%;
    .submit-complete-box {
      @include flex(row, center, center);
      height: 100%;
      p {
        @include font(3.2rem, 500, #000, 4.6rem);
        &::before {
          content: '';
          display: block;
          width: 10rem;
          height: 10rem;
          margin: 0 auto 2rem;
          background: url("~Image/ic_popup_complete.svg") no-repeat 100% center / 10rem;
          
        }
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .inquiry-container {
    // @include flex(column, flex-start, center);
    // padding-right: 5.8rem;
    width: 100%;
    height: 100%;
    .gform {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .loader {
      z-index: 999;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &::before {
        content: '';
        display: block;
        width: 10rem;
        height: 10rem;
        animation: rotate 1s infinite linear;
        background: url("~Image/ic_popup_loader.svg") no-repeat center / 10rem;
      }
    }
    .form-elements {
      @include flex(column, space-between, center);
      width: 100%;
      height: 100%;
      padding-top: 2.4rem;
      border-top: 1px solid #dbdbdb;
      .field-box {
        flex: 1;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        // height: 58rem;
        padding-right: 5.8rem;
        box-sizing: border-box;
      }
    }
  }
  .inquiry-info-container {
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid #dbdbdb;
    .title-box {
      @include font(2rem, 500, $black, 3.4rem);
    }
    .desc-box {
      margin-top: 2.6rem;
      @include font(1.6rem, 500, #666, 2.3rem);
    }
  }
  .inquiry-field-container {
    @include flex(column, flex-start, flex-start);
  }
  .field-container {
    width: 100%;
    margin-top: 2rem;
    .field-label {
      @include font(1.8rem, 500, $black, 2.6rem);
    }
    .field-form {
      margin-top: 1rem;
      &.short {
        input {
          width: 27.8rem;
        }
      }
      &.mini {
        input {
          width: 16.2rem;
        }
      }
      input,
      textarea {
        -webkit-appearance: none;
        margin: 0;
        padding: 1.1rem 1.6rem 1rem 1.6rem;
        border: none;
        border-radius: 0.6rem;
        background-color: #F6F6F6;
        @include font(1.6rem, 500, $black, 2.3rem);
        font-family: 'Noto Sans KR', 'sans-serif';
        &::placeholder {
          color: #999;
        }
        &:focus {
          outline: none;
        }
      }
      input {
        width: 100%;
        height: 4.4rem;
        margin: 0;
      }
      input[type=number] {
        -moz-appearance:textfield; /* Firefox */
        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
          margin: 0 !important;
        }      
      }
      textarea {
        overflow: auto;
        vertical-align: top;
        resize: none;
        width: 100%;
        height: 11.3rem;
        padding: 1.1rem 1.6rem 1rem 1.6rem;
        border: none;
        border-radius: 0.6rem;
        background-color: #f6f6f6;
        @include font(1.6rem, 500, $black, 2.3rem);
      }
    }
  }
  .privacy-container {
    .privacy-label-box {
      &.active {
        &::after {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
    .privacy-label-box {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        width: 2.4rem;
        height: 2.4rem;
        background: url("~Image/ic_support_arrow_down.svg") no-repeat 100% center;
        transform: translateY(-50%);
      }
    }
    .privacy-content-box {
      overflow: hidden;
      height: 0;
      transition: height 0.3s linear;
      .privacy-content {
        border-radius: 1rem;
        background-color: #f6f6f6;
        padding: 2rem 3rem;
        p {
          word-break: keep-all;
          &.small {
            @include font(1.6rem, 400, #666, 2.7rem);
            &.desc {
              margin-bottom: 2rem;
            }
          }
          &.large {
            margin-bottom: 0.8rem;
            @include font(1.8rem, 500, #000, 2.6rem);
          }
        }

        .table {
          margin-bottom: 2rem;
          border: 1px solid #666;
          .tr {
            display: flex;
            .th,
            .td {
              flex: 1;
              border-left: 1px solid #666;
              &:first-child {
                border-left: 0;
              }
            }
          }
          .thead {
            .tr {
              .th {
                border-bottom: 1px solid #666;
                @include flex(row, center, center);
                background-color: #DDDDDD;
                padding: 1.4rem 1.2rem;
                @include font(1.4rem, 500, #000, 1.8rem);
                text-align: center;
                word-break: keep-all;
              }
            }
          }
          .tbody {
            .tr {
              .td {
                @include flex(row, center, center);
                background-color: #fff;
                padding: 1.8rem 1.2rem;
                @include font(1.6rem, 500, #333, 2rem);
                text-decoration: underline;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .notice-box {
      margin-top: 0.6rem;
      @include font(1.2rem, 500, #666, 1.7rem);
    }
  }
  .quantity-container {
    @include flex(row, flex-start, center);
    .field-form {
      &+.field-form {
        margin-left: 3rem;
      }
      .category {
        margin-right: 1rem;
        @include font(1.6rem, 500, #666, 2.3rem);
      }
    }
  }
  .inquiry-button-box {
    @include flex(row, center, center);
    width: 100%;
    padding-top: 2rem;
    .btn-submit {
      @include flex(row, center, center);
      width: 21.2rem;
      height: 5.5rem;
      border: none;
      border-radius: 2rem;
      background-color: $point-pink;
      @include font(1.6rem, 700, $white, 2.3rem);
      &:disabled {
        border: 0.2rem solid #8C8B9A;
        background-color: transparent;
        color: #8C8B9A;
        opacity: 0.5;
      }
    }
  }
}

// mobile
@media #{$mobile} {
  .inquiry-popup {
    &.popup-container {
      .popup-area {
        .popup-bottom {
          width: 100%;
          margin-top: 0;
          padding-bottom: 0;
        }
      }
    }

    .inquiry-container {
      width: 100%;
      .form-elements {
        padding-top: 0;
        border: 0;
        .field-box {
          width: 100%;
          padding-top: 2rem;
          padding-bottom: 10rem;
          padding-right: 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }       
        }
      }
    }

    .inquiry-info-container {
      border-bottom-width: 1px;
      .title-box {
        font-size: 1.4rem;
        line-height: 2.2rem;
        word-break: keep-all;
      }

      .desc-box {
        margin-top: 2rem;
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
    }

    .field-container {
      margin-top: 2.2rem;
      .field-label {
        font-size: 1.4rem;
        line-height: 2rem;
      }

      .field-form {
        margin-top: 0.8rem;
        &.short {
          input {
            width: 100%;
          }
        }
        &.mini {
          input {
            flex: 1;
            width: inherit;
          }
        }
        input,
        textarea {
          padding: 1.2rem;
          font-size: 1.4rem;
          line-height: 2rem;
        }
      }
    }

    .privacy-container {
      .privacy-label-box {
        &::after {
          width: 2rem;
          height: 2rem;
          background-size: 2rem;
        }
      }

      .privacy-content-box {
        .privacy-content {
          border-radius: 0.6rem;
          padding: 1.2rem;
          p {
            &.small {
              font-size: 1.4rem;
              line-height: 2rem;
            }
            &.large {
              font-size: 1.6rem;
              line-height: 2rem;
            }
          }
        }
      }
    }

    .quantity-container {
      margin: 0 -0.8rem;
      .field-form {
        @include flex(row, flex-start, center);
        width: calc(50% - 1.6rem);
        margin: 0 0.8rem;
        + .field-form {
          margin-left: 0.8rem;
        }
        .category {
          margin-right: 0.6rem;
          font-size: 1.4rem;
          line-height: 2rem;
          white-space: nowrap;
        }
      }
    }

    .inquiry-button-box {
      position: fixed;
      bottom: 0;
      left: 0;
      display: block;
      // width: calc(100% + 4rem);
      width: 100%;
      padding: 0;
      background-color: #fff;
      .btn-submit {
        width: 100%;
        height: 5rem;
        border-radius: 0;
        &:disabled {
          border: 0;
          border-top: 1px solid #8C8B9A;
        }
      }
    }

    .thankyou_message {
      .submit-complete-box {
        p {
          font-size: 2rem;
          line-height: 2.9rem;
          &::before {
            width: 5rem;
            height: 5rem;
            background-size: 5rem;
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
