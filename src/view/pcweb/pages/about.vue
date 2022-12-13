<template>
  <div class="solution">
    <banner />
    <introduction />
  </div>
</template>

<script>
import banner from '../components/about/banner'
import introduction from '../components/about/introduction'
export default {
  components: {
    banner,
    introduction
  },
  data() {
    return {
      // 组件状态
      visi: {},
      // 子组件数据
      moduleData: undefined
    }
  },
  created() {
    // this.init()
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
