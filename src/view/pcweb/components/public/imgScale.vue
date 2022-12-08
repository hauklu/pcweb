<template>
  <div class="pb-scale">

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

.pb-scale {
  width: 252px;
  height: 144px;
  overflow: hidden;
  .banner-img {
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
