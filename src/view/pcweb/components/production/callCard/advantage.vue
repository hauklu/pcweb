<template>
  <div class="home-advantage">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">电销卡的优势</template>
        <template slot="desc">电销卡又称为企业（集团）语音卡，一般以企业为主体申请办理<br>主要优势就是可以高频打电话而不会被封号，且实名名额独立不占用三大运营商的名额！</template>
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
        banner: require('@img/production/callCard/Location.png'),
        title: '全国码号',
        desc: '拥有全国200+城市手机号码，可以满足号码本地化要求较高的业务场景需求。'
      }, {
        banner: require('@img/production/callCard/Tick.png'),
        title: '通话稳定',
        desc: '基于三大运营商的基站信号，通话稳定。'
      }, {
        banner: require('@img/production/callCard/Discount.png'),
        title: '接通率高',
        desc: '外显11位的手机号码，正规手机号段。'
      }, {
        banner: require('@img/production/callCard/Lock.png'),
        title: '开通方便',
        desc: '微信公众号、APP即可办理开卡、实名、充值，销户简单方便，线上即可完成整个流程。'
      }, {
        banner: require('@img/production/callCard/Setting.png'),
        title: '售后放心',
        desc: '客户为先，公司提供一对一专人客服，确保及时解答各种客户咨询问题，实现客户放心用卡，服务无忧。'
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
