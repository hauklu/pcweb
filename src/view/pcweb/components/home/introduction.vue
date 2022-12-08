<template>
  <div class="introduction-wrap">
    <div class="introduction-minibox">
      <img
        :src="$static.home.home_platform_introduction"
        class="con"
      >
      <span class="seo">传奇攻略，传奇版本资料，传奇玩法介绍</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.introduction-wrap {
  position: relative;
  width: 100%;
  height: 650px;

  .introduction-minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .seo {
      .seo();
    }
  }
}
</style>
