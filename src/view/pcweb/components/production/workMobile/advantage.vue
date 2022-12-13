<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">产品优势</template>
        <template slot="desc">大幅提高团队营销战斗力！同时保护重要数据，企业资产企业化，让员工管理更省心、更安心、更放心！</template>
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
        banner: require('@img/production/workMobile/advantage_1.png'),
        title: '通信风控管理',
        list: ['通话、短信自动留存，语音转文字、A质检，随时考核销售沟通水平', '外呼时间限制及外呼频率检测，塑造良好客户沟通体验', '敏感号码前置过滤，自定义禁止外呼名单设置，防范投诉、避免封号']
      }, {
        banner: require('@img/production/workMobile/advantage_2.png'),
        title: '微信风控管理',
        list: ['随时查看微信、企微和QQ的沟通内容，实时存储与质检', '交易记录实时呈现，把关员工私自收发红包、异常转账等违规行为', '支持聊天辱骂、回扣、删除好友等敏感行为预警与监控', '企业所有客户可查重提醒，防止员工内耗撞单及维护客户良好体验']
      }, {
        banner: require('@img/production/workMobile/advantage_3.png'),
        title: '销售行为管理',
        list: ['支持开启电话号码及微信号隐藏，保护企业客户资源，防止私单、飞单、离职带走客户等现象', '摄像头、定位与电子围栏等管控，有效监管销售外勤轨迹', '通过后台查看APP使用情况，掌控销售在岗工作状态', '预装APP、不可卸载且常驻后台，自定义黑白名单应用，统一规范员工管理']
      }, {
        banner: require('@img/production/workMobile/advantage_4.png'),
        title: '客户关系管理',
        list: ['销售自动化，电话挂机自动标记弹屏，无遗漏的补全客户信息同步沉淀至后台，省时提效，释放销售精力', '时间轴方式记录每次客户跟进情况，方便销售复盘，助力离职人员顺畅交接', '智能CM管理客户线索，公海流转有效唤醒沉淀客户，提升企业签单率']
      }, {
        banner: require('@img/production/workMobile/advantage_5.png'),
        title: '数据储存统计管理',
        list: ['手机数据加密防护储存云端，支持私有化独立部署', '通话量、加好友发微信等多维数据支持可视化报表全方位统计，将销售工作度量化，驱动决策依据']
      }, {
        banner: require('@img/production/workMobile/advantage_6.png'),
        title: '营销赋能增效',
        list: ['提供智能话术，自定义设置常用的沟通回复话术，集中管理营销话', 'RPA自动化省时省力，自动添加客户、自动群发信息，自动触达客户，模拟操作', '避免封号持续工作；企业客户与微信客户自动匹配，集中管理，提升沟通能效']
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
    height: 873px;
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
        height: 244px;
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
            margin-left: 20px;
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
