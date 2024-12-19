<template>
  <div class="wrapper announce">
    <header-comp></header-comp>

    <main class="main">
      <div class="announce-container">
        <div class="announce-area">
          <div class="announce-middle">
            <div class="deco-image-box">
              <img src="~Image/img_announce_01.svg" class="deco-image" alt="" />
            </div>
            <div class="message-box">
              <p class="message">
                죄송합니다. 지금은 서비스 정기 점검 중입니다.<br />점검시간 및
                자세한 내용은 아래와 같습니다.
              </p>
            </div>
            <div class="date-box">
              <div class="text-box reason">
                <span>1. 점검안내 : 서비스 안정화를 위한 서버 증축</span>
              </div>
              <div class="text-box date">
                <span
                  >2. 점검시간 : 2018.01.02 AM 09:00 ~ 2018.01.02 AM 9:30</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "AnnounceMaintenance",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style lang="scss" scoped>
@import "~Scss/announce.scss";

.header:deep() {
  .left-box {
    .logo-box {
      pointer-events: none;
    }
  }
}
</style>
