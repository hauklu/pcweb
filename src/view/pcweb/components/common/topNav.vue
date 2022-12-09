<template>
  <div class="top-nav">
    <pb-sticky @scroll="stickyScroll">
      <header
        :class="isFixed && 'minibox__fixed'"
        class="minibox"
      >
        <img
          :src="logo"
          class="root-logo"
        >
        <div class="root-nav">
          <ul>
            <li
              v-for="(i, idx) of list"
              ref="tab"
              :key="idx"
              :class="i.style"
              @click="switchTab(i, idx)"
              @mouseover="liMouseover"
              @mouseout="liMouseout"
            >
              {{ i.name }}
            </li>
            <div
              ref="tabLine"
              class="root-nav-line"
            />
          </ul>
        </div>
        <div class="root-call hover">
          <img src="../../../../../static/img/home/icon3.png">
          <span>4008017799</span>
        </div>
      </header>
    </pb-sticky>
  </div>
</template>

<script>
import sticky from '@/view/public/components/sticky.vue'
import { toastLoading } from '@/utils/toast'
export default {
  components: {
    pbSticky: sticky
  },
  data() {
    return {
      logo: require('@img/home/logo.png'),
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
      tabIdx: 0,
      isFixed: false // head的悬浮状态
    }
  },
  watch: {
    tabIdx(newIdx, oldIdx) {
      this.changeTab(newIdx)
      this.setTabLineX()
    }
  },
  created() {
  },
  mounted() {
    this.initTab()
    this.setTabLineX()
  },
  beforeDestroy() {
  },
  methods: {
    // 设置tab__line横条的x轴每次横移需要的距离
    setTabLineX() {
      this.$nextTick(() => {
        const tabWidth = this.$refs.tab[0].offsetWidth
        const elLine = this.$refs.tabLine
        const tabLineX = tabWidth * this.tabIdx + tabWidth / 2
        elLine.style.cssText += `transform: translateX(${tabLineX}px) translateX(-50%);`
      })
    },
    // sticky滚动时触发
    stickyScroll({ isFixed, scrollTop }) {
      this.isFixed = (scrollTop > 100)
    },
    // 鼠标离开li时触发
    liMouseout() {
      this.changeTab(this.tabIdx)
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
      this.tabIdx = idx
    },
    initTab() {
      this.changeTab(this.tabIdx)
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
  z-index: 99;
  width: @mini_width;
  margin: auto;
  height: @topNavHeight;
  background: transparent;

  & /deep/ .pb-sticky {
  }

  .minibox {
    display: flex;
    align-items: center;
    width: @mini_width;
    height: @navHeight;
    padding: @navHeight * 0.1 0;
    box-sizing: border-box;
    border-bottom: 1px solid #405581;
    background: transparent;
  }

  .minibox__fixed {
    background: #0c1e4a;
  }

  .root-logo {
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

  .root-nav {
    width: 680px;
    margin-left: 80px;

    ul {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      li {
        flex: 1;
        height: @topNavHeight;
        position: relative;
        display: inline-block;
        line-height: @navHeight;
        font-size: 16px;
        color: #fff;
        text-align: center;

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
      }

      .root-nav-line {
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 50px;
        height: 2px;
        background: #fff;
        transition: all 0.5s;
      }
    }
  }

  .root-call {
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
