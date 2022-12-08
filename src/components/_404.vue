<template>
  <div class="m-404">
    <van-empty
      image="error"
      description="页面走丢了咯~"
    />
    <van-button
      class="btn m-home-module-btn-bg"
      round
      @click="goHome"
    >
      返回活动页
    </van-button>
  </div>
</template>

<script>
import { Empty } from 'vant'
import { Button } from 'vant'
export default {
  components: {
    vanEmpty: Empty,
    vanButton: Button
  },
  methods: {
    goHome() {
      this.$router.replace('taurus?cid=mtkj')
    }
  }
}
</script>
<style lang="less" scoped>
.m-404 {
  .btn {
    width: 200px;
    display: block;
    margin: 0 auto;
    color: #ccc;
  }
}
</style>
