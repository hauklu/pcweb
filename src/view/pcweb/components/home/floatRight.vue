<template>
  <div class="float-right">
    <div
      ref="nav"
      :style="`background-image: url(${$static.home.home_sprite});`"
      :class="navSelectClass"
      class="nav"
    >
      <div
        class="qq"
        @mouseover="() => { navSelectClass = 'nav__qq' }"
        @mouseleave="() => { navSelectClass = '' }"
      >
        <div
          :style="`background-image: url(${$static.home.home_sprite});`"
          class="qq-item"
        />
      </div>
      <div
        class="wechat"
        @mouseover="() => { navSelectClass = 'nav__wechat' }"
        @mouseleave="() => { navSelectClass = '' }"
      >
        <img
          :src="$static.icon.qrcode"
          class="wechat-item"
        >
      </div>
      <div
        class="back-top"
        @click="backTop"
      >回到顶部</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navSelectClass: ''
    }
  },
  methods: {
    // 回到顶部
    backTop() {
      window.scroll(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
@width: 230px;
@height: 343px;

.float-right {
  position: fixed;
  top: 100px;
  right: 0;

  .nav {
    position: relative;
    width: @width;
    height: @height;
    background-position: 0px 0px;

    .qq,
    .wechat {
      position: absolute;
      left: @width * 0.24;
      width: @width * 0.446;
      height: @height * 0.2;
      font-size: 0;
      transition: all 0.8s;
      &:hover {
        cursor: pointer;
        transform: translate(-10px, 0px);
        // background-color: rgba(244, 244, 244, 0.3);
      }
    }

    .wechat {
      top: @height * 0.28;
      &:hover .wechat-item {
        display: block;
      }

      .wechat-item {
        display: none;
        position: absolute;
        top: 0;
        left: -200px;
        width: 190px;
        height: 190px;
        border-radius: 5px;
      }
    }

    .qq {
      top: @height * 0.493;
      &:hover .qq-item {
        display: block;
      }

      .qq-item {
        display: none;
        position: absolute;
        top: 0;
        left: -200px;
        width: 190px;
        height: 190px;
        background-position: 0px -350px;
      }
    }

    .back-top {
      position: absolute;
      top: @height * 0.77;
      left: @width * 0.255;
      width: @width * 0.446;
      height: @height * 0.1;
      color: #000;
      font-size: 20px;
      font-weight: 800;
      padding-left: 8px;
      box-sizing: border-box;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
        color: #fff;
        transform: translateY(-1px);
      }
    }
  }

  // 导航选中wechat
  .nav__wechat {
    background-position: -230px 0px;
  }

  // 导航选中qq
  .nav__qq {
    background-position: -460px 0px;
  }
}
</style>
