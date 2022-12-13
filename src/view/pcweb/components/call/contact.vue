<template>
  <div class="home-advantage">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <float-right />
      <div class="root-left">
        <h2 class="title">我们的联系方式</h2>
        <ul class="list">
          <li
            v-for="(item, idx) of list"
            :key="idx"
            class="list-item"
          >
            <img
              :src="item.icon"
              class="icon"
            >
            <span class="label">{{ item.label }}</span>
            <span class="desc">{{ item.desc }}</span>
          </li>
        </ul>
      </div>
      <div class="root-right">
        <div class="map scale-img hover">
          <img
            :src="require('@img/call/map.png')"
            class="banner-img"
          >
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import floatRight from './floatRight'
export default {
  components: {
    floatRight
  },
  data() {
    return {
      list: [{
        icon: require('@img/call/user.png'),
        label: '姓名: ',
        desc: '周经理'
      }, {
        icon: require('@img/call/smartphone.png'),
        label: '手机: ',
        desc: '4008017799'
      }, {
        icon: require('@img/call/message.png'),
        label: '邮箱: ',
        desc: '330460289@qq.com'
      }, {
        icon: require('@img/call/location.png'),
        label: '地址: ',
        desc: '浙江省杭州市西湖区智 汇众创中心1号楼1004室-7'
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
    height: 730px;
    overflow: hidden;
    background-size: 100% 100%;
    padding-top: 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f4f6;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .root-left {
      width: 378px;
      height: 543px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      padding: 0 64px;
      box-sizing: border-box;
      background-color: #fff;
      .title {
        position: relative;
        font-size: 18px;
        font-family: FontquanXinYiGuanHeiTi-Regular, FontquanXinYiGuanHeiTi;
        font-weight: 600;
        color: #333333;
        line-height: 21px;
        font-style: italic;

        &::after {
          content: '';
          position: absolute;
          top: 30px;
          left: 0;
          width: 41px;
          height: 0px;
          opacity: 1;
          border: 1px solid #333;
        }
      }

      .list {
        margin-top: 50px;
        .list-item {
          display: flex;
          align-items: center;
          width: 280px;
          margin-top: 35px;

          .icon {
            width: 24px;
            height: 24px;
          }

          .label {
            margin-left: 5px;
            white-space: nowrap;
            font-size: 16px;
            font-weight: 500;
            color: #999999;
            line-height: 20px;
          }

          .desc {
            margin-left: 10px;
            font-size: 16px;
            font-weight: 500;
            color: #333333;
            line-height: 20px;
          }
        }
      }
    }

    .root-right {
      width: 552px;
      height: 543px;
      .map {
        width: 100%;
        height: 100%;
        img {
        }
      }
    }
  }
}
</style>
