<template>
  <div class="popup-container flat-rate-system">
    <div class="dim" @click="closePopup"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>사용한만큼 종량 요금제</span>
          </div>
          <button type="button" class="btn-icon-close" @click="closePopup"></button>
        </div>
        <div class="popup-bottom">
          <div class="flat-rate-system-container">
            <div class="flat-rate-system-area">
              <div class="flat-rate-system-desc-box">
                <p>
                  계절/시간에 상관없이 항상 동일한 요금으로 충전한만큼만
                  과금됩니다.
                </p>
              </div>

              <div class="flat-rate-system-info-box">
                <div class="flat-rate-system-info-title-box">
                  <span>볼트업 충전 요금 : 충전량 x 충전 단가</span>
                </div>

                <div class="flat-rate-system-info-list-box">
                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title">
                      <span>[충전 단가]</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 비회원가 : 350원/kWh<br />
                        ∙ 회원가 : 300원/kWh<br />
                        ∙ 프로모션가 : 180원/kWh ('22년 계약 시, '23년 6월까지
                        제공)<br /><br />
                        ※ 모든 요금은 부가세포함된 금액이며, 한전 전기요금
                        변동에 따라 변경될 수 있습니다.
                      </span>
                    </div>
                  </div>

                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title">
                      <span>[종량요금 계산 : 회원가 적용 예시]</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 사용량 100kWh : 100kWh X 300원 = 30,000원<br />
                        ∙ 사용량 200kWh : 200kWh X 300원 = 60,000원<br />
                        ∙ 사용량 500kWh : 500kWh X 300원 = 150,000원
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
