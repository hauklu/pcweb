<template>
  <div class="solution">
    <router-view />
  </div>
</template>

<script>
import banner from '../components/production/banner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner
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

.solution {
  width: 100%;
}
</style>
