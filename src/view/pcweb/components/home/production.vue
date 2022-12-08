<template>
  <div class="home-introduction">
    <div class="minibox">
      <home-title>
        <template slot="title">我们的产品</template>
        <template slot="desc">全场景产品矩阵，构建营销与服务一体化</template>
      </home-title>
      <ul>
        <li
          v-for="(item, idx) of list"
          :key="idx"
          :style="`background-image: url(${item});`"
        >
          <button class="">了解更多</button>
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
      list: [require('@img/home/home_page_2_1.png'), require('@img/home/home_page_2_1.png'), require('@img/home/home_page_2_1.png'), require('@img/home/home_page_2_1.png')]
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.home-introduction {
  position: relative;
  width: 100%;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 568px;
    overflow: hidden;
    background: #fff;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 60px;
      li {
        width: 252px;
        height: 283px;
        background-size: 100% 100%;
        margin-left: 24px;

        button {
          display: block;
          margin: 235px auto 0;
          width: 220px;
          height: 32px;
          color: #3076ff;
          border: 1px solid #3076ff;
          box-sizing: border-box;

          &:hover {
            cursor: pointer;
            background: #3076ff;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
