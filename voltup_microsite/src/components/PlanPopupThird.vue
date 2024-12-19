<template>
  <div class="popup-container flat-rate-system">
    <div class="dim" @click="closePopup"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>전국 로밍 요금</span>
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
                <p>
                  제휴된 사업자와의 로밍 요금입니다.<br />
                  (볼트업 회원이 제휴된 사업자의 충전기에서 충전하는 경우의
                  요금)
                </p>
              </div>

              <div class="flat-rate-system-info-box">
                <div class="flat-rate-system-info-list-box">
                  <div class="flat-rate-system-info-list">
                    <div class="flat-rate-system-info-list-title hidden">
                      <span>hidden</span>
                    </div>
                    <div class="flat-rate-system-info-list-data">
                      <span>
                        ∙ LG헬로플러그 : 300원/kWh<br />
                        ∙ 환경부 : (완속) 324.4원/kWh<br /><br />
                        ※ 요금은 부가세가 포함되어 있으며, 제휴 계약에 따라
                        요금은 변경될 수 있습니다.<br />
                        ※ 타 사업자 회원카드로 볼트업 충전기를 이용하실 때의
                        요금은 각 사업자 홈페이지의 로밍요금 정보를 참고해
                        주시기 바랍니다.
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
