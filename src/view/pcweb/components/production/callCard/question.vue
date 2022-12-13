<template>
  <div class="home-advantage">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">你的企业是否有以下问题？</template>
        <template slot="desc">持脉可以帮您解决以下的各类业务痛点</template>
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
          <h3
            class="title"
            v-html="item.title"
          />
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
        banner: require('@img/production/callCard/icon1.png'),
        title: '办完卡<br/>打几天就被封卡？',
        desc: '手机卡或座机呼出量有限，高频率呼出容易封号，解封比较麻烦。'
      }, {
        banner: require('@img/production/callCard/icon2.png'),
        title: '号码归属地<br/>和自己公司所在地不符合？',
        desc: '自己公司在杭州，给外地客户打电话，客户的信任感很差，成交受阻。'
      }, {
        banner: require('@img/production/callCard/icon3.png'),
        title: '实名制数量有限<br/>不能办理太多手机卡？',
        desc: '每个员工使用身份证办理手机卡数量有限，只能注销重新办理。'
      }, {
        banner: require('@img/production/callCard/icon4.png'),
        title: '打10个电话<br/>8个都接不通？',
        desc: '号码高频呼出被标记，导致后续客户接通率低，成交困难。'
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
    background-color: #f3f4f6;

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
      margin-top: 60px;

      .block-item {
        display: flex;
        flex-direction: column;
        // align-items: center;
        width: 260px;
        height: 232px;
        margin-right: 24px;
        padding: 0px 8px 0px 22px;
        box-sizing: border-box;
        background-color: #fff;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .banner {
          margin-top: 31px;
          width: 40px;
          height: 40px;
        }

        .title {
          margin-top: 18px;
          color: #333333;
          font-size: 19px;
          font-weight: bold;
          line-height: 25px;
        }

        .desc {
          margin-top: 15px;
          color: #999999;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          padding-right: 20px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
