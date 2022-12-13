<template>
  <div class="solution">
    <banner />
    <production />
    <advantage />
    <display />
    <partner />
  </div>
</template>

<script>
import banner from './banner'
import production from './scrm/production'
import advantage from './scrm/advantage'
import display from './scrm/display'
import partner from '@/view/pcweb/components/home/partner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    production,
    advantage,
    display,
    partner
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
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
