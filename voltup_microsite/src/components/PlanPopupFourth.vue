<template>
  <div class="popup-container flat-rate-system">
    <div class="dim" @click="closePopup"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>U+멤버쉽 등 다양한 제휴 할인</span>
          </div>

          <button type="button" class="btn-icon-close" @click="closePopup"></button>
        </div>
        <div class="popup-bottom">
          <div class="flat-rate-system-container">
            <div class="flat-rate-system-area">
              <div class="flat-rate-system-info-box">
                <div class="flat-rate-system-info-title-box">
                  <span>U+멤버쉽 할인이란?</span>
                </div>

                <div class="flat-rate-system-info-list-box">
                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title hidden">
                      <span>hidden</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 유플러스 멤버라면, 충전단가의 10% 상시 할인<br /><br />
                        ※ 구독 요금 할인 등 타 할인과 중복할인 되지 않습니다.<br />
                        ※ U+멤버십 포인트 차감이 되지 않습니다.
                      </span>
                    </div>
                  </div>

                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title">
                      <span>[U+멤버쉽 할인 적용 예시 : 회원가 적용]</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ 사용량 100kWh : 100kWh X 300원 X 10%할인 = 27,000원<br />
                        ∙ 사용량 200kWh : 200kWh X 300원 X 10%할인 = 54,000원<br />
                        ∙ 사용량 500kWh : 500kWh X 300원 X 10%할인 = 135,000원
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
