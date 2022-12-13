<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">全场景解决方案</template>
        <template slot="desc">满足企业销售通信与客户管理一站式需求</template>
      </home-title>
      <img
        :src="require('@img/solution/solution_banner.png')"
        class="banner"
      >
    </div>
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
      banner: undefined
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
    height: 540px;
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #f3f4f6;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .banner {
      width: 1080px;
      height: 250px;
      margin: auto;
      margin-top: 54px;
    }
  }
}
</style>
