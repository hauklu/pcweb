<template>
  <div class="top-nav">
    <header class="minibox">
      <img
        src="../../../../../static/img/home/logo.png"
        class="logo"
      >
      <ul class="nav">
        <li
          v-for="(i, idx) of list"
          :key="idx"
          :class="i.style"
          @click="switchTab(i, idx)"
          @mouseover="liMouseover"
          @mouseout="liMouseout"
        >
          {{ i.name }}
        </li>
      </ul>
      <div class="call">
        <img src="../../../../../static/img/home/icon3.png">
        <span>4008017799</span>
      </div>
      <h1 class="seo">通信, 企业通信</h1>
    </header>
  </div>
</template>

<script>
import { toastLoading } from '@/utils/toast'

export default {
  components: {
  },
  data() {
    return {
      // 导航列表
      list: [{
        path: '/home',
        name: '首页',
        style: ''
      }, {
        path: '/kefu',
        name: '产品介绍',
        style: ''
      }, {
        path: '/tutelage',
        name: '解决方案',
        style: ''
      }, {
        path: '/tutelage',
        name: '渠道合作',
        style: ''
      }, {
        path: '/tutelage',
        name: '免费试用',
        style: ''
      }, {
        path: '/tutelage',
        name: '关于我们',
        style: ''
      }, {
        path: '/tutelage',
        name: '联系我们',
        style: ''
      }],
      // 当前tab下标
      cIdx: 0
    }
  },
  watch: {
    cIdx(newIdx, oldIdx) {
      this.changeTab(newIdx)
    }
  },
  created() {
  },
  mounted() {
    this.initTab()
  },
  methods: {
    // 鼠标离开li时触发
    liMouseout() {
      this.changeTab(this.cIdx)
    },
    // 鼠标经过li时触发
    liMouseover() {
      this.list.forEach((item, idx, arr) => {
        item.style = ''
      })
    },
    // tab下标改变时触发
    changeTab(newIdx) {
      this.list.forEach((item, idx, arr) => {
        item.style = ''
      })
      this.list[newIdx].style = 'li--active'
      this.$router.push(this.list[newIdx].path)
    },
    // 切换tab
    switchTab(i, idx) {
      this.cIdx = idx
    },
    initTab() {
      this.changeTab(this.cIdx)
    },
    toastLoading
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

@navHeight: @topNavHeight;

.top-nav {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: @max_width;
  min-width: @mini_width;
  height: @navHeight;
  margin: auto;
  overflow: hidden;
  // box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  // background: rgba(255, 255, 255, 0.8);
  background: transparent;
  box-sizing: border-box;

  .minibox {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -@mini_width / 2;
    width: @mini_width;
    height: @navHeight;
    padding: @navHeight * 0.1 0;
    box-sizing: border-box;
    border-bottom: 1px solid #405581;
  }
  .seo {
    .seo();
  }

  .logo {
    display: inline-block;
    width: 104px;
    height: 28px;
    margin-left: 180px;

    &:hover {
      animation: iconAni 0.8s;
    }

    @keyframes iconAni {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(1deg);
      }
      50% {
        transform: rotate(-1deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  .nav {
    margin-left: 80px;
    li {
      position: relative;
      display: inline-block;
      line-height: @navHeight;
      font-size: 16px;
      margin-left: 34px;
      color: #fff;
      transition: all 0.2s linear;

      &::after {
        content: '';
        position: absolute;
        top: @navHeight - 15px;
        left: 50%;
        transform: translateX(-50%);
        .wh(0px, 0px);
        // background-color: #818181;
        transition: all 0.2s linear;
      }

      &:hover {
        cursor: pointer;
        color: #368fff;
        transform: translate3d(0, -2px, 0);

        &::after {
          .wh(95%, 2px);
          background-color: #cf0f32;
        }
      }
    }

    .li--active {
      color: #368fff;

      &::after {
        .wh(95%, 2px);
        background-color: #cf0f32;
      }
    }
  }

  .call {
    margin-left: 80px;
    display: flex;
    align-items: center;
    width: 130px;
    height: 32px;
    background: #368fff;
    border-radius: 34px 34px 34px 34px;
    opacity: 1;
    padding-left: 16px;
    box-sizing: border-box;

    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }

    span {
      font-size: 12px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 14px;
    }
  }
}
</style>
