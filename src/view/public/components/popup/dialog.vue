<template>
  <div
    ref="pbDialog"
    :style="`background-image: url(${bgImg});`"
    class="dialog"
  >
    <div class="dialog-header">
      <van-icon
        name="close"
        class="icon-close dialog__close"
        @click="close"
      />
      <div
        v-if="title"
        class="title"
      >{{ title }}</div>
    </div>
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    bgImg: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    // 初始化
    init() {
      this.isBackgroundImg()
    },
    // 是否应用背景图片
    isBackgroundImg() {
      if (this.bgImg) {
        const el = this.$refs.pbDialog
        el.setAttribute('backgroundColor', 'transparent')
        // console.log(el.style)
      }
    },
    // 触发关闭组件
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.dialog {
  @headerHeight: 1.2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  overflow: hidden;

  .dialog-header {
    .icon-close {
      position: absolute;
      right: 0.3rem;
      top: 0.3rem;
      color: #333;
      font-size: 0.58rem;

      &:active {
        transform: scale(0.9);
      }
    }

    .title {
      height: @headerHeight;
      line-height: @headerHeight;
      text-align: center;
      font-weight: bold;
      font-size: 0.55rem;
    }
  }
}
</style>
