<template>
  <div class="home-introduction">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">渠道合作流程</template>
      </home-title>
      <div class="container">
        <ul>
          <li
            v-for="(item, idx) of list"
            :key="idx"
          >
            <div
              :style="`background-image: url(${item.banner});`"
              class="banner"
            >
              <span class="text">{{ item.title }}</span>
            </div>
            <img
              :src="require('@img/channel/channel_arrow.png')"
              class="arrow"
            >
          </li>
        </ul>
      </div>
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
      banner: undefined,
      list: [{
        banner: require('@img/channel/channel_1.png'),
        title: '渠道商申请'
      }, {
        banner: require('@img/channel/channel_2.png'),
        title: '合作洽谈和实地考察'
      }, {
        banner: require('@img/channel/channel_3.png'),
        title: '招商部审核备案'
      }, {
        banner: require('@img/channel/channel_4.png'),
        title: '审核结果通知'
      }]
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';

.home-introduction {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 471px;
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #fff;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .container {
      margin-top: 60px;

      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          .banner {
            position: relative;
            width: 60px;
            height: 60px;
            background-size: 100% 100%;
            margin: 0 34px;
            .text {
              position: absolute;
              left: 50%;
              top: 52px;
              transform: translateX(-50%);
              width: 898px;
              height: 94px;
              margin-top: 30px;
              text-align: center;
              font-size: 18px;
              font-weight: bold;
              color: #666666;
              line-height: 21px;
            }
          }

          .arrow {
            width: 147px;
            height: 6px;
          }

          &:last-child {
            .arrow {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
