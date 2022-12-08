<template>
  <div class="agreement">
    <div
      v-if="type === user.type"
      class="agreement-container"
    >
      <header class="agreement-header-fixed">
        <van-icon
          name="arrow-left"
          class="agreement-icon-arrow"
          @click="close"
        />
        <span class="agreement-title">{{ user.title }}</span>
      </header>
      <iframe
        :src="user.url"
        class="iframe-user"
        scrolling="yes"
        frameborder="0"
      />
    </div>
    <div
      v-if="type === privacy.type"
      class="agreement-container"
    >
      <header class="agreement-header-fixed">
        <van-icon
          name="arrow-left"
          class="agreement-icon-arrow"
          @click="close"
        />
        <span class="agreement-title">{{ privacy.title }}</span>
      </header>
      <iframe
        :src="privacy.url"
        class="iframe-privacy"
        scrolling="yes"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      user: {
        type: 'user',
        title: '用户协议',
        url: this.$channel.agreement_user_url
      },
      privacy: {
        type: 'privacy',
        title: '隐私协议',
        url: this.$channel.agreement_privacy_url
      }
    }
  },
  mounted() {
    // console.log(this.user.url)
  },
  methods: {
    close() {
      this.$emit('switch', false)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxVariable.less");

.agreement {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: @agree_title_height + 0.04;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;

  .agreement-header-fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: @agree_title_height;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    text-align: center;
    background-color: #fff;

    .agreement-icon-arrow {
      position: absolute;
      left: 0;
      padding: 0 0.3rem;
      line-height: @agree_title_height;
      font-size: 0.6rem;
      color: #000;

      &:active {
        color: #999;
      }
    }

    .agreement-title {
      line-height: @agree_title_height;
      font-size: 0.5rem;
      font-weight: bold;
    }
  }

  .agreement-container {
    width: 100%;
    height: 100%;
    background-color: #fff;

    .iframe-privacy,
    .iframe-user {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>
