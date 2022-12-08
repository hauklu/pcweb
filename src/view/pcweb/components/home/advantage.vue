<template>
  <div class="home-advantage">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">我们的优势</template>
        <template slot="desc">企业通信管理一站式解决方案，助力企业业墙增长</template>
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
import homeTitle from './common/homeTitle.vue'
export default {
  components: {
    homeTitle
  },
  data() {
    return {
      list: [{
        banner: require('@img/home/show1.png'),
        title: '通信管理一体化解快方案',
        desc: '致力于为电销企业提供一站式服务，从咨询线索到最终成交全流程闭环管理，管控客户整个生命周期，同时监管销售的服务过程，避免客户流失，资源浪费。'
      }, {
        banner: require('@img/home/show2.png'),
        title: '多通信产品支撑',
        desc: '配置隐私号外加实体卡，可以完美解决用户号卡易被封，无法高频呼叫的问题'
      }, {
        banner: require('@img/home/show3.png'),
        title: '多运营商支撑',
        desc: '公司与三大基础运营商及三十多家虚拟运营商深度合作，号卡资源丰富，同时配套提供电销系统及外呼线路，用户基数庞大，值得信赖。'
      }],
      banner: require('@img/home/banner1-1x.png')
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/variable.less);

.home-advantage {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 684px;
    overflow: hidden;
    background-size: 100% 100%;

    & /deep/ .home-title {
      .text,
      .desc {
        color: #fff;
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
        align-items: center;
        width: 344px;
        height: 370px;
        margin-right: 24px;
        padding: 0 37px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);

        .banner {
          width: 180px;
          height: 180px;
        }

        .title {
          margin-top: 17px;
          color: #fff;
          font-size: 20px;
          font-weight: 500;
          line-height: 23px;
        }

        .desc {
          margin-top: 22px;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
