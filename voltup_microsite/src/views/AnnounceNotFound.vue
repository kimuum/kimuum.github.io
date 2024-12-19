<template>
  <div class="wrapper announce">
    <header-comp></header-comp>

    <main class="main">
      <div class="announce-container">
        <div class="announce-area">
          <div class="announce-middle">
            <div class="deco-image-box">
              <img src="~Image/img_announce_02.svg" class="deco-image" alt="" />
            </div>
            <div class="message-box">
              <p class="message">
                요청하신 정보가 변경되거나, 삭제되어 찾을 수 없습니다.<br/>최대한 빠른 시간 내에 원인을 파악하여 정상화하도록 하겠습니다.<br/>불편함을 드려 죄송합니다.
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
  name: 'AnnounceNotFound',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>
@import '~Scss/announce.scss';

</style>