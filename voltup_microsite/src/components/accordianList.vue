<template>
  <div class="notice-container">
    <div class="notice-area">
      <div class="notice-bottom-container">
        <div class="notice-content-container">
          <div class="notice-list-container">
            <ul class="notice-list-box">
              <li
                v-for="(data, key) in data"
                v-bind:key="data"
                class="notice-list"
              >
                <div class="title-box">
                  <span class="num">{{ key + 1 }}</span>
                  <span class="category">{{ data.type }}</span>
                  <span class="title">{{ data.title }}</span>
                </div>

                <div class="content-box">
                  <div class="text-container">
                    <div class="text-area">
                      <div class="text-box">
                        <span class="text" v-html="data.data"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="scss" scoped>
.notice-container {
  width: 137.1rem;
  margin: 0 auto;
  .notice-area {
    padding: 11.8rem 0 12rem;
    .notice-list-container {
      .notice-list-box {
        @include flex(column, flex-start, flex-start);
      }
      .notice-list {
        width: 100%;
        padding: 2rem 0;
        &.active {
          .title-box {
            &::after {
              transform: translateY(-50%) rotate(180deg);
            }
          }
        }
        .title-box {
          @include flex(row, flex-start, center);
          position: relative;
          padding-right: 6.4rem;
          @include font(1.8rem, 500, $black, 2.6rem);
          cursor: pointer;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            right: 2rem;
            width: 2.4rem;
            height: 2.4rem;
            background: url("~Image/ic_support_arrow_down.svg") no-repeat
              100% center/cover;
            transform: translateY(-50%);
          }
          .num {
            width: 2.4rem;
            margin-right: 1.2rem;
            color: $point-pink;
            text-align: center;
          }
          .category {
            position: relative;
            margin-right: 1.2rem;
            padding: 0 0.6rem;
            white-space: nowrap;
            @include font(1.6rem, 500, #61606c, 2.3rem);
            &::before,
            &::after {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
            &::before {
              content: "[";
              left: 0;
            }
            &::after {
              content: "]";
              right: 0;
            }
          }
          .title {
            word-break: keep-all;
          }
        }
        .content-box {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease;
          .text-container {
            display: block;
            padding-top: 3rem;
            .text-area {
              display: block;
              padding: 4rem 6rem 4rem 4rem;
              border-radius: 2rem;
              background-color: rgba(#cac9d9, 0.3);
              .text-box {
                display: block;
              }
              .text {
                display: block;
                @include font(1.8rem, 400, #61606c, 3rem);
                white-space: pre-line;
                word-break: keep-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>
