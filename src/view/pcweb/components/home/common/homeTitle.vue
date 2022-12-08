<template>
  <div class="home-title">
    <div class="title">
      <img
        src="../../../../../../static/img/home/icon2.png"
        class="icon-left"
      >
      <span class="text">
        <slot name="title" />
      </span>
      <img
        src="../../../../../../static/img/home/icon1.png"
        class="icon-right"
      >
    </div>
    <div class="desc">
      <slot name="desc" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url(../../../assets/css/variable.less);

.home-title {
  position: relative;
  width: 100%;
  margin-top: 80px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-left,
    .icon-right {
      width: 22px;
      height: 22px;
    }

    .icon-left {
    }

    .icon-right {
    }

    .text {
      font-size: 32px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      line-height: 38px;
      margin: 0 17px;
    }
  }

  .desc {
    text-align: center;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }
}
</style>
