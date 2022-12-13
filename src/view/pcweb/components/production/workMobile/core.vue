<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">核心功能</template>
        <template slot="desc">专为销售团队定制，赋能移动社交化的销售管理与移动办公化的安全管理</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          class="block-item"
        >
          <img
            :src="item.banner"
            class="banner"
          >
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
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
        banner: require('@img/production/workMobile/core_1.png'),
        title: '操作留痕',
        desc: '沟通之后，自动记录操作轨迹，工作过程一目了然。'
      }, {
        banner: require('@img/production/workMobile/core_2.png'),
        title: '转化提升',
        desc: '可以提升销售的线索转化率，提升业绩。'
      }, {
        banner: require('@img/production/workMobile/core_3.png'),
        title: '规避风险',
        desc: '可以规避销售飞单，私单等各种违规操作。'
      }, {
        banner: require('@img/production/workMobile/core_4.png'),
        title: '高效签单',
        desc: '从线索到最终转化过程，清晰可查，签单更快捷。'
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
    height: 554px;
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #fff;

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
      margin-top: 80px;
      padding: 0;
      box-sizing: border-box;

      .block-item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 196px;
        height: 271px;
        padding: 0px;
        box-sizing: border-box;
        // background-color: #fff;
        background-size: 100% 100%;
        margin-bottom: 30px;
        margin-right: 30px;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .banner {
          width: 69px;
          height: 65px;
        }

        .title {
          margin-top: 60px;
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          line-height: 21px;
        }

        .desc {
          margin-top: 20px;
          color: #999999;
          font-size: 10px;
          font-weight: 500;
          line-height: 16px;
          text-align: center;
        }
      }
    }
  }
}
</style>
