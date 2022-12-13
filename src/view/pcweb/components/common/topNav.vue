<template>
  <div
    :class="isFixed && 'header__fixed'"
    class="top-nav"
  >
    <div class="minibox__wrap">
      <div class="minibox">
        <pb-sticky
          class="minibox-sticky"
          @scroll="stickyScroll"
        >
          <header class="header">
            <img
              :src="logo"
              class="root-logo"
            >
            <div class="root-nav">
              <ul class="tab">
                <li
                  v-for="(item, idx) of list"
                  ref="tab"
                  :key="idx"
                  :class="idx === tabIdx && 'tab-item__active'"
                  class="tab-item"
                  @click="switchTab(item, idx)"
                >
                  <!-- <el-dropdown  :tabindex="0">
                    <span class="tab-item-dropdown-head">
                      <span class="tab-item-text">{{ item.name }}</span>

                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>电销卡</el-dropdown-item>
                      <el-dropdown-item>隐私号通话</el-dropdown-item>
                      <el-dropdown-item>持脉scrm</el-dropdown-item>
                      <el-dropdown-item>工作手机</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown> -->

                  <span
                    v-if="item.rootPath === '/production'"
                    class="dropdown"
                    @mouseenter="dropdownMouseenter"
                    @mouseleave="dropdownMouseleave"
                  >
                    <span class="dropdown-head">
                      <span class="tab-item-text">{{ item.name }}</span>
                      <i class="el-icon-arrow-down tab-item-icon" />
                    </span>
                    <div
                      :class="dropdownVisible && 'dropdown-menu__show'"
                      class="dropdown-menu"
                    >
                      <ul class="dropdown-menu-box">
                        <li
                          v-for="(ditem, didx) of dropdownList"
                          :key="didx"
                          class="dropdown-menu-box-item"
                          @click.stop="clickDropdownItem(ditem, didx)"
                        >{{ ditem.name }}</li>
                      </ul>
                    </div>
                  </span>
                  <span
                    v-else
                    class="tab-item-text"
                  >{{ item.name }}</span>
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
    </div>
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
        rootPath: '/',
        path: '/',
        name: '首页',
        style: ''
      }, {
        rootPath: '/production',
        path: '/production/call_card',
        name: '产品介绍',
        style: ''
      }, {
        rootPath: '/solution',
        path: '/solution',
        name: '解决方案',
        style: ''
      }, {
        rootPath: '/channel',
        path: '/channel',
        name: '渠道合作',
        style: ''
      }, {
        rootPath: '/try',
        path: '/try',
        name: '免费试用',
        style: ''
      }, {
        rootPath: '/about',
        path: '/about',
        name: '关于我们',
        style: ''
      }, {
        rootPath: '/call',
        path: '/call',
        name: '联系我们',
        style: ''
      }],
      // 当前tab下标
      tabIdx: 0,
      isFixed: false, // head的悬浮状态
      dropdownVisible: true,
      dropdownList: [{
        name: '电销卡',
        routeName: 'production_call_card'
      }, {
        name: '隐私号通话',
        routeName: 'production_private_call'
      }, {
        name: '持脉scrm',
        routeName: 'production_scrm'
      }, {
        name: '工作手机',
        routeName: 'production_work_mobile'
      }]
    }
  },
  watch: {
    tabIdx(newIdx, oldIdx) {
      this.setTabLineX()
    }
  },
  created() {
  },
  mounted() {
    this.initTab()
  },
  beforeDestroy() {
  },
  methods: {
    clickDropdownItem(item, idx) {
      this.tabIdx = 1
      console.log(item.routeName)
      this.$router.push({
        name: item.routeName
      })
      // this.$router.replace({
      //   path: '/production/call_card'
      // })
    },
    dropdownMouseenter() {
      this.dropdownVisible = true
    },
    dropdownMouseleave() {
      this.dropdownVisible = false
    },
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
    // 初始化tab下标
    initIdx() {
      const rootPath = this.$route.matched[1].path
      const idx = this.list.findIndex(item => item.rootPath === rootPath)
      if (idx !== -1) this.tabIdx = idx
    },
    // 切换tab
    switchTab(item, idx) {
      this.tabIdx = idx
      this.$router.push(this.list[idx].path)
    },
    initTab() {
      this.initIdx()
      this.setTabLineX()
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
  left: 0;
  right: 0;
  width: @max_width;
  margin: auto;
  z-index: 99;
  height: @topNavHeight;
  border-bottom: 1px solid #405581;
  background: transparent;
  box-sizing: border-box;

  & /deep/ .pb-sticky {
  }

  .minibox__wrap {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
  }
  .minibox {
    width: @mini_width;
    height: @navHeight;
    margin: 0 auto;
  }

  .header {
    display: flex;
    align-items: center;
    width: @mini_width;
    height: @navHeight;
    margin: 0 auto;
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

    .tab {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .tab-item {
        flex: 1;
        height: @topNavHeight;
        position: relative;
        display: inline-block;
        line-height: @navHeight;
        text-align: center;

        .tab-item-icon,
        .tab-item-text {
          font-size: 16px;
          color: #fff;
        }

        .dropdown {
          position: relative;
          display: inline-block;
          height: 100%;
          .dropdown-head {
          }
          .dropdown-menu {
            // position: absolute;
            // top: @navHeight;
            transform-origin: center top;
            transition: all 0.2s;
            transform: scaleY(0);
            opacity: 0;
            overflow: hidden;
            .dropdown-menu-box {
              height: auto;
              background-color: #fff;
              .dropdown-menu-box-item {
                height: 45px;
                line-height: 45px;
                font-size: 13px;
                color: #606266;
                box-sizing: border-box;
                // border-bottom: 1px solid #ccc;
                &:hover {
                  color: #fff;
                  background: #368fff;
                }
              }
            }
          }

          .dropdown-menu__show {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        &:hover {
          cursor: pointer;
          transform: translate3d(0, -2px, 0);

          .tab-item-icon,
          .tab-item-text {
            color: #368fff;
          }
        }
      }

      .tab-item__active {
        .tab-item-icon,
        .tab-item-text {
          color: #368fff;
        }
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

.header__fixed {
  background: #0c1e4a;
}
</style>
