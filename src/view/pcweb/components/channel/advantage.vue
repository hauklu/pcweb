<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">合作优势</template>
        <template slot="desc">超10000+企业选择我们，立即免费获取报价和方案</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          :style="`background-image: url(${require('@img/production/privateCall/Group275.png')});`"
          class="block-item"
        >
          <img
            :src="item.banner"
            class="banner"
          >
          <h3 class="title">{{ item.title }}</h3>
        </li>
      </ul>
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
      list: [{
        banner: require('@img/channel/advantage_1.png'),
        title: '广阔的市场前景'
      }, {
        banner: require('@img/channel/advantage_2.png'),
        title: '强大的品牌支持'
      }, {
        banner: require('@img/channel/advantage_3.png'),
        title: '专业的团队支撑'
      }],
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
    height: 462px;
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #f3f4f6;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .block {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 60px;
      padding: 0px 100px;
      box-sizing: border-box;

      .block-item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 344px;
        height: 180px;
        padding: 0;
        box-sizing: border-box;
        background-size: 100% 100%;
        margin-right: 30px;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .banner {
          width: 65px;
          height: 65px;
          margin-top: 30px;
        }

        .title {
          margin-top: 10px;
          color: #333333;
          font-size: 20px;
          font-weight: 800;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
