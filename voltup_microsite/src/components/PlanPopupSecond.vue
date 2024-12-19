<template>
  <div class="popup-container flat-rate-system">
    <div class="dim" @click="closePopup"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>실속형 구독 요금제</span>
          </div>
          <button
            type="button"
            class="btn-icon-close"
            @click="closePopup"
          ></button>
        </div>
        <div class="popup-bottom">
          <div class="flat-rate-system-container">
            <div class="flat-rate-system-area">
              <div class="flat-rate-system-desc-box">
                <p>장거리 운전자라면 볼트업 구독을 신청 해 보세요.</p>
              </div>

              <div class="flat-rate-system-info-box">
                <div class="flat-rate-system-info-title-box">
                  <span>볼트업 구독 요금제란?</span>
                </div>

                <div class="flat-rate-system-info-desc-box">
                  <p>
                    ∙ 월 이용료 (9,900원/월) 납부 시, 충전단가의 30%를 할인 해
                    주는 요금제
                  </p>
                </div>

                <div class="flat-rate-system-info-list-box">
                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title">
                      <span>[구독 요금제 월 이용 금액 예시 : 회원가 적용]</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 월 사용량 100kWh : 9,900원 + (100kWh X 300원 X
                        30%할인) = 30,900원<br />
                        ∙ 월 사용량 200kWh : 9,900원 + (200kWh X 300원 X
                        30%할인) = 51,900원<br />
                        ∙ 월 사용량 500kWh : 9,900원 + (500kWh X 300원 X
                        30%할인) = 114,900원
                      </span>
                    </div>
                  </div>

                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title">
                      <span>[유의사항]</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 월중 가입/해지시 충전요금은 일할 계산 하여 후불
                        청구되며,<br />
                        타요금제로의 변경은 월중1회만 가능합니다.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit('updateData', false)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~Scss/popup.scss";
</style>
