<template>
  <div class="solution">
    <banner />
    <production />
    <core />
    <advantage />
    <scene />
    <partner />
  </div>
</template>

<script>
import banner from './banner'
import production from './workMobile/production'
import core from './workMobile/core'
import advantage from './workMobile/advantage'
import scene from '@/view/pcweb/components/home/scene'
import partner from '@/view/pcweb/components/home/partner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    production,
    core,
    advantage,
    scene,
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
