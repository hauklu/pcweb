<template>
  <div class="home-banner">
    <div class="root-swiper">
      <swiper
        :options="swiperOptions"
        class="banner-swiper"
      >
        <swiper-slide
          v-for="(item, idx) of swiperlist"
          :key="idx"
          class="banner-slide"
        >
          <div
            :style="`background-image: url(${item.banner});`"
            class="slide-bg"
          >
            <div class="slide-minibox">
              <h1>{{ item.name }}</h1>
              <ul>
                <li
                  v-for="(listItem, listIdx) of item.list"
                  :key="listIdx"
                >
                  <img
                    src="../../../../../static/img/home/banner-icon-1x.png"
                    class="icon"
                  >
                  <span>{{ listItem }}</span>
                </li>
              </ul>
              <button class="button">点击了解更多</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-minibox">
        <div class="swiper-button-prev">
          <img
            src="../../../../../static/img/home/icon9.png"
            class="arrow-left click hover"
          >
        </div>
        <div class="swiper-button-next">
          <img
            src="../../../../../static/img/home/icon8.png"
            class="arrow-right click hover"
          >
        </div>
      </div>
      <div class="banner-bottom">
        <div class="banner-bottom-minibox">
          <ul>
            <li
              v-for="(item, idx) of bottomList"
              :key="idx"
            >
              <img
                :src="item.icon"
                class="left"
              >
              <div class="right">
                <span class="num">{{ item.num }}{{ item.numLabel }}</span>
                <span class="desc">{{ item.desc }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'
export default {
  components: {},
  data() {
    return {
      list: [1, 2, 3, 4],
      // 导航列表
      swiperlist: [
        {
          name: '一站式企业通信解决方案',
          banner: require('@img/home/banner1-1x.png'),
          list: ['全国归属 精准电销', '高频呼叫 稳定防封', '智能外显 畅通呼叫']
        },
        {
          name: '持脉防控管理APP',
          banner: require('@img/home/banner2-1x.png'),
          list: [
            '智能拦截 降低投诉',
            '一键拨号 方便快捷',
            '通话跟进 快捷记录',
            '客资流转 高效管理'
          ]
        },
        {
          name: '持脉工作手机',
          banner: require('@img/home/banner3-1x.png'),
          list: ['全国归属 精准电销', '高频呼叫 稳定防封', '智能外显 畅通呼叫']
        }
      ],
      cIdx: 0, // tab当前下标位置
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      bottomList: [
        {
          icon: require('@img/home/icon5.png'),
          num: 10,
          numLabel: '+',
          desc: '10年专业品质'
        },
        {
          icon: require('@img/home/icon4.png'),
          num: 30,
          numLabel: '+',
          desc: '覆盖全国省市'
        },
        {
          icon: require('@img/home/icon6.png'),
          num: 10000,
          numLabel: '+',
          desc: '企业选择'
        },
        {
          icon: require('@img/home/icon7.png'),
          num: 10,
          numLabel: '万+',
          desc: '线上运营坐席'
        }
      ]
    }
  },
  created() { },
  mounted() { },
  methods: {
    // 游戏下载
    gameDownload() {
      toast('暂未开放, 敬请期待!')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';
@height: 640px; // 组件高度

.home-banner {
  position: relative;
  width: 100%;
  height: @height;
  float: left;

  .root-swiper {
    position: relative;
    height: @height;

    .banner-swiper {
      height: @height;

      .slide-bg {
        width: 100%;
        height: @height;
        background-repeat: no-repeat;
        background-position: top center;
        padding-top: 180px;
        box-sizing: border-box;

        .slide-minibox {
          position: relative;
          margin: 0 auto;
          width: @mini_width;
          height: @height;
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-size: 48px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #ffffff;
            line-height: 56px;
          }

          ul {
            display: flex;
            align-items: center;
            margin-top: 22px;

            li {
              display: inline-block;
              vertical-align: middle;
              margin-right: 50px;

              .icon,
              span {
                display: inline-block;
                vertical-align: middle;
              }

              .icon {
                width: 19px;
                height: 19px;
              }

              span {
                line-height: 16px;
                font-size: 16px;
                color: #fff;
                font-weight: 500;
                margin-left: 4px;
              }
            }
          }

          button {
            width: 192px;
            height: 44px;
            background: linear-gradient(124deg, #368dff 0%, #2bb5fd 100%);
            border-radius: 52px 52px 52px 52px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            margin-top: 68px;
          }
        }
      }
    }
  }

  .swiper-button-minibox {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    width: @mini_width;

    .swiper-button-next,
    .swiper-button-prev {
      position: absolute;
      z-index: 3;
      top: 270px;
      width: 44px;
      height: 44px;

      .arrow-left,
      .arrow-right {
        width: 44px;
        height: 44px;
      }

      &::after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 180px;
    }

    .swiper-button-next {
      right: 180px;
    }
  }

  .banner-bottom {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 86px;
    margin: auto;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

    .banner-bottom-minibox {
      width: @mini_width;
      height: 86px;
      margin: auto;
      padding: 10px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      display: flex;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 304px;
        border-right: 1px solid #4c5471;
        box-sizing: border-box;

        .left {
          width: 36px;
          height: 36px;
        }

        .right {
          margin-left: 10px;

          .num {
            display: block;
            vertical-align: baseline;
            font-size: 18px;
            font-weight: bold;
            color: #2cb3fd;
          }

          .desc {
            display: block;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
          }
        }

        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
