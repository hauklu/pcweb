<template>
  <div class="home-scheme">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品效果展示</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          class="block-item hover"
        >

          <div class="banner scale-img">
            <img
              :src="item.banner"
              class="banner-img"
            >
          </div>
          <div class="container">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
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
        banner: require('@img/home/scene_1.png'),
        title: '时间轴展示',
        desc: '收录每次拨打记录，跟进记录，时间轴跟进一目了然， 跟进进度明确，避免客户丢失。'
      }, {
        banner: require('@img/home/scene_2.png'),
        title: '通话录音',
        desc: '全量录音收录，帮助管理者和员工随时复盘沟通内容， 同时为客诉纠纷提供有力证据。'
      }, {
        banner: require('@img/home/scene_3.png'),
        title: '客户跟进',
        desc: '随时进行客户跟进，沟通留痕，保证客户最新状态。'
      }, {
        banner: require('@img/home/scene_4.png'),
        title: '云存储',
        desc: '客户资源云存储，员工账户可继承，避免员工因为离职等情况带走公司客户资源，提高公司与客户粘性。'
      }],
      banner: undefined
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/pcweb/assets/css/publice.less';
@import '~@/view/pcweb/assets/css/variable.less';

.home-scheme {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 743px;
    overflow: hidden;
    background: #fff;
    background-size: 100% 100%;

    .block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 150px;
      box-sizing: border-box;
      margin: auto;
      margin-top: 60px;

      .block-item {
        width: 252px;
        height: 232px;
        margin-right: 24px;
        padding: 37px;
        box-sizing: border-box;
        margin-bottom: 24px;

        .banner {
          width: 252px;
          height: 280px;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 252px;
          height: 118px;
          background: #f8f9fc;
          padding: 0 20px;
          box-sizing: border-box;

          .title {
            color: #333333;
            font-size: 12px;
            font-weight: bold;
            line-height: 14px;
          }

          .desc {
            margin-top: 8px;
            color: #666;
            font-size: 10px;
            font-weight: 500;
            line-height: 12px;
          }
        }
      }
    }
  }
}
</style>
