<template>
  <div class="banner">
    <div
      :style="`background-image: url(${banner});`"
      class="banner-bg"
    >
      <div class="minibox" />
    </div>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'
export default {
  components: {
  },
  data() {
    return {
      // banner: require('@img/solution/banner.png')
      banner: require('@img/home/banner1-1x.png')
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    toast
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';

@height: 420px; // 组件高度

.banner {
  position: relative;
  width: 100%;
  height: @height;

  .banner-bg {
    width: 100%;
    height: @height;
    background-repeat: no-repeat;
    background-position: top center;

    .minibox {
      position: relative;
      margin: auto;
      width: @mini_width;
      height: @height;
      overflow: hidden;
    }
  }
}
</style>
