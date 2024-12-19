<template>
  <div class="popup-container product-popup">
    <div class="dim" @click="closePopup"></div>
    <div class="popup-area">
      <div class="popup-box">
        <div class="popup-top">
          <div class="title-box">
            <span>충전기 소개</span>
          </div>
          <button
            type="button"
            class="btn-icon-close"
            @click="closePopup"
          ></button>
        </div>
        <div class="popup-bottom">
          <div class="popup-content-container">
            <div class="product-info-container">
              <div class="logo-box">
                <img src="~Image/img_logo_popup_evar.svg" alt="" />
              </div>
              <div class="info-box">
                <span>심플하고 쉬운 사용 인터페이스</span>
                <span>사용량 확인이 가능한 전면 Hidden Display</span>
                <span>친숙하고 부드러운 유선형 디자인</span>
              </div>
            </div>
            <div class="popup-block-container">
              <div class="popup-content-block">
                <div class="popup-left-container">
                  <div class="img-box">
                    <img src="~Image/img_popup_evar.png" alt="" />
                  </div>
                </div>
                <div class="popup-right-container">
                  <div class="info-area">
                    <div class="item-box">
                      <span class="category">입력</span>
                      <span class="info">220V, 60Hz</span>
                    </div>
                    <div class="item-box">
                      <span class="category">출력</span>
                      <span class="info">Max, 220V/32A (7kW)</span>
                    </div>
                    <div class="item-box">
                      <span class="category">설치 구분</span>
                      <span class="info">벽부형</span>
                    </div>
                    <div class="item-box">
                      <span class="category">보호 등급</span>
                      <span class="info">IP44</span>
                    </div>
                  </div>
                  <div class="notice-box">
                    <span
                      >* 충전기의 외관은 적용 사양과 기타 사유로 달라질 수
                      있습니다.</span
                    >
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
      this.$emit("updateData", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~Scss/popup.scss";
</style>
