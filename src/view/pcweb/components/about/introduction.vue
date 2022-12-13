<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <div class="root-left">
        <h2 class="title">公司介绍</h2>
        <ul class="list">
          <li
            v-for="(item, idx) of list"
            :key="idx"
            class="list-item"
          >{{ item.desc }}</li>
        </ul>
      </div>
      <div class="root-right">
        <img :src="require('@img/about/company.png')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      list: [{
        desc: '浙江持脉科技有限公司是一家以外呼系统、集团语音卡、通信线路为主营业务的综合通信软件公司。目前已与数十家运营商达成战略合作关系，累计服务企业和个人用户高达10000+，其代表性合作伙伴有阿里云、百度、360等，应用场景包含教育、金融、房地产、代运营、网络推广、装修等多种行业。'
      }, {
        desc: '我们致力于服务更多客户，提升企业销售业绩，帮助客户创造价值，为众多成长型中小企业的电话营销保驾护航。'
      }, {
        desc: '公司有销售部、研发部、技术部、售后部和风控，五个部门，提供不间断运营维护服务，专业的售后团队充分保证实时响应客户需求，及时解决客户问题。'
      }],
      banner: require('@img/about/about_bg.png')
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
    height: 754px;
    overflow: hidden;
    background-size: 100% 100%;
    padding-top: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .root-left {
      margin-right: 80px;
      .title {
        font-size: 32px;
        font-family: FontquanXinYiGuanHeiTi-Regular, FontquanXinYiGuanHeiTi;
        font-weight: 600;
        color: #333333;
        line-height: 38px;
      }

      .list {
        margin-top: 56px;
        .list-item {
          width: 400px;
          margin-top: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #999999;
          line-height: 20px;
        }
      }
    }

    .root-right {
      img {
        width: 406px;
        height: 364px;
      }
    }
  }
}
</style>
