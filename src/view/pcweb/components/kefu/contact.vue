<template>
  <div class="bottom-notice">
    <div class="bottom-notice-box">
      <h1>联系客服</h1>
      <div class="con">
        <div class="left">
          <div class="box">
            <div class="title">
              <span>一、</span>
              <img
                :src="$static.icon.icon_wechat"
                class="icon"
              >
              <span>【微信公众号】</span>
            </div>
            <div class="desc">请扫描下方二维码，或直接搜索"XL星酪游戏"<br>关注官方微信公众号</div>
            <div class="qrcode">
              <img :src="$static.icon.qrcode">
            </div>
          </div>
        </div>
        <div class="right">
          <div class="box">
            <div class="title">
              <span>二、</span>
              <img
                :src="$static.icon.icon_qq"
                class="icon"
              >
              <span>【客服QQ】</span>
            </div>
            <div class="desc">
              <span>请添加客服QQ，联系官方客服~<br>客服QQ: </span>
              <span style="color: #ff2626;">394838479</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.bottom-notice {
  width: 100%;
  height: 600px;
  overflow: hidden;

  .bottom-notice-box {
    width: @mini_width;
    height: 100%;
    margin: auto;
  }

  h1 {
    display: block;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  .con {
    margin-top: 80px;
    font-size: 0;

    .right,
    .left {
      position: relative;
      display: inline-block;
      width: 50%;
      font-size: 15px;

      .box {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        color: #5f5959;

        .title {
          font-size: 20px;

          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 35px;
          }
        }

        .desc {
          margin-top: 50px;
          line-height: 30px;
        }

        .qrcode {
          position: absolute;
          left: 0;
          right: 0;
          margin: 80px auto 0;
          width: 200px;
          height: 200px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            transition: transform 1s;

            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }
}
</style>
