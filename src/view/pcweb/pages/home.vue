<template>
  <div class="home">
    <banner />
    <introduction />
    <float-right />
  </div>
</template>

<script>
import banner from '../components/home/banner'
import introduction from '../components/home/introduction'
import floatRight from '../components/home/floatRight'
import { toast, toastLoading } from '@/utils/toast'

export default {
  components: {
    banner,
    introduction,
    floatRight
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
