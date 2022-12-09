<template>
  <div class="banner">
    <div class="minibox">
      <div
        :style="`background-image: url(${banner});`"
        class="banner"
      />
    </div>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'
export default {
  components: {
  },
  data() {
    return {
      banner: require('@img/solution/banner.png')
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 游戏下载
    gameDownload() {
      toast('暂未开放, 敬请期待!')
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

@height: 420px; // 组件高度

.banner {
  position: relative;
  width: 100%;
  height: @height;

  .minibox {
    position: relative;
    margin: auto;
    width: @mini_width;
    height: @height;
    overflow: hidden;
  }

  .banner {
    width: @mini_width;
    height: @height;
    background-size: 100% 100%;
  }
}
</style>
