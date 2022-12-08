<template>
  <div class="tabbar">
    <div class="banner">
      <img
        :src="$static.tutelage.tutelage"
        class="img-banner"
      >
    </div>
    <div class="nav">
      <ul class="tabs">
        <li
          v-for="(i, idx) of list"
          :key="idx"
          :class="idx === cIdx ? 'li--active' : ''"
          @click="switchTab(i, idx)"
        >
          {{ i.title }}
        </li>
      </ul>
      <div
        v-for="(i, idx) of list"
        :key="idx"
        class="tab"
      >
        <div
          v-show="idx === cIdx"
          class="tab-box"
        >
          <p v-html="i.context" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutelageData from './tutelage.js'
import { toastLoading } from '@/utils/toast'

export default {
  components: {
  },
  data() {
    return {
      // 导航列表
      list: [{
        title: '系统介绍',
        context: tutelageData.systemDesc
      }, {
        title: '服务流程',
        context: tutelageData.flow
      }, {
        title: '常见问题',
        context: tutelageData.problem
      }],
      cIdx: 0
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 切换tab
    switchTab(i, idx) {
      this.cIdx = idx
      this.$router.push(i.path)
    },
    toastLoading
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.tabbar {
  width: 100%;

  .banner {
    width: @mini_width;
    height: @mini_width * 0.209;
    margin: auto;
    margin-top: 30px;
    overflow: hidden;

    .img-banner {
      position: relative;
      width: 100%;
      transition: transform 0.4s;

      &:hover {
        transform: scale(1.05);
      }

      &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 5px;
        background-color: rgb(197, 104, 12);
      }
    }
  }

  .nav {
    .tabs {
      width: 100%;
      height: 30px;
      line-height: 30px;
      border: 1px solid #d3d5d7;
      background-color: #f6fafd;
      margin-top: 20px;

      li {
        display: inline-block;
        padding: 0 20px;
        color: #666;
        transition: transform 0.4s;

        &:hover {
          cursor: pointer;
          color: #fc8713;
          transform: translate3d(1px, 0, 0);
        }
      }

      .li--active {
        color: #fc8713;
      }
    }

    .tab {
      height: auto;
      .tab-box {
        padding: 30px 0;

        p {
          font-size: 14px;
          color: rgb(121, 121, 121);
        }
      }
    }
  }
}
</style>
