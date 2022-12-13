<template>
  <div class="home-advantage">
    <div
      :style="bg && `background-image: url(${bg});`"
      class="minibox"
    />
  </div>
</template>

<script>
import homeTitle from '@/view/pcweb/components/home/common/homeTitle.vue'
export default {
  components: {
    homeTitle
  },
  data() {
    return {
      bg: require('@img/production/callCard/solution_bg.png')
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';

.home-advantage {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 180px;
    overflow: hidden;
    background-size: 100% 100%;
  }
}
</style>
