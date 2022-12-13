<template>
  <div class="home-advantage">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品优势</template>
        <template slot="desc">超10000+企业选择我们，立即免费获取报价和方案</template>
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
        banner: require('@img/production/privateCall/advantage_1.png'),
        title: '无需实名，办理方便',
        desc: '无需个人办卡和个人实名，以企业资质申请和备案，我们提供号码'
      }, {
        banner: require('@img/production/privateCall/advantage_2.png'),
        title: '全国码号，任你选择',
        desc: '海量号码资源，200+城市本地号码，任你选择'
      }, {
        banner: require('@img/production/privateCall/advantage_3.png'),
        title: '多种方式，高效呼叫',
        desc: '电脑端和APP端，两位一体，皆可一键呼叫，高效快捷'
      }, {
        banner: require('@img/production/privateCall/advantage_4.png'),
        title: '高频通话，不封坐席',
        desc: '专业解决高频呼叫产生的封号问题'
      }, {
        banner: require('@img/production/privateCall/advantage_5.png'),
        title: '通话稳定，沟通无畅',
        desc: '基于三大运营商的基站信号，通话稳定'
      }, {
        banner: require('@img/production/privateCall/advantage_6.png'),
        title: '智能预警，降低投诉',
        desc: '通话关键词AI预警功能可帮您降低用户投诉'
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
    height: 603px;
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
      justify-content: center;
      align-items: center;
      margin-top: 80px;

      .block-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 196px;
        height: 271px;
        // margin-right: 24px;
        padding: 0px 24px 0px 24px;
        box-sizing: border-box;
        background-color: #fff;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .banner {
          width: 60px;
          height: 60px;
        }

        .title {
          margin-top: 52px;
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          line-height: 21px;
        }

        .desc {
          margin-top: 10px;
          text-align: center;
          color: #999999;
          font-size: 10px;
          font-weight: 500;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
