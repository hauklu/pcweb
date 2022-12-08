<template>
  <div class="cswiper">
    <div class="swiper__track">
      <div
        v-for="(i, idx) of list"
        ref="slide"
        :key="idx"
        :style="`transition: all ${transitionDuration}ms ease;`"
        class="slide slide-out"
      >
        <div
          :style="`background-image: url(${i.banner});`"
          class="slide-con"
        >
          <div class="bottom">
            <img
              :src="i.icon"
              class="icon"
            >
            <div class="text-wrap">
              <p class="text-title">{{ i.title }}</p>
              <p class="text-desc">{{ i.desc }}</p>
            </div>
            <button
              :style="`background-image: url(${$static.home.home_icon_btn_bg})`"
              class="btn"
              @click="openGameHome(i.link)"
            >进入官网</button>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-switch-wrap">
      <div
        :style="`background-image: url(${$static.home.home_icon_arrow});`"
        class="prev"
        @click="prevNav"
      />
      <div
        :style="`background-image: url(${$static.home.home_icon_arrow});`"
        class="next"
        @click="nextNav"
      />
    </div>
    <div class="swiper-pagination-wrap">
      <div
        v-for="(i, idx) of list"
        :key="idx"
        :style="`background-image: url(${$static.home.home_icon_pagination});`"
        :class="idx === cidx ? 'pagination-item__active' : ''"
        class="pagination-item"
        @click="paginationSelect(idx)"
      >{{ idx }}</div>
    </div>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'

