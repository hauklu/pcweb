<template>
  <div class="agreement-hint">
    <span class="text">{{ typetext }}即代表您同意</span>
    <span
      class="hint-text"
      @click="openAgreement('user')"
    >《用户协议》</span>
    <span
      class="hint-text"
      @click="openAgreement('privacy')"
    >《隐私协议》</span>
  </div>
</template>

<script>
export default {
  props: {
    typetext: {
      type: String,
      default: '登录'
    }
  },
  methods: {
    // 打开用户/隐私协议组件
    openAgreement(type) {
      this.$emit('switch', true, type)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxVariable.less");

.agreement-hint {
  text-align: center;
  word-spacing: -0.1rem;
  font-size: @agreehint_fontsize;

  .text {
    color: @agreehint_color;
  }

  .hint-text {
    color: @agreehint_bold_color;

    &:active {
      color: @agreehint_bold_color__act;
    }
  }
}
</style>
