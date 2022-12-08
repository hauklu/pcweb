<template>
  <div class="banner">
    <div
      :style="`background-image: url(${$static.home.home_banner_bg});`"
      class="banner-bg"
    >
      <div class="minibox">
        <ul>
          <li
            :style="`background-image: url(${$static.home.home_game_download});`"
            @click="gameDownload"
          >pc</li>
          <li
            :style="`background-image: url(${$static.home.home_game_download});`"
            @click="gameDownload"
          >android</li>
          <li
            :style="`background-image: url(${$static.home.home_game_download});`"
            @click="gameDownload"
          >ios</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'

export default {
  components: {
  },
  data() {
    return {
      // 导航列表
      list: [{
        name: '傲世龙城',
        banner: this.$static.home.banner_game_01,
        icon: this.$static.home.banner_game_icon_aslc,
        link: 'https://web.xinglaogame.com/#/m/c3731c997baf45dfa5497340253719c6/s/01d6fae38cdd4fbaa30b3f7eb123cb32/t/platform?gameurl=//kpa.xinglaogame.com/platform/prod/6/aslc_xlgame.apk'
      }, {
        name: '烽火龙城',
        banner: this.$static.home.banner_game_02,
        icon: this.$static.home.banner_game_02_icon,
        link: 'https://web.xinglaogame.com/#/m/5b8992a8c54949ac8eb3dd13db5c5755/s/a1c3cd9cea5e4f5d8846f4cc0536c147/t/platform?gameurl=//kpa.xinglaogame.com/platform/prod/7/fhlc_xlgame.apk'
      }, {
        name: '主宰传奇',
        banner: this.$static.home.banner_game_03,
        icon: this.$static.home.banner_game_03_icon,
        link: 'https://web.xinglaogame.com/#/m/7b7406f55eed4f959b17450fd585dc0b/s/73df33b31db74618af19fa7e15835192/t/platform?gameurl=//kpa.xinglaogame.com/platform/prod/8/zzcq_xlgame.apk'
      }],
      cIdx: 0 // tab当前下标位置
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 游戏下载
    gameDownload() {
      toast('暂未开放, 敬请期待!')
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

@height: @max_width * 0.378; // 组件高度
@ulBottom: @height * 0.14; // ul列表距离底部高度
@liWidth: 290px;
@liHeight: @liWidth / 1.33;
@bottomHeight: @liHeight * 0.14;
@bottomPadding: @liHeight * 0.04;

.banner {
  position: relative;
  width: 100%;
  height: @height;

  .banner-bg {
    width: 100%;
    height: @height;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;

    .minibox {
      position: relative;
      margin: auto;
      width: @mini_width;
      height: @height;
      overflow: hidden;
      // background-color: thistle;
    }

    ul {
      margin-top: 580px;
      display: flex;
      justify-content: center;

      li {
        width: 189px;
        height: 55px;
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 20px;
        font-size: 0;
        border-radius: 5px;
        // background-color: thistle;
        transition: all 0.3s;
        &:hover {
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.3);
          transform: translate(0, -1px);
        }

        &:nth-child(1) {
          background-position: 0px 0px;
        }
        &:nth-child(2) {
          background-position: -218px 0px;
        }
        &:nth-child(3) {
          background-position: -437px 0px;
        }
      }
    }
  }
}
</style>
