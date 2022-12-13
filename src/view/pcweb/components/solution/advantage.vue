<template>
  <div class="home-advantage">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">方案优势</template>
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
        banner: require('@img/solution/advantage_1.png'),
        title: '稳定性强',
        desc: '提供多种通信方案，可以有效提升线路的确定性及接通率，保证在各个行业实现线路接通率。'
      }, {
        banner: require('@img/solution/advantage_2.png'),
        title: '覆盖面广',
        desc: '我们提供全国地区的线路资源，全国归属地可选，号码可定制，号码池可更新，支持营销、客服等诸多场景。'
      }, {
        banner: require('@img/solution/advantage_3.png'),
        title: '成本更低',
        desc: '更优质的人工呼叫坐席，低于市场价格的产品服务。'
      }, {
        banner: require('@img/solution/advantage_4.png'),
        title: '应答率高',
        desc: '针对有需求的企业，全国归属地可选，号码池可更新，应答率大大增加，提高工作效率。'
      }, {
        banner: require('@img/solution/advantage_5.png'),
        title: '功能齐全',
        desc: '搭配CRM管理系统和APP，权限分明，方便简单操作，有利于企业电销团队管理，客户资源整理更方便。'
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
    height: 720px;
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
