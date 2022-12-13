<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品功能</template>
        <template slot="desc">一站式智能APP通信管理，安全稳定方便快捷</template>
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
        banner: require('@img/production/scrm/production_1.png'),
        title: '一键录入'
      }, {
        banner: require('@img/production/scrm/production_2.png'),
        title: '一键呼叫'
      }, {
        banner: require('@img/production/scrm/production_3.png'),
        title: '通话录音'
      }, {
        banner: require('@img/production/scrm/production_4.png'),
        title: '客户跟进'
      }, {
        banner: require('@img/production/scrm/production_5.png'),
        title: '敏感客户拦截'
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
    height: 610px;
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
      margin-top: 105px;
      padding: 0;
      box-sizing: border-box;

      .block-item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 196px;
        height: 271px;
        padding: 40px 0px;
        box-sizing: border-box;
        // background-color: #fff;
        background-size: 100% 100%;
        margin-bottom: 30px;
        margin-right: 30px;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .banner {
          width: 65px;
          height: 65px;
        }

        .title {
          margin-top: 50px;
          color: #333333;
          font-size: 20px;
          font-weight: bold;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
