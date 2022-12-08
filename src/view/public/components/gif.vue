<template>
  <div
    v-if="src"
    ref="gif"
    class="gif"
  >
    <div
      ref="gifItem"
      :style="`background-image: url(${src}); background-size: ${width}px ${height}px; background-position: ${posi.x} ${posi.y};`"
      class="gif-background"
    />
    <!-- width: ${width}px; height: ${height}px;  -->
  </div>
</template>

<script>

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    frame: {
      type: Number,
      default: undefined
    },
    speed: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      cIdx: 0,
      width: 0,
      height: 0,
      widthOri: undefined,
      heightOri: undefined,
      posi: {
        x: '0px',
        y: '0px'
      }
    }
  },
  created() {
    // this.localTest()
  },
  mounted() {
    this.getHW()
    this.animation()
  },
  methods: {
    localTest() {
      this.src = this.$STATIC_REB.img.home.banner_gif_swzw
    },
    getHW() {
      const el = this.$refs.gifItem
      // this.width = el.getBoundingClientRect().width * this.frame
      // this.height = el.getBoundingClientRect().height
      this.width = el.clientWidth * this.frame
      this.height = el.clientHeight
      // console.log(this.width + '-' + this.height)
    },
    animation() {
      const w = this.width / this.frame
      setInterval(() => {
        if (this.cIdx >= this.frame - 1) this.cIdx = 0
        var x = -w * (this.cIdx + 1)
        this.posi.x = `${x}px`
        this.cIdx++
      }, this.speed)
    }
  }
}
</script>

<style lang="less" scoped>
.gif {
  @width: 3rem;
  @height: 3rem;
  // @width: 100%;
  // @height: 100%;

  width: @width;
  height: @height;
  // width: 100%;
  // height: 100%;

  .gif-background {
    width: @width;
    height: @height;
    // width: 100%;
    // height: 100%;
    background-repeat: no-repeat;
  }
}
</style>
