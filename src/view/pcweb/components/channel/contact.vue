<template>
  <div class="home-introduction">
    <div
      :style="banner && `background-image: url(${banner});`"
      class="minibox"
    >
      <h2 class="title">立即咨询了解</h2>
      <ul class="list">
        <li class="list-item">
          <span class="label">联系人: </span>
          <span class="text">xxx</span>
        </li>
        <li class="list-item">
          <span class="label">手机号: </span>
          <span class="text">xxx</span>
        </li>
        <li class="list-item">
          <span class="label">公司名称: </span>
          <span class="text">xxx</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      banner: require('@img/channel/call_bg.png')
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
    height: 180px;
    overflow: hidden;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & /deep/ .home-title {
      .text,
      .desc {
        // color: #fff;
      }
    }

    .title {
      margin-top: 38px;
      color: #333333;
      font-size: 50px;
      font-weight: 400;
      line-height: 59px;
      font-style: italic;
      font-family: FontquanXinYiGuanHeiTi-Regular, FontquanXinYiGuanHeiTi;
    }
    .list {
      margin-top: 20px;
      width: auto;
      .list-item {
        display: inline-block;
        vertical-align: middle;
        margin-left: 150px;
        color: #000000;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        .label {
        }
        .text {
        }
      }
    }
  }
}
</style>
