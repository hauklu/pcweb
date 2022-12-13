<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">持脉一站式通信管理解决方案</template>
        <template slot="desc">六大产品优势，为企业保驾护航</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          class="block-item"
        >

          <div class="line-1">
            <img
              :src="item.banner"
              class="banner"
            >
            <h3 class="title">{{ item.title }}</h3>
          </div>
          <div class="line-2" />
          <ul class="line-3">
            <li
              v-for="(listItem, listIdx) of item.list"
              :key="listIdx"
              class="list-item"
            >
              <span class="circle" />
              <span class="text">{{ listItem }}</span>
            </li>
          </ul>
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
        banner: require('@img/try/solution_1.png'),
        title: '稳定性强',
        list: ['提供多种方案，可以有效提升线路的确定性及接通率，保证在各个行业实现线路接通率。']
      }, {
        banner: require('@img/try/solution_2.png'),
        title: '覆盖面广',
        list: ['我们提供全国地区的线路资源，全国归属地可选，号码可定制，号码池可更新，支持营销、客服等诸多场景。']
      }, {
        banner: require('@img/try/solution_3.png'),
        title: '成本更低',
        list: ['更优质的人工呼叫坐席，低于市场价格的产品服务。']
      }, {
        banner: require('@img/try/solution_4.png'),
        title: '接通率高',
        list: ['针对有需求的企业，全国归属地可选，号码可定制，号码池可更新，接通率大大增加，工作效率提高。']
      }, {
        banner: require('@img/try/solution_5.png'),
        title: '合理匹配',
        list: ['根据客户的业务类型，外呼话术和业务量进行线路资源匹配。']
      }, {
        banner: require('@img/try/solution_6.png'),
        title: '功能齐全',
        list: ['搭配CRM管理系统和APP，权限分明，方便简单操作，有利于企业电销团队管理，客户资源整理更方便。']
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
    height: 754px;
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
      margin-top: 60px;
      padding: 0px 100px;
      box-sizing: border-box;

      .block-item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        // align-items: center;
        width: 344px;
        height: 180px;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;
        margin-bottom: 24px;
        margin-right: 24px;
        // background-color: rgba(255, 255, 255, 0.1);
        // backdrop-filter: blur(5px);

        .line-1 {
          display: flex;
          align-items: center;
          margin-top: 25px;

          .banner {
            width: 20px;
            height: 20px;
          }

          .title {
            margin-left: 10px;
            color: #333333;
            font-size: 20px;
            font-weight: 800;
            line-height: 21px;
          }
        }

        .line-2 {
          width: 280px;
          height: 1px;
          opacity: 0.1;
          background: #0047ff;
          margin-top: 24px;
        }

        .line-3 {
          margin-top: 24px;

          .list-item {
            display: flex;
            color: #999999;
            font-size: 10px;
            // font-weight: bold;
            line-height: 12px;
            margin-top: 10px;

            .circle {
              flex-shrink: 0;
              display: inline-block;
              vertical-align: bottom;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: #428eff;
              margin-top: 3px;
            }
            .text {
              display: inline-block;
              vertical-align: middle;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
