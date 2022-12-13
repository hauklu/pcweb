<template>
  <div class="solution">
    <banner />
    <solution />
    <contact />
  </div>
</template>

<script>
import banner from '../components/try/banner'
import solution from '../components/try/solution'
import contact from '../components/try/contact'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    solution,
    contact
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
