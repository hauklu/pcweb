<template>
  <div :style="isFixed && `height: ${stickyHeight}px`">
    <div
      ref="pbSticky"
      :style="isFixed && `top: ${top}px; z-index: ${zIndex};`"
      :class="isFixed && 'pb-sticky__fixed'"
      class="pb-sticky"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 吸顶时与顶部的距离
    top: {
      type: Number || String,
      default: 0
    },
    // 吸顶时的z-index
    zIndex: {
      type: Number || String,
      default: 99
    }
  },
  data() {
    return {
      isFixed: false, // 悬浮状态
      stickyHeight: 0, // sticky元素的高度
      stickyTop: 0 // sticky元素距离顶部的距离
    }
  },
  computed: {
    // 开始悬浮时距离顶部的距离
    fixedTop() {
      return this.stickyTop - this.top
    }
  },
  watch: {
    isFixed(newVal) {
      this.$emit('change', newVal)
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.hlScroll)
  },
  methods: {
    // 跳转到锚点
    toAnchor() {
      window.scrollTo({ top: this.fixedTop })
    },
    // 获取dom元素数据
    getDom() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const el = this.$refs.pbSticky
          this.stickyHeight = el.offsetHeight
          this.stickyTop = el.offsetTop
          resolve()
        })
      })
    },
    async init() {
      await this.getDom()
      window.addEventListener('scroll', this.hlScroll)
    },
    // 处理滚动
    hlScroll() {
      const sTop = this.getScrollTop()
      this.isFixed = (sTop > this.fixedTop)
      this.$emit('scroll', {
        scrollTop: sTop,
        isFixed: this.isFixed
      })
    },
    // 获取scrollTop
    getScrollTop() {
      return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
  }
}
</script>

<style lang="less" scoped>
.pb-sticky {
}

.pb-sticky__fixed {
  position: fixed;
}
</style>
