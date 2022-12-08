<template>
  <div class="cswiper">
    <div class="swiper__track">
      <div
        ref="slideParent"
        :style="`width: ${sldTrackWidth}px; transform: translate3d(${sldTranslate}px, 0, 0); transition-duration: ${transitionDuration}ms;`"
        class="swiper-slide-box"
      >
        <div
          v-for="(i, idx) of list"
          ref="slide"
          :key="idx"
          class="slide"
        >
          <!-- :style="`transform: translate3d(100px, 0, 0);`" -->
          <div class="slide-con">
            <img :src="i.img">
          </div>
        </div>
      </div>
      <!-- <div class="swiper-pagination-box">
        <div
          v-for="i of list"
          :key="i.__sldIdx"
          :class="sldIdxCon === i.__sldIdx+1 ? 'pagination-item__active':''"
          class="pagination-item"
          @click="paginationSelect(i.__sldIdx)"
        >{{ i.__sldIdx + 1 }}</div>
      </div> -->
    </div>
    <div class="prev-wrap">
      <div
        class="prev"
        @click="prevNav"
      >上一张</div>
    </div>
    <div class="next-wrap">
      <div
        class="next"
        @click="nextNav"
      >下一张</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    clist: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: [],
      // 当前轮播图的下标
      cidx: 0,
      sldIdxCon: 0,
      // 当前sld的translate
      sldTranslate: 0,
      gears_arr: [1000, 3000, 5000, 10000, 20000],
      // 两侧箭头显示状态
      arrowStatus: {
        prevNav: true,
        nextNav: true
      },
      // 单个slide的宽度
      sldWidth: 0,
      // 所有slide轨道的宽度
      sldTrackWidth: 0,
      // 第一个sld的Translate
      sldFirstTranslate: 0,
      // 最后一个sld的Translate
      sldLastTranslate: 0,
      // 过渡时间
      transitionDuration: 0,
      transitionDurationCon: 300,
      // 轮播时间
      loopInterval: undefined,
      loopTime: 6500
    }
  },
  watch: {
    cidx(newIdx) {
      // this.currentIdx()
      // this.sldArrow(newIdx)
      this.sldActiveByIdx(newIdx)
    }
  },
  created() {
    this.initList()
  },
  mounted() {
    this.getSldAttribute()
    this.initSld()
  },
  methods: {
    // 获取sld属性
    getSldAttribute() {
      this.sldWidth = this.$refs.slide[0].offsetWidth
      this.sldTrackWidth = this.sldWidth * this.list.length
      // console.log(this.sldTrackWidth)
    },
    // 初始化列表
    initList() {
      // for (var i = 0; i < this.clist.length; i++) {
      //   var obj = this.clist[i]
      //   obj.id = i
      //   this.list.push(obj)
      // }
      // this.list.push(...this.list)
      // console.log(this.list)
      this.list = this.clist
    },
    // 终止轮播
    loopStop() {
      clearInterval(this.loopInterval)
    },
    // 开始轮播
    loopStart() {
      this.loopInterval = setInterval(() => {
        this.cidx++
      }, this.loopTime)
    },
    // 当前idx
    currentIdx() {
      // if (this.cidx === this.list.length + 1) return
      // if (this.cidx === 0) return
      // this.sldIdxCon = this.cidx
      // console.log('当前idx:' + this.sldIdxCon)
      // this.$emit('change', this.sldIdxCon)
      console.log('当前idx:' + this.cidx)
    },
    // // 分页器-选中
    // paginationSelect(idx) {
    //   // console.log(idx)
    //   this.cidx = idx + 1
    // },
    // 切换两侧箭头状态
    switchArrow(type, status) {
      if (type === 'left') this.arrowStatus.prevNav = status
      if (type === 'right') this.arrowStatus.nextNav = status
    },
    // 初始化轮播的复制节点
    initLoopClone() {
      var elParent = this.$refs.slideParent
      var el = this.$refs.slide
      var elFirst = el[0]
      var elLast = el[el.length - 1]
      var cloneFirst = elFirst.cloneNode(true)
      var cloneLast = elLast.cloneNode(true)
      elParent.insertBefore(cloneLast, elFirst)
      elParent.appendChild(cloneFirst)
    },
    // 初始化sld的展示
    initSldIdx() {
      this.cidx = this.sldIdxCon
    },
    // 初始化transtion参数
    initTranstion() {
      this.transitionDuration = this.transitionDurationCon
    },
    // 初始化sld
    initSld() {
      this.initSldIdx()
      this.initTranstion()
      // this.loopStart()
    },
    // 上一张
    prevNav() {
      // if (this.cidx <= 0) return
      this.initTranstion()
      this.cidx--
    },
    // 下一张
    nextNav() {
      // if (this.cidx >= this.list.length - 1) return
      this.initTranstion()
      this.cidx++
    },
    // sld当前活动元素样式
    sldActiveStyle(idx) {
      var el = document.getElementsByClassName('img__wrap')
      for (let i = 0; i < el.length; i++) {
        var classList = el[i].classList
        if (i === idx) {
          classList.add('img__wrap_')
        } else {
          classList.remove('img__wrap_')
        }
      }
    },
    // 无缝切换复制左右
    loopClone() {
      if (this.cidx > this.list.length) {
        setTimeout(() => {
          this.transitionDuration = 0
          this.cidx = 1
          setTimeout(() => {
            this.transitionDuration = this.transitionDurationCon
          }, this.transitionDurationCon)
        }, this.transitionDuration)
      } else if (this.cidx <= 0) {
        setTimeout(() => {
          this.transitionDuration = 0
          this.cidx = this.list.length
          setTimeout(() => {
            this.transitionDuration = this.transitionDurationCon
          }, this.transitionDurationCon)
        }, this.transitionDuration)
      }
    },
    // idx改变->slide随着滑动, 通过改变translate来滑动
    sldActiveByIdx(idx) {
      const elSlds = this.$refs.slide
      const elSldFirst = elSlds[0]
      // const elSldSecond = elSlds[1]
      const elSldLast = elSlds[this.list.length - 1]

      if (idx === this.list.length) {
        elSldFirst.style.cssText = `transform: translate3d(${this.sldTrackWidth}px, 0, 0);`
        var timer = setTimeout(() => {
          elSldFirst.style.cssText = `transform: translate3d(0, 0, 0);`
          this.transitionDuration = 0
          this.sldTranslate = 0
          // this.transitionDuration = this.transitionDurationCon
          clearTimeout(timer)
        }, this.transitionDurationCon)
      }
      if (idx === this.list.length + 1) this.cidx = 1
      if (idx === 1) elSldFirst.style.cssText = `transform: translate3d(0, 0, 0);`

      // if (idx === 0) {
      //   elSldLast.style.cssText = `transform: translate3d(0, 0, 0);`
      // }
      if (idx === -1) {
        elSldLast.style.cssText = `transform: translate3d(-${this.sldTrackWidth}px, 0, 0);`
        setTimeout(() => {
          elSldFirst.style.cssText = `transform: translate3d(0, 0, 0);`
          this.transitionDuration = 0
          this.sldTranslate = 0
          // this.transitionDuration = this.transitionDurationCon
        }, this.transitionDurationCon)
      }
      // if (idx === this.list.length - 2) {
      //   elSldLast.style.cssText = `transform: translate3d(-${this.sldTrackWidth}px, 0, 0);`
      // }

      var cindex = this.cidx
      if (idx === 1) {
        cindex = this.cidx
      } else if (idx === this.list.length) {
        cindex = 0
        console.log('当前idx:' + cindex)
      } else {
        console.log('当前idx:' + cindex)
      }

      // 改变translate
      this.sldTranslate = -idx * this.sldWidth
      // // 改变样式
      // this.sldActiveStyle(idx)
      // this.loopClone()
    }
  }
}
</script>

<style lang="less" scoped>
.cswiper {
  @width: 400px;
  @height: 300px;
  @slides_width: @width;
  @slides_height: 100%;
  @slide_width: @width;
  @slide_height: @height;

  position: relative;
  width: @width;
  height: @height;
  // background: #000;
  // overflow: hidden;

  .swiper__track {
    width: 100%;
    height: 100%;
    overflow: hidden;

    // slides盒子
    .swiper-slide-box {
      // width: @slides_width;
      height: @slides_height;
      display: flex;

      .slide {
        flex-shrink: 0;
        width: @slide_width;
        height: @slide_height;
        display: flex;
        align-items: center;
        justify-content: center;

        .slide-con {
          width: 100%;
          height: 100%;
          color: #fff;
          background: burlywood;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    // 分页器盒子
    .swiper-pagination-box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;

      .pagination-item {
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        color: cornflowerblue;
        background: #ccc;
        // font-size: 0;
        margin: 0 4px;
      }

      .pagination-item__active {
        background: #eee;
      }
    }
  }

  .next-wrap,
  .prev-wrap {
    display: inline-block;
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccc;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
