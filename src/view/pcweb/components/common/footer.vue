<template>
  <div class="footer">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <div class="root-left">
        <img
          :src="logo"
          class="logo"
        >
        <div class="container">
          <div class="container-left">
            <p class="line-1">咨询电话：4008017799</p>
            <p class="line-2">官方微信：Cpu520</p>
          </div>
          <div class="container-right">
            <p class="line-1">商务合作：330460289@qg.com</p>
            <p class="line-2">简历投递：uenan.su@zkj.com</p>
          </div>
        </div>
      </div>
      <div class="root-right">
        <div class="wechat-code">
          <div class="scale-img hover">
            <img :src="wechatCode">
          </div>
          <p class="text">微信公众号</p>
        </div>
        <div class="offical-code">
          <div class="scale-img hover">
            <img :src="officalCode">
          </div>
          <p class="text">官方微信号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@img/home/logo.png'),
      banner: require('@img/home/footer.png'),
      wechatCode: require('@img/fotter/wechat_code.png'),
      officalCode: require('@img/fotter/offical_code.png')
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/variable.less);

.footer {
  position: relative;
  width: 100%;

  .minibox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: @mini_width;
    height: 320px;
    padding: 0 180px;
    box-sizing: border-box;
    margin: auto;
    background-size: 100% 100%;

    .root-left {
      display: flex;
      align-items: center;
      height: 41px;

      .logo {
        width: 150px;
        height: 41px;
      }

      .container {
        display: flex;
        align-items: center;
        margin-left: 32px;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #ccc;

        .container-left {
          .line-1 {
            margin-bottom: 12px;
          }
        }

        .container-right {
          margin-left: 24px;
          .line-1 {
            margin-bottom: 12px;
          }
        }
      }
    }

    .root-right {
      display: flex;
      align-items: center;

      .wechat-code {
        .scale-img {
          width: 104px;
          height: 104px;
        }
        p {
          margin-top: 5px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          color: #ccc;
        }
      }

      .offical-code {
        display: block;
        margin-left: 24px;

        .scale-img {
          width: 104px;
          height: 104px;
        }

        .text {
          margin-top: 5px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
