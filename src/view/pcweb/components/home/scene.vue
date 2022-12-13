<template>
  <div class="home-scheme">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">应用场景</template>
        <template slot="desc">赋能驱动企业增长，服务10000+企业/机构，覆盖25+行业细分领域</template>
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
import homeTitle from './common/homeTitle.vue'
export default {
  components: {
    homeTitle
  },
  data() {
    return {
      list: [{
        banner: require('@img/home/scene_1.png'),
        title: '汽车行业',
        desc: '试驾邀约、活动推荐、车主服务、美容养护'
      }, {
        banner: require('@img/home/scene_2.png'),
        title: '装修行业',
        desc: '室内设计、家居建材、施工装潢、新房除味'
      }, {
        banner: require('@img/home/scene_3.png'),
        title: '教育行业',
        desc: '课程网销、客服接待、试听邀约、课程回访'
      }, {
        banner: require('@img/home/scene_4.png'),
        title: '金融行业',
        desc: '融营销、金融催收、信用分期、银行贷款'
      }, {
        banner: require('@img/home/scene_5.png'),
        title: '人资行业',
        desc: '代理招聘、猎头服务、劳务派遣、业务外包'
      }, {
        banner: require('@img/home/scene_6.png'),
        title: '招商行业',
        desc: '招商策划、招商融资、招商代理、招商培训'
      }, {
        banner: require('@img/home/scene_7.png'),
        title: '旅游行业',
        desc: '打折优惠、国内旅游、出境旅游、签证服务'
      }, {
        banner: require('@img/home/scene_8.png'),
        title: '地产行业',
        desc: '商铺租赁、楼盘推荐、房产中介、共享办公'
      }],
      banner: ''
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
    height: 840px;
    overflow: hidden;
    background: #fff;
    background-size: 100% 100%;

    .block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 1100px;
      margin: auto;
      margin-top: 60px;

      .block-item {
        width: 252px;
        height: 232px;
        margin-right: 20px;
        background-size: 100% 100%;
        padding: 37px;
        box-sizing: border-box;
        margin-bottom: 24px;

        .banner {
          width: 252px;
          height: 144px;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 252px;
          height: 88px;
          background: #f8f9fc;
          padding: 0 20px;
          box-sizing: border-box;

          .title {
            color: #333333;
            font-size: 14px;
            font-weight: bold;
            line-height: 16px;
          }

          .desc {
            margin-top: 6px;
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
