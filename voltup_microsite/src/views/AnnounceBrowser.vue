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
            <div class="title-box">
              <h3 class="title">지원하지 않는 브라우저입니다.</h3>
            </div>
            <div class="message-box">
              <p class="message">
                사용하시는 브라우저는 지원하지 않는 브라우저입니다.<br/>홈인 서비스는 Chrome, Internet Explorer 11 이상의<br/>브라우저에서 쾌적하게 사용하실 수 있습니다.<br/>더 나은 사용 경험을 위해 최신 버전의 브라우저를 설치해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'AnnounceBrowser',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>
@import '~Scss/announce.scss';

</style>