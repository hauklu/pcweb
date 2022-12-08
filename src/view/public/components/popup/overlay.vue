<template>
  <div
    class="overlay overlay__close"
    @click="close"
  >
    <slot />
  </div>
</template>

<script>
import { forbidScrollThrough } from '@/utils/index'

export default {
  props: {
    project: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      proj: this.project || this.$proj
    }
  },
  created() {
    // this.init()
  },
  mounted() {
    // 禁止滚动穿透
    forbidScrollThrough(true)
    // 禁止van-pull-refresh下拉操作
    this.$store.commit(`${this.proj}/REFRESH_DISABLED`, true)
  },
  beforeDestroy() {
    // 销毁禁止滚动穿透
    // 恢复van-pull-refresh下拉操作
    forbidScrollThrough(false)
    this.$store.commit(`${this.proj}/REFRESH_DISABLED`, false)
  },
  methods: {
    // 触发关闭当前组件
    close(e) {
      const classList = e.target.classList
      const array = ['overlay__close', 'dialog__close']
      Array.from(classList).map((item, idx, arr) => {
        (item === array[0] || item === array[1]) && this.$emit('close')
      })
    },
    // 初始化
    init() {
    }
  }
}
</script>

<style lang="less" scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
</style>
