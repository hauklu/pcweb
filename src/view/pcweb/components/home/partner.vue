<template>
  <div class="home-partner">
    <div
      :style="`background-image: url(${banner});`"
      class="minibox"
    >
      <home-title>
        <template slot="title">我们的合作伙伴</template>
        <template slot="desc">权藏认证，深受国内众多知名企业认可</template>
      </home-title>
      <ul class="block">
        <li
          v-for="(item, idx) of list"
          :key="idx"
          class="block-item hover"
        >
          <div class="banner scale-img">
            <img
              :src="item.banner"
              class="banner-img scale-img-item"
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import homeTitle from './common/homeTitle.vue'
export default {
  components: {
    homeTitle
  },
  data() {
    return {
      list: [{
        banner: require('@img/home/scene_1.png')
      }, {
        banner: require('@img/home/scene_2.png')
      }, {
        banner: require('@img/home/scene_3.png')
      }, {
        banner: require('@img/home/scene_4.png')
      }, {
        banner: require('@img/home/scene_5.png')
      }, {
        banner: require('@img/home/scene_6.png')
      }, {
        banner: require('@img/home/scene_7.png')
      }, {
        banner: require('@img/home/scene_8.png')
      }]
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/variable.less);
@import url(../../assets/css/publice.less);

.home-partner {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 840px;
    overflow: hidden;
    background: #f3f4f6;

    .block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 1100px;
      margin: auto;
      margin-top: 60px;

      .block-item {
        width: 252px;
        height: 100px;
        margin-right: 20px;
        background-size: 100% 100%;
        margin-bottom: 24px;

        .banner {
          .scale-img(252px, 144px);
        }
      }
    }
  }
}
</style>