export default {
  props: {
    // 轮播图数据列表
    data: {
      type: Array,
      default: () => []
    },
    // slide轮播间隔时间
    loopTime: {
      type: Number,
      default: 2000
    },
    // slide轮播切换动画过渡时间
    transitionDuration: {
      type: Number,
      default: 300
    },
    // 轮播图初始下标
    cindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // 数据列表
      list: [],
      // 数据列表长度
      listLen: 0,
      // 当前轮播图的下标
      cidx: undefined,
      // 轮播定时器
      loopInterval: undefined
    }
  },
  watch: {
    cidx(newIdx) {
      this.sldActiveByIdx(newIdx)
      this.slideChange(newIdx)
    }
  },
  created() {
  },
  mounted() {
    this.initSld()
  },
  methods: {
    // 打开游戏官网
    openGameHome(link) {
      if (link || link.length > 1) {
        window.open(link)
      } else {
        toast('暂未开放')
      }
    },
    // 轮播图切换时触发
    slideChange(idx) {
      this.$emit('slide-change', idx)
    },
    // 分页器选中
    paginationSelect(idx) {
      this.cidx = idx
    },
    // 终止轮播
    loopStop() {
      clearInterval(this.loopInterval)
    },
    // 开始轮播
    loopStart() {
      this.loopInterval = setInterval(() => {
        this.nextNav()
      }, this.loopTime)
    },
    // 初始化sld的展示
    initSldIdx() {
      this.cidx = this.cindex
    },
    // 初始化列表
    initList() {
      this.list = this.data
      this.listLen = this.list.length
    },
    // 初始化sld
    initSld() {
      this.initList()
      this.initSldIdx()
      this.loopStart()
    },
    // 上一张
    prevNav() {
      if (this.cidx <= 0) {
        this.cidx = this.listLen - 1
        return
      }
      this.cidx--
    },
    // 下一张
    nextNav() {
      if (this.cidx >= this.listLen - 1) {
        this.cidx = 0
        return
      }
      this.cidx++
    },
    // slide当前活动元素样式
    sldActiveStyle(idx) {
      this.$nextTick(() => {
        const els = this.$refs.slide
        // 当前下标-上一个下标
        let cidxPrev = idx - 1
        // 当前下标-下一个下标
        let cidxNext = idx + 1
        if (idx === 0) cidxPrev = this.listLen - 1
        if (idx === this.listLen - 1) cidxNext = 0
        for (let i = 0; i < els.length; i++) {
          const el = els[i].classList
          if (i === idx || i === cidxPrev || i === cidxNext) {
            el.remove('slide-out')
          } else {
            el.add('slide-out')
          }
          i === cidxPrev ? el.add('slide-prev') : el.remove('slide-prev')
          i === cidxNext ? el.add('slide-next') : el.remove('slide-next')
        }
      })
    },
    // idx改变->slide随之滑动
    sldActiveByIdx(idx) {
      this.sldActiveStyle(idx)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../../public/assets/css/mixins.less);
@import url(../../../assets/css/variable.less);

.cswiper {
  @width: 1000px;
  @slides_width: 1000px;
  @slides_height: @slides_width * 0.563;

  position: relative;
  width: @width;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // slides盒子
  .swiper__track {
    position: relative;
    width: @slides_width;
    height: @slides_height;
    perspective: @slides_width;

    .slide {
      position: absolute;
      left: 0;
      top: 0;
      width: @slides_width;
      height: @slides_height;
      z-index: 10;
      border: 1px solid #7b7b7b;

      .slide-con {
        position: relative;
        width: @slides_width;
        height: @slides_height;
        color: #fff;
        background-size: cover;
        background-repeat: no-repeat;

        .bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100px;
          padding: 20px;
          box-sizing: border-box;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;

          .icon {
            width: 80px;
            height: 80px;
            transition: all 0.3s;
            &:hover {
              transform: translate(0, -1px);
            }
          }

          .text-wrap {
            width: 70%;
            height: 80px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .text-title {
              color: #fff;
              line-height: 25px;
              font-weight: 500;
              font-size: 18px;
            }

            .text-desc {
              color: hsla(0, 0%, 100%, 0.6);
              font-size: 12px;
            }
          }

          .btn {
            width: 172px;
            height: 58px;
            background-repeat: no-repeat;
            background-position: -2px 0;
            border: none;
            border-radius: 30px;
            transition: all 0.3s;
            &:hover {
              cursor: pointer;
              transform: translate(0, -1px);
              color: #000;
            }
          }
        }
      }
    }

    // slide默认隐藏
    .slide-out {
      transform: rotateY(0) translateX(0) translateZ(0) scale(0.6);
      z-index: -1;
      opacity: 0 !important;
    }

    // slide上一个样式
    .slide-prev {
      z-index: 3;
      // transform: rotateY(30deg) translateX(-20px) translateZ(-250px)
      //   scale(0.95);
      transform: rotateY(0deg) translateX(-120px) translateZ(-0px) scale(0.9);
    }

    // slide下一个样式
    .slide-next {
      z-index: 3;
      // transform: rotateY(-35deg) translateX(120px) translateZ(-40px)
      //   scale(0.7);
      transform: rotateY(-0deg) translateX(120px) translateZ(-0px) scale(0.9);
    }
  }

  // 上/下一个切换盒子
  .swiper-switch-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: @slides_width * 1.11;
    height: 84px;
    // background-color: chartreuse;

    .next,
    .prev {
      position: absolute;
      display: inline-block;
      width: 43px;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        cursor: pointer;
      }
      &:active {
        transform: scale(0.9);
      }
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
      background-position: -59px 0;
    }
  }

  // 分页器盒子
  .swiper-pagination-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 140px;
    display: flex;
    justify-content: center;

    .pagination-item {
      position: relative;
      display: inline-block;
      width: 19px;
      height: 19px;
      background-position: -20px 0;
      border-radius: 50%;
      font-size: 0;
      margin: 0 20px;
      &:hover {
        cursor: pointer;
      }
      &::after {
        position: absolute;
        right: -39px;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        display: block;
        width: 36px;
        height: 1px;
        background-color: #fff;
      }

      &:first-child {
        &::before {
          position: absolute;
          left: -82px;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: block;
          width: 80px;
          height: 1px;
          .linear-gradient-bg(#fff, #000);
        }
      }

      &:last-child {
        &::after {
          right: -82px;
          width: 80px;
          .linear-gradient-bg(#fff, #000, right);
        }
      }
    }

    .pagination-item__active {
      background-position: -1px 0;
    }
  }
}
</style>
