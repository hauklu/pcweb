<template>
  <div class="home-introduction">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品介绍</template>
        <template slot="desc">隐私通话平台可以保护通话双方手机号码彼此不公开，完成号码保护实现安全通话</template>
      </home-title>
      <div class="container">
        <img
          :src="require('@img/production/privateCall/introduction_banner.png')"
          class="banner"
        >
        <img
          :src="require('@img/production/privateCall/introduction_text.png')"
          class="text"
        >
      </div>
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

.home-introduction {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 667px;
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #fff;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      .banner {
        width: 572px;
        height: 300px;
      }
      .text {
        width: 898px;
        height: 94px;
        margin-top: 30px;
      }
    }
  }
}
</style>
