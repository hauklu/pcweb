<template>
  <div class="footer">
    <div class="minibox">
      <p
        class="notice"
        v-html="notice"
      />
      <div class="qrcode-wrap">
        <p class="top">联系我们</p>
        <img
          :src="$static.icon.qrcode"
          class="qrcode"
        >
        <p class="bottom">微信公众号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: `游戏许可信息:<br><br>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。<br>适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。<br>杭州九玩网络科技有限公司&nbsp;浙网文（2018）2743-176号<br>ICP证：浙B2-20180814&nbsp;&nbsp;<br><a href="https://beian.miit.gov.cn/" style="color: #999;">浙ICP备17055122号</a><br>地址: 浙江省杭州市萧山区宁围街道保亿中心2幢4301室`
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.footer {
  position: relative;
  width: 100%;
  height: 250px;
  padding: 30px 0;
  overflow: hidden;
  background-color: #272a2c;

  .minibox {
    position: relative;
    width: @mini_width;
    height: 100%;
    margin: auto;

    .notice {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      line-height: 25px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }

    .qrcode-wrap {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 100px;

      .bottom,
      .top {
        font-size: 12px;
        color: #999;
        text-align: center;
        line-height: 30px;
      }

      img {
        display: block;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
