<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品优势</template>
        <template slot="desc">六大核心优势，助力您的企业转化更多的订单</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          :style="`background-image: url(${require('@img/production/privateCall/Group275.png')});`"
          class="block-item"
        >

          <div class="line-1">
            <img
              :src="item.banner"
              class="banner"
            >
            <h3 class="title">{{ item.title }}</h3>
          </div>
          <p class="line-2">{{ item.desc }}</p>
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
        banner: require('@img/production/scrm/advantage_1.png'),
        title: '一键呼叫',
        desc: '最新高频专用通话系统，可批量导入客户电话名单，用APP直接点击拨号呼出，无需手动输入号码，提高业务效率'
      }, {
        banner: require('@img/production/scrm/advantage_2.png'),
        title: '通话稳定',
        desc: '提供多种方案，可以有效提升线路的稳定性及接通率'
      }, {
        banner: require('@img/production/scrm/advantage_3.png'),
        title: '智能外显',
        desc: '本地化外显，优先为用户匹配被叫所在地市外显号码'
      }, {
        banner: require('@img/production/scrm/advantage_4.png'),
        title: '智能拦截',
        desc: '帮助企业用户拦截敏感号码，降低投诉风险'
      }, {
        banner: require('@img/production/scrm/advantage_5.png'),
        title: '客户管理',
        desc: '从咨询线索分发到销售数据转化追踪，再到最终成交全流程闭环管理，实现客户全生命周期管控，同时避免因销售人员离职而导致客户资源流失'
      }, {
        banner: require('@img/production/scrm/advantage_6.png'),
        title: '数据统计',
        desc: '支持话务量、话务时间等各类型数据统计，帮助管理层实时了解业务动态，掌握行业风向，挖掘客户需求'
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
    height: 750px;
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
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
      padding: 0px 100px;
      box-sizing: border-box;

      .block-item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        // align-items: center;
        width: 344px;
        height: 180px;
        padding: 34px 24px;
        box-sizing: border-box;
        background-color: #fff;
        background-size: 100% 100%;
        margin-bottom: 30px;
        margin-right: 30px;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .line-1 {
          display: flex;
          align-items: center;

          .banner {
            width: 20px;
            height: 20px;
          }

          .title {
            margin-left: 20px;
            color: #333333;
            font-size: 20px;
            font-weight: 800;
            line-height: 21px;
          }
        }

        .line-2 {
          margin-top: 30px;
          text-align: left;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
