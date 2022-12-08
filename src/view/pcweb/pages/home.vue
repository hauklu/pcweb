<template>
  <div class="home">
    <banner />
    <production />
    <scheme />
    <!-- <float-right /> -->
  </div>
</template>

<script>
import banner from '../components/home/banner'
import floatRight from '../components/home/floatRight'
import production from '../components/home/production'
import scheme from '../components/home/scheme.vue'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    floatRight,
    production,
    scheme
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
    toastLoading,
    toast
  }
}
</script>

<style lang="less" scoped>
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.home {
  width: 100%;
}
</style>
