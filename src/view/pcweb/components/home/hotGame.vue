<template>
  <div class="hot-game">
    <div
      :style="`background-image: url(${$static.home.home_hot_game_bg});`"
      class="hot-game-bg"
    >
      <div class="hot-game-minibox">
        <cswiper-roll
          :data="list"
          :loop-time="3000"
          :transition-duration="500"
          class="cswiper"
          @slide-change="swiperChange"
        />
        <span class="seo">原始传奇，傲世龙城，烽火龙城，玛法文明</span>
      </div>
    </div>
  </div>
</template>

<script>
import cswiperRoll from './hotGame/cswiperRoll.vue'
export default {
  components: {
    cswiperRoll
  },
  data() {
    return {
      list: [{
        banner: this.$static.home.home_game_aslc_banner,
        icon: this.$static.home.home_game_aslc_icon,
        title: '傲世龙城',
        desc: '全新3D版传奇，高清画质',
        link: 'http://h5.xinglaogame.com/#/zone/07f77fac8e4f40218bd4506ce1271fe3'
      },
      {
        banner: this.$static.home.home_game_fhlc_banner,
        icon: this.$static.home.home_game_fhlc_icon,
        title: '烽火龙城',
        desc: '传奇经典复刻，重燃激情岁月',
        link: 'http://h5.xinglaogame.com/#/zone/b1858344133f4d41b4e97a431e6029a6'
      },
      {
        banner: this.$static.home.home_game_mfwm_banner,
        icon: this.$static.home.home_game_mfwm_icon,
        title: '玛法文明',
        desc: '经典1.76版本复刻，再战玛法',
        link: 'http://h5.xinglaogame.com/#/zone/cc2d4e2ef67243a0bfd9925df858477a'
      }
        //   ,
        // {
        //   banner: this.$static.home.banner_game_01,
        //   icon: this.$static.home.banner_game_01_icon
        // },
        // {
        //   banner: this.$static.home.banner_game_02,
        //   icon: this.$static.home.banner_game_02_icon
        // }
      ]
    }
  },
  methods: {
    // swiper改变时触发
    swiperChange(idx) {
      // console.log(idx)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

@height: @max_width * 0.516; // 组件高度

.hot-game {
  position: relative;
  width: 100%;
  height: @height;

  .hot-game-bg {
    width: 100%;
    height: @height;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    overflow: hidden;
  }

  .hot-game-minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: @height;
    // overflow: hidden;

    .cswiper {
      // margin-top: 100px;
    }

    .seo {
      .seo();
    }
  }
}
</style>
