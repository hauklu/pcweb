<template>
  <div class="home-scheme">
    <div class="minibox">
      <home-title>
        <template slot="title">我们的解决方案</template>
        <template slot="desc">企业通信管理一站式解决方案, 助力企业业绩增长</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          :style="`background-image: url(${item.banner});`"
          class="block-item"
        >
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
          <ul class="list">
            <li
              v-for="(listItem, listIdx) of item.list"
              :key="listIdx"
              class="list-item"
            >
              <span class="circle" />
              <span class="text">{{ listItem }}</span>
            </li>
          </ul>
          <button class="hover">了解更多 ></button>
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
        banner: require('@img/home/Group_198.png'),
        title: '企业通信一体化解快方案',
        desc: '最新高频专用通话系统，从咨询线素分发到销售数据转化追踪， 再到最终成交全流程闭环管理，实现客户全生命周期管控，同时避免因销售人员离眼而导致客户资源流失。',
        list: ['完善的防封系统，外显本机真实手机号码', '一键呼叫，提高电销中心业务效率', '轻CRM系统，全生命周期管控']
      }, {
        banner: require('@img/home/Group_194.png'),
        title: '工作手机解决方案',
        desc: '工作手机是从系统庭层和软硬件进行通信风控。位置管理和第 三方应用管理等的全面管理，可有效防范飞单。私单、消极意工，大幅提高团队营销战斗力！',
        list: ['通信风控管理，安全高效', '销售行为管理，提高签单率，提升销量', '数据储存统计管理，数据看板，驱动决策依据']
      }]
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/variable.less);

.home-scheme {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 622px;
    overflow: hidden;
    background: #f3f4f6;

    .block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 60px;

      .block-item {
        width: 528px;
        height: 271px;
        margin-right: 20px;
        background-size: 100% 100%;
        padding: 37px;
        box-sizing: border-box;

        .title {
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          line-height: 21px;
        }

        .desc {
          margin-top: 10px;
          color: #999999;
          font-size: 10px;
          font-weight: 500;
          line-height: 16px;
        }

        .list {
          margin-top: 24px;

          .list-item {
            color: #666666;
            font-size: 10px;
            font-weight: bold;
            line-height: 12px;
            margin-top: 7px;

            .circle {
              display: inline-block;
              vertical-align: middle;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: #428eff;
            }
            .text {
              display: inline-block;
              vertical-align: middle;
              margin-left: 10px;
            }
          }
        }

        button {
          margin-top: 28px;
          display: block;
          color: #428eff;
          box-sizing: border-box;
          background: none;

          &:hover {
            cursor: pointer;
            color: #aaa;
          }
        }
      }
    }
  }
}
</style>
